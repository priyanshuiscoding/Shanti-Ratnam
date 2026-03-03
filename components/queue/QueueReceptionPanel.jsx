"use client";

import { useEffect, useMemo, useState } from "react";
import { getClientLocaleFromPath, withLocalePath } from "@/lib/locale";

export default function QueueReceptionPanel() {
  const [data, setData] = useState(null);
  const [departmentCode, setDepartmentCode] = useState("G");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function loadState() {
    const response = await fetch("/api/queue/state", { cache: "no-store" });
    const payload = await response.json();
    if (!response.ok || !payload.ok) {
      throw new Error(payload.message || "Failed to load queue.");
    }
    setData(payload.data);
    if (payload.data?.departments?.length && !departmentCode) {
      setDepartmentCode(payload.data.departments[0].code);
    }
  }

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      try {
        await loadState();
      } catch (err) {
        if (mounted) setError(err.message || "Failed to load queue.");
      }
    };
    run();
    const id = setInterval(run, 6000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const entries = data?.entries || [];
  const waitingInDepartment = useMemo(
    () =>
      entries.filter(
        (item) => item.departmentCode === departmentCode && (item.status === "waiting" || item.status === "called" || item.status === "in_consultation")
      ),
    [entries, departmentCode]
  );

  async function doAction(action, entryId = "") {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/queue/reception", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, departmentCode, entryId })
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || "Action failed.");
      }
      setData(payload.data);
    } catch (err) {
      setError(err.message || "Action failed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/queue/auth/logout", { method: "POST" });
    const locale = getClientLocaleFromPath(window.location.pathname || "/");
    window.location.assign(withLocalePath("/queue/login", locale));
  }

  function openDisplayScreen() {
    const locale = getClientLocaleFromPath(window.location.pathname || "/");
    window.open(withLocalePath("/queue/display", locale), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="container queue-reception-wrap">
      <div className="queue-reception-head">
        <div>
          <p className="mini-kicker">Reception Panel</p>
          <h1>Manage Queue</h1>
        </div>
        <div className="queue-admin-actions">
          <button type="button" onClick={openDisplayScreen} className="queue-secondary-btn">
            Open Display Screen
          </button>
          <button type="button" onClick={handleLogout} className="queue-secondary-btn">
            Logout
          </button>
        </div>
      </div>
      {error ? <p className="queue-error">{error}</p> : null}

      <article className="queue-reception-controls">
        <label>
          Department
          <select
            value={departmentCode}
            onChange={(e) => setDepartmentCode(e.target.value)}
            disabled={busy}
          >
            {(data?.departments || []).map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => doAction("call_next")} disabled={busy}>
          Call Next
        </button>
      </article>

      <div className="queue-reception-list">
        {waitingInDepartment.map((entry) => (
          <article key={entry.id} className="queue-reception-item">
            <div>
              <h3>{entry.token}</h3>
              <p>{entry.name}</p>
              <p>{entry.phone}</p>
              <p>Status: {entry.status}</p>
            </div>
            <div className="queue-reception-actions">
              <button type="button" onClick={() => doAction("mark_in_consultation", entry.id)} disabled={busy}>
                In Consultation
              </button>
              <button type="button" onClick={() => doAction("mark_completed", entry.id)} disabled={busy}>
                Complete
              </button>
              <button type="button" onClick={() => doAction("skip", entry.id)} disabled={busy}>
                Skip
              </button>
              <button type="button" onClick={() => doAction("recall", entry.id)} disabled={busy}>
                Recall
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
