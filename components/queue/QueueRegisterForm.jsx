"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getClientLocaleFromPath } from "@/lib/locale";

export default function QueueRegisterForm({ departments = [] }) {
  const pathname = usePathname() || "/";
  const locale = getClientLocaleFromPath(pathname);
  const t =
    locale === "hi"
      ? {
          kicker: "क्यूआर पंजीकरण",
          heading: "रजिस्टर करें और अपना टोकन प्राप्त करें",
          subheading: "फॉर्म भरें और डिस्प्ले स्क्रीन पर अपने टोकन का इंतज़ार करें।",
          token: "टोकन",
          department: "विभाग",
          peopleAhead: "आपसे पहले लोग",
          date: "तारीख",
          fullName: "पूरा नाम",
          phoneNumber: "फोन नंबर",
          noteOptional: "नोट (वैकल्पिक)",
          submit: "टोकन प्राप्त करें",
          submitting: "जमा हो रहा है...",
          howItWorks: "यह कैसे काम करता है",
          step1: "अपना विवरण भरें।",
          step2: "अपना टोकन नंबर सुरक्षित रखें।",
          step3: "वेटिंग एरिया में क्यू डिस्प्ले स्क्रीन देखें।",
          step4: "टोकन कॉल होने पर आगे बढ़ें।",
          selectedDepartment: "चयनित विभाग",
          registerError: "पंजीकरण नहीं हो सका।"
        }
      : {
          kicker: "QR Queue Registration",
          heading: "Register and Get Your Token",
          subheading: "Fill this form and wait for your token on the display screen.",
          token: "Token",
          department: "Department",
          peopleAhead: "People ahead",
          date: "Date",
          fullName: "Full Name",
          phoneNumber: "Phone Number",
          noteOptional: "Note (Optional)",
          submit: "Get Token",
          submitting: "Submitting...",
          howItWorks: "How it works",
          step1: "Submit your details.",
          step2: "Save your token number.",
          step3: "Watch the queue display screen in waiting area.",
          step4: "Proceed when your token is called.",
          selectedDepartment: "Selected Department",
          registerError: "Unable to register queue."
        };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    departmentCode: departments[0]?.code || "G",
    note: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (departments.length > 0) {
      setForm((prev) => ({ ...prev, departmentCode: departments[0].code }));
    }
  }, [departments]);

  const selectedDepartment = useMemo(
    () => departments.find((item) => item.code === form.departmentCode)?.name || "",
    [departments, form.departmentCode]
  );

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const response = await fetch("/api/queue/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.message || t.registerError);
      }
      setResult(data);
      setForm((prev) => ({ ...prev, name: "", phone: "", note: "" }));
    } catch (err) {
      setError(err.message || t.registerError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container queue-register-wrap">
      <article className="queue-register-card">
        <p className="mini-kicker">{t.kicker}</p>
        <h1>{t.heading}</h1>
        <p className="lead">{t.subheading}</p>

        {error ? <p className="queue-error">{error}</p> : null}
        {result ? (
          <div className="queue-token-card">
            <h2>{t.token}: {result.token}</h2>
            <p>{t.department}: {result.departmentName}</p>
            <p>{t.peopleAhead}: {result.queueAhead}</p>
            <p>{t.date}: {result.dayKey}</p>
          </div>
        ) : null}

        <form className="queue-register-form" onSubmit={onSubmit}>
          <label>
            {t.fullName}
            <input
              type="text"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
            />
          </label>
          <label>
            {t.phoneNumber}
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              required
            />
          </label>
          <label>
            {t.department}
            <select
              value={form.departmentCode}
              onChange={(e) => updateField("departmentCode", e.target.value)}
              required
            >
              {departments.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.noteOptional}
            <textarea
              value={form.note}
              onChange={(e) => updateField("note", e.target.value)}
              rows={3}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? t.submitting : t.submit}
          </button>
        </form>
      </article>

      <article className="queue-register-help">
        <h3>{t.howItWorks}</h3>
        <ol>
          <li>{t.step1}</li>
          <li>{t.step2}</li>
          <li>{t.step3}</li>
          <li>{t.step4}</li>
        </ol>
        <p>{t.selectedDepartment}: {selectedDepartment || "-"}</p>
      </article>
    </section>
  );
}
