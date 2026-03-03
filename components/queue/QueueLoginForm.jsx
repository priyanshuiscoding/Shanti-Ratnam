"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getClientLocaleFromPath, withLocalePath } from "@/lib/locale";

export default function QueueLoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("reception");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const locale =
    typeof window === "undefined"
      ? "en"
      : getClientLocaleFromPath(window.location.pathname || "/");
  const denied = params.get("denied") === "1";

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/queue/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, password })
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Login failed.");
      }
      const next = role === "admin" ? "/queue/admin" : "/queue/reception";
      router.push(withLocalePath(next, locale));
      router.refresh();
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container queue-auth-wrap">
      <article className="queue-auth-card">
        <p className="mini-kicker">Queue Access</p>
        <h1>Reception / Admin Login</h1>
        <p className="lead">Use your staff password to manage queue operations.</p>
        {denied ? <p className="queue-error">Admin access is required for that page.</p> : null}
        {error ? <p className="queue-error">{error}</p> : null}
        <form className="queue-auth-form" onSubmit={handleSubmit}>
          <label>
            Role
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="reception">Reception</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label>
            Password
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="queue-show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show Password
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </article>
    </section>
  );
}
