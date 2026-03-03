import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "queue-store.json");

const DEFAULT_DEPARTMENTS = [
  { code: "G", name: "General OPD" },
  { code: "D", name: "Diabetes" },
  { code: "N", name: "Neuro-Pain" },
  { code: "P", name: "Panchakarma" }
];

let queueWriteChain = Promise.resolve();

function getTodayKey() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function createInitialState() {
  return {
    dayKey: getTodayKey(),
    departments: DEFAULT_DEPARTMENTS,
    counters: {},
    nowServing: {},
    entries: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(createInitialState(), null, 2), "utf8");
  }
}

function normalizeState(state) {
  const safe = state && typeof state === "object" ? state : createInitialState();

  if (!Array.isArray(safe.departments) || safe.departments.length === 0) {
    safe.departments = DEFAULT_DEPARTMENTS;
  }
  if (!safe.counters || typeof safe.counters !== "object") {
    safe.counters = {};
  }
  if (!safe.nowServing || typeof safe.nowServing !== "object") {
    safe.nowServing = {};
  }
  if (!Array.isArray(safe.entries)) {
    safe.entries = [];
  }
  if (!safe.dayKey) {
    safe.dayKey = getTodayKey();
  }

  if (safe.dayKey !== getTodayKey()) {
    safe.dayKey = getTodayKey();
    safe.counters = {};
    safe.nowServing = {};
    safe.entries = [];
  }

  return safe;
}

async function readState() {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  const parsed = JSON.parse(raw || "{}");
  return normalizeState(parsed);
}

async function writeState(state) {
  const nextState = normalizeState(state);
  nextState.updatedAt = new Date().toISOString();
  await fs.writeFile(DATA_FILE, JSON.stringify(nextState, null, 2), "utf8");
}

async function withQueueState(updater) {
  queueWriteChain = queueWriteChain.then(async () => {
    const current = await readState();
    const next = await updater(current);
    await writeState(next);
    return next;
  });
  return queueWriteChain;
}

function getDepartmentByCode(state, code) {
  return state.departments.find((item) => item.code === code);
}

export async function getQueueState() {
  return readState();
}

export async function registerQueueEntry(payload) {
  const name = String(payload?.name || "").trim();
  const phone = String(payload?.phone || "").trim();
  const departmentCode = String(payload?.departmentCode || "G").trim().toUpperCase();
  const note = String(payload?.note || "").trim();

  if (!name || name.length < 2) {
    throw new Error("Name is required.");
  }
  if (!phone || phone.length < 8) {
    throw new Error("Valid phone is required.");
  }

  return withQueueState((state) => {
    const department = getDepartmentByCode(state, departmentCode) || state.departments[0];
    const code = department.code;
    const nextNumber = (state.counters[code] || 0) + 1;
    state.counters[code] = nextNumber;

    const entry = {
      id: crypto.randomUUID(),
      token: `${code}-${String(nextNumber).padStart(3, "0")}`,
      serialNumber: nextNumber,
      departmentCode: code,
      departmentName: department.name,
      name,
      phone,
      note,
      status: "waiting",
      createdAt: new Date().toISOString(),
      calledAt: null,
      completedAt: null
    };

    state.entries.push(entry);
    return state;
  });
}

export async function receptionAction(payload) {
  const action = String(payload?.action || "").trim();
  const departmentCode = String(payload?.departmentCode || "G").trim().toUpperCase();
  const entryId = payload?.entryId ? String(payload.entryId) : "";

  return withQueueState((state) => {
    const now = new Date().toISOString();

    if (action === "call_next") {
      const waiting = state.entries
        .filter((item) => item.departmentCode === departmentCode && item.status === "waiting")
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      if (waiting.length > 0) {
        const next = waiting[0];
        next.status = "called";
        next.calledAt = now;
        state.nowServing[departmentCode] = next.id;
      }
      return state;
    }

    const target = state.entries.find((item) => item.id === entryId);
    if (!target) return state;

    if (action === "mark_completed") {
      target.status = "completed";
      target.completedAt = now;
      if (state.nowServing[target.departmentCode] === target.id) {
        delete state.nowServing[target.departmentCode];
      }
    } else if (action === "skip") {
      target.status = "skipped";
      if (state.nowServing[target.departmentCode] === target.id) {
        delete state.nowServing[target.departmentCode];
      }
    } else if (action === "recall") {
      target.status = "waiting";
      target.calledAt = null;
      target.completedAt = null;
      if (state.nowServing[target.departmentCode] === target.id) {
        delete state.nowServing[target.departmentCode];
      }
    } else if (action === "mark_in_consultation") {
      target.status = "in_consultation";
    }

    return state;
  });
}

export async function adminAction(payload) {
  const action = String(payload?.action || "").trim();

  return withQueueState((state) => {
    if (action === "reset_day") {
      state.dayKey = getTodayKey();
      state.counters = {};
      state.nowServing = {};
      state.entries = [];
      return state;
    }

    if (action === "set_departments" && Array.isArray(payload?.departments)) {
      const departments = payload.departments
        .map((item) => ({
          code: String(item.code || "").trim().toUpperCase().slice(0, 2),
          name: String(item.name || "").trim()
        }))
        .filter((item) => item.code && item.name);

      if (departments.length > 0) {
        state.departments = departments;
        const validCodes = new Set(departments.map((d) => d.code));
        state.entries = state.entries.filter((entry) => validCodes.has(entry.departmentCode));
        Object.keys(state.nowServing).forEach((code) => {
          if (!validCodes.has(code)) {
            delete state.nowServing[code];
          }
        });
      }
      return state;
    }

    return state;
  });
}

export function createQueueView(state) {
  const byId = new Map(state.entries.map((item) => [item.id, item]));

  const nowServing = state.departments.map((dept) => {
    const entryId = state.nowServing[dept.code];
    const entry = entryId ? byId.get(entryId) : null;
    return {
      departmentCode: dept.code,
      departmentName: dept.name,
      token: entry?.token || null
    };
  });

  const waiting = state.entries
    .filter((item) => item.status === "waiting")
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const waitingByDepartment = state.departments.map((dept) => ({
    departmentCode: dept.code,
    departmentName: dept.name,
    count: waiting.filter((item) => item.departmentCode === dept.code).length
  }));

  return {
    dayKey: state.dayKey,
    departments: state.departments,
    nowServing,
    waitingByDepartment,
    nextTokens: waiting.slice(0, 8).map((item) => ({
      id: item.id,
      token: item.token,
      departmentCode: item.departmentCode,
      departmentName: item.departmentName
    })),
    entries: state.entries
  };
}
