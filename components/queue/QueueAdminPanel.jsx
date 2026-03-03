"use client";

import { useEffect, useState } from "react";
import { getClientLocaleFromPath, withLocalePath } from "@/lib/locale";

export default function QueueAdminPanel() {
  const [data, setData] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/queue/state", { cache: "no-store" });
        const payload = await response.json();
        if (!response.ok || !payload.ok) {
          throw new Error(payload.message || "Failed to load state.");
        }
        setData(payload.data);
        setDepartments(payload.data.departments || []);
      } catch (err) {
        setError(err.message || "Failed to load state.");
      }
    };
    load();
  }, []);

  async function doAdminAction(action, body = {}) {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/queue/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...body })
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || "Action failed.");
      }
      setData(payload.data);
      setDepartments(payload.data.departments || []);
    } catch (err) {
      setError(err.message || "Action failed.");
    } finally {
      setBusy(false);
    }
  }

  function updateDepartment(index, key, value) {
    setDepartments((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, [key]: value } : item))
    );
  }

  function addDepartment() {
    setDepartments((prev) => [...prev, { code: "", name: "" }]);
  }

  async function saveDepartments() {
    await doAdminAction("set_departments", { departments });
  }

  async function logout() {
    await fetch("/api/queue/auth/logout", { method: "POST" });
    const locale = getClientLocaleFromPath(window.location.pathname || "/");
    window.location.assign(withLocalePath("/queue/login", locale));
  }

  function openDisplayScreen() {
    const locale = getClientLocaleFromPath(window.location.pathname || "/");
    window.open(withLocalePath("/queue/display", locale), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="container queue-admin-wrap">
      <div className="queue-reception-head">
        <div>
          <p className="mini-kicker">Queue Admin</p>
          <h1>Settings and Daily Controls</h1>
        </div>
        <div className="queue-admin-actions">
          <button type="button" className="queue-secondary-btn" onClick={openDisplayScreen}>
            Open Display Screen
          </button>
          <button type="button" className="queue-secondary-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      {error ? <p className="queue-error">{error}</p> : null}

      <article className="queue-admin-card">
        <h2>Daily Actions</h2>
        <p>
          Current Day Key: <strong>{data?.dayKey || "-"}</strong>
        </p>
        <button type="button" onClick={() => doAdminAction("reset_day")} disabled={busy}>
          Reset Queue For New Day
        </button>
      </article>

      <article className="queue-admin-card">
        <h2>Departments</h2>
        <div className="queue-admin-dept-grid">
          {departments.map((item, index) => (
            <div className="queue-admin-dept-row" key={`${index}-${item.code}`}>
              <input
                type="text"
                value={item.code}
                placeholder="Code"
                onChange={(e) => updateDepartment(index, "code", e.target.value.toUpperCase())}
              />
              <input
                type="text"
                value={item.name}
                placeholder="Department Name"
                onChange={(e) => updateDepartment(index, "name", e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="queue-admin-actions">
          <button type="button" className="queue-secondary-btn" onClick={addDepartment}>
            Add Department
          </button>
          <button type="button" onClick={saveDepartments} disabled={busy}>
            Save Departments
          </button>
        </div>
      </article>
    </section>
  );
}
