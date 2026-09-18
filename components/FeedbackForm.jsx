"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getClientLocaleFromPath } from "@/lib/locale";

const scoreOptions = [
  { value: "5 - Excellent", hi: "5 - बहुत अच्छा" },
  { value: "4 - Good", hi: "4 - अच्छा" },
  { value: "3 - Average", hi: "3 - सामान्य" },
  { value: "2 - Poor", hi: "2 - खराब" },
  { value: "1 - Very poor", hi: "1 - बहुत खराब" }
];

const clarityOptions = [
  { value: "5 - Very clear", hi: "5 - बहुत स्पष्ट" },
  { value: "4 - Clear", hi: "4 - स्पष्ट" },
  { value: "3 - Somewhat clear", hi: "3 - थोड़ा स्पष्ट" },
  { value: "2 - Unclear", hi: "2 - अस्पष्ट" },
  { value: "1 - Very unclear", hi: "1 - बिल्कुल स्पष्ट नहीं" }
];

const text = {
  en: {
    visitDetails: "Visit details",
    fullName: "Full name",
    phone: "Phone number",
    visitDate: "Visit date",
    experienceScores: "Experience scores",
    satisfaction: "Overall satisfaction",
    staffBehavior: "Staff behavior",
    guidanceClarity: "Clarity of guidance",
    recommendScore: "Likely to recommend",
    selectScore: "Select score",
    selectNps: "Select NPS score",
    issue: "Any issue or suggestion?",
    issuePlaceholder: "Share anything that needs attention.",
    consent:
      "The team may contact me if they need more details about this feedback.",
    submitting: "Submitting...",
    submit: "Submit Feedback",
    success: "Thank you for sharing your feedback.",
    error: "Something went wrong. Please try again."
  },
  hi: {
    visitDetails: "विजिट की जानकारी",
    fullName: "पूरा नाम",
    phone: "फोन नंबर",
    visitDate: "विजिट की तारीख",
    experienceScores: "अनुभव रेटिंग",
    satisfaction: "कुल संतुष्टि",
    staffBehavior: "स्टाफ का व्यवहार",
    guidanceClarity: "मार्गदर्शन की स्पष्टता",
    recommendScore: "सिफारिश करने की संभावना",
    selectScore: "रेटिंग चुनें",
    selectNps: "NPS स्कोर चुनें",
    issue: "कोई समस्या या सुझाव?",
    issuePlaceholder: "जिस बात पर ध्यान देना जरूरी है, उसे लिखें।",
    consent:
      "यदि इस फीडबैक के बारे में अधिक जानकारी चाहिए, तो टीम मुझसे संपर्क कर सकती है।",
    submitting: "सबमिट हो रहा है...",
    submit: "फीडबैक भेजें",
    success: "धन्यवाद। आपका फीडबैक सबमिट हो गया है।",
    error: "कुछ समस्या हुई। कृपया फिर से कोशिश करें।"
  }
};

const initialFeedback = {
  fullName: "",
  phone: "",
  visitDate: "",
  satisfaction: "",
  staffBehavior: "",
  guidanceClarity: "",
  recommendScore: "",
  issue: "",
  permissionToContact: false
};

function localizedOption(option, locale) {
  return locale === "hi" ? option.hi : option.value;
}

export default function FeedbackForm({ initialLocale = "en" }) {
  const pathname = usePathname() || "/";
  const [cookieLocale, setCookieLocale] = useState(null);
  const pathLocale = getClientLocaleFromPath(pathname);
  const locale = cookieLocale || initialLocale || pathLocale;
  const t = text[locale] || text.en;
  const [form, setForm] = useState(initialFeedback);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith("NEXT_LOCALE="));
    const value = cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
    setCookieLocale(value === "hi" ? "hi" : value === "en" ? "en" : null);
  }, [pathname]);

  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/patient-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || t.error);
      }

      setStatus({ type: "success", message: t.success });
      setForm(initialFeedback);
    } catch (error) {
      setStatus({ type: "error", message: error.message || t.error });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="consultation-form intake-form feedback-form" onSubmit={handleSubmit}>
      <fieldset className="intake-section">
        <legend>{t.visitDetails}</legend>
        <div className="intake-grid">
          <label>
            {t.fullName}
            <input
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              required
            />
          </label>
          <label>
            {t.phone}
            <input
              name="phone"
              type="tel"
              pattern="[0-9+\\-\\s]{10,15}"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              required
            />
          </label>
          <label>
            {t.visitDate}
            <input
              name="visitDate"
              type="date"
              value={form.visitDate}
              onChange={(event) => updateField("visitDate", event.target.value)}
              required
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="intake-section">
        <legend>{t.experienceScores}</legend>
        <div className="intake-grid">
          <label>
            {t.satisfaction}
            <select
              name="satisfaction"
              value={form.satisfaction}
              onChange={(event) => updateField("satisfaction", event.target.value)}
              required
            >
              <option value="">{t.selectScore}</option>
              {scoreOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {localizedOption(option, locale)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.staffBehavior}
            <select
              name="staffBehavior"
              value={form.staffBehavior}
              onChange={(event) => updateField("staffBehavior", event.target.value)}
              required
            >
              <option value="">{t.selectScore}</option>
              {scoreOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {localizedOption(option, locale)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.guidanceClarity}
            <select
              name="guidanceClarity"
              value={form.guidanceClarity}
              onChange={(event) => updateField("guidanceClarity", event.target.value)}
              required
            >
              <option value="">{t.selectScore}</option>
              {clarityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {localizedOption(option, locale)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.recommendScore}
            <select
              name="recommendScore"
              value={form.recommendScore}
              onChange={(event) => updateField("recommendScore", event.target.value)}
              required
            >
              <option value="">{t.selectNps}</option>
              {Array.from({ length: 11 }, (_, score) => (
                <option key={score}>{score}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="intake-full">
          {t.issue}
          <textarea
            name="issue"
            rows={4}
            placeholder={t.issuePlaceholder}
            value={form.issue}
            onChange={(event) => updateField("issue", event.target.value)}
          />
        </label>
      </fieldset>

      <label className="intake-consent">
        <input
          name="permissionToContact"
          type="checkbox"
          checked={form.permissionToContact}
          onChange={(event) => updateField("permissionToContact", event.target.checked)}
        />
        {t.consent}
      </label>

      <button type="submit" disabled={submitting}>
        {submitting ? t.submitting : t.submit}
      </button>

      {status.message ? (
        <p className={status.type === "error" ? "form-error" : "form-success"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
