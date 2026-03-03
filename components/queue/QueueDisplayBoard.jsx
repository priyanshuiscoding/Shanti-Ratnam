"use client";

import { useEffect, useState } from "react";

function DepartmentRow({ item }) {
  return (
    <div className="queue-display-now-item">
      <p>{item.departmentName}</p>
      <h3>{item.token || "--"}</h3>
    </div>
  );
}

export default function QueueDisplayBoard() {
  const [state, setState] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const response = await fetch("/api/queue/state", { cache: "no-store" });
        const data = await response.json();
        if (!response.ok || !data.ok) throw new Error(data.message || "Failed to load queue.");
        if (mounted) setState(data.data);
      } catch (err) {
        if (mounted) setError(err.message || "Failed to load queue.");
      }
    };

    load();
    const id = setInterval(load, 5000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return (
    <section className="container queue-display-wrap">
      <p className="mini-kicker">Live Queue Display</p>
      <h1>Now Serving</h1>
      {error ? <p className="queue-error">{error}</p> : null}

      <div className="queue-display-now-grid">
        {(state?.nowServing || []).map((item) => (
          <DepartmentRow key={item.departmentCode} item={item} />
        ))}
      </div>

      <article className="queue-display-next">
        <h2>Next Tokens</h2>
        <div className="queue-display-next-grid">
          {(state?.nextTokens || []).map((item) => (
            <div key={item.id} className="queue-display-next-item">
              <h3>{item.token}</h3>
              <p>{item.departmentName}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
