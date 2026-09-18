"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getClientLocaleFromPath } from "@/lib/locale";

const concernOptions = [
  { value: "Spine / Joint Care", hi: "रीढ़ / जोड़ों की समस्या" },
  { value: "Diabetes / Metabolic Care", hi: "डायबिटीज / मेटाबॉलिक केयर" },
  { value: "Women's Health", hi: "महिला स्वास्थ्य" },
  { value: "Skin / Hair", hi: "त्वचा / बाल" },
  { value: "Rehab / Physiotherapy", hi: "रिहैब / फिजियोथेरेपी" },
  { value: "Wellness / Yoga", hi: "वेलनेस / योग" },
  { value: "Panchakarma", hi: "पंचकर्म" },
  { value: "Other", hi: "अन्य" }
];

const optionLabels = {
  "Below 18": "18 वर्ष से कम",
  "18-30": "18-30",
  "31-45": "31-45",
  "46-60": "46-60",
  "60+": "60+",
  "Less than 1 week": "1 सप्ताह से कम",
  "1-4 weeks": "1-4 सप्ताह",
  "1-6 months": "1-6 महीने",
  "More than 6 months": "6 महीने से अधिक",
  "More than 1 year": "1 वर्ष से अधिक",
  "Online consultation": "ऑनलाइन परामर्श",
  "In-person consultation": "सेंटर पर परामर्श",
  "Team can suggest": "टीम सुझाव दे सकती है",
  Yes: "हाँ",
  No: "नहीं",
  "Not sure": "पता नहीं",
  "Can share later": "बाद में साझा कर सकते हैं",
  Morning: "सुबह",
  Afternoon: "दोपहर",
  Evening: "शाम",
  Anytime: "कभी भी",
  Mild: "हल्का",
  Moderate: "मध्यम",
  Severe: "ज्यादा",
  "Very severe": "बहुत ज्यादा",
  Sometimes: "कभी-कभी",
  "Planning to get it": "करवाने की योजना है",
  Detox: "डिटॉक्स",
  "Pain relief": "दर्द में राहत",
  Wellness: "वेलनेस",
  Skin: "त्वचा",
  Weight: "वजन",
  "OPD only": "केवल OPD",
  "3-5 days": "3-5 दिन",
  "7 days": "7 दिन",
  "14 days": "14 दिन",
  Regular: "नियमित",
  Irregular: "अनियमित",
  "Not applicable": "लागू नहीं",
  "Prefer to discuss on call": "कॉल पर चर्चा करेंगे",
  Independent: "स्वतंत्र",
  "Needs support": "सहारे की जरूरत",
  "Bed rest": "बेड रेस्ट",
  Beginner: "शुरुआती",
  Intermediate: "मध्यम",
  "Regular practitioner": "नियमित अभ्यास"
};

const branchFields = {
  "Diabetes / Metabolic Care": [
    {
      name: "fastingSugar",
      label: "Recent fasting sugar",
      labelHi: "हाल की फास्टिंग शुगर",
      placeholder: "Example: 140 mg/dL or not checked",
      placeholderHi: "जैसे: 140 mg/dL या जांच नहीं कराई"
    },
    {
      name: "hba1c",
      label: "HbA1c available?",
      labelHi: "HbA1c रिपोर्ट उपलब्ध है?",
      type: "select",
      options: ["Yes", "No", "Not sure"]
    },
    {
      name: "diabetesMedication",
      label: "Medication currently taking",
      labelHi: "अभी कौन सी दवा ले रहे हैं",
      placeholder: "Tablet / insulin / none",
      placeholderHi: "टैबलेट / इंसुलिन / कोई नहीं"
    },
    {
      name: "diabetesDuration",
      label: "Duration of diabetes",
      labelHi: "डायबिटीज कितने समय से है",
      placeholder: "Example: 3 years",
      placeholderHi: "जैसे: 3 वर्ष"
    }
  ],
  "Spine / Joint Care": [
    {
      name: "painLocation",
      label: "Pain location",
      labelHi: "दर्द कहां है",
      placeholder: "Back, neck, knee, shoulder...",
      placeholderHi: "कमर, गर्दन, घुटना, कंधा..."
    },
    {
      name: "painSeverity",
      label: "Pain severity",
      labelHi: "दर्द की तीव्रता",
      type: "select",
      options: ["Mild", "Moderate", "Severe", "Very severe"]
    },
    {
      name: "numbness",
      label: "Numbness or tingling?",
      labelHi: "सुन्नपन या झनझनाहट?",
      type: "select",
      options: ["Yes", "No", "Sometimes"]
    },
    {
      name: "mriXray",
      label: "MRI / X-ray available?",
      labelHi: "MRI / X-ray रिपोर्ट उपलब्ध है?",
      type: "select",
      options: ["Yes", "No", "Planning to get it"]
    }
  ],
  Panchakarma: [
    {
      name: "panchakarmaInterest",
      label: "Primary Panchakarma interest",
      labelHi: "पंचकर्म में मुख्य रुचि",
      type: "select",
      options: ["Detox", "Pain relief", "Wellness", "Skin", "Weight", "Not sure"]
    },
    {
      name: "stayDuration",
      label: "Preferred stay duration",
      labelHi: "रुकने की पसंदीदा अवधि",
      type: "select",
      options: ["OPD only", "3-5 days", "7 days", "14 days", "Not sure"]
    },
    {
      name: "previousPanchakarma",
      label: "Previous Panchakarma experience?",
      labelHi: "पहले पंचकर्म कराया है?",
      type: "select",
      options: ["Yes", "No"]
    }
  ],
  "Women's Health": [
    {
      name: "womenHealthConcern",
      label: "Main women's health concern",
      labelHi: "मुख्य महिला स्वास्थ्य समस्या",
      placeholder: "PCOS, periods, fertility, menopause...",
      placeholderHi: "PCOS, पीरियड्स, फर्टिलिटी, मेनोपॉज..."
    },
    {
      name: "cycleRegularity",
      label: "Cycle regularity",
      labelHi: "मासिक चक्र नियमित है?",
      type: "select",
      options: ["Regular", "Irregular", "Not applicable", "Prefer to discuss on call"]
    }
  ],
  "Skin / Hair": [
    {
      name: "skinHairConcern",
      label: "Skin / hair concern",
      labelHi: "त्वचा / बाल की समस्या",
      placeholder: "Hair fall, acne, eczema, pigmentation...",
      placeholderHi: "बाल झड़ना, मुंहासे, एक्जिमा, पिगमेंटेशन..."
    },
    {
      name: "skinHairDuration",
      label: "How long has this been present?",
      labelHi: "यह समस्या कितने समय से है?",
      placeholder: "Example: 6 months",
      placeholderHi: "जैसे: 6 महीने"
    }
  ],
  "Rehab / Physiotherapy": [
    {
      name: "rehabReason",
      label: "Reason for rehab",
      labelHi: "रिहैब का कारण",
      placeholder: "Post-injury, post-surgery, mobility issue...",
      placeholderHi: "चोट के बाद, सर्जरी के बाद, चलने में समस्या..."
    },
    {
      name: "mobilityLevel",
      label: "Current mobility level",
      labelHi: "अभी चलने-फिरने की स्थिति",
      type: "select",
      options: ["Independent", "Needs support", "Bed rest", "Prefer to discuss on call"]
    }
  ],
  "Wellness / Yoga": [
    {
      name: "wellnessGoal",
      label: "Wellness goal",
      labelHi: "वेलनेस लक्ष्य",
      placeholder: "Stress, weight, sleep, energy, general wellness...",
      placeholderHi: "तनाव, वजन, नींद, ऊर्जा, सामान्य वेलनेस..."
    },
    {
      name: "yogaExperience",
      label: "Yoga experience",
      labelHi: "योग का अनुभव",
      type: "select",
      options: ["Beginner", "Intermediate", "Regular practitioner", "Not sure"]
    }
  ],
  Other: [
    {
      name: "otherConcern",
      label: "Please describe your concern",
      labelHi: "कृपया अपनी समस्या लिखें",
      placeholder: "Share the main issue you want guidance for",
      placeholderHi: "जिस समस्या के लिए मार्गदर्शन चाहिए, उसे लिखें"
    }
  ]
};

const text = {
  en: {
    sections: ["Patient Details", "Concern", "Callback"],
    patientDetails: "Patient details",
    fullName: "Full name",
    fullNamePlaceholder: "Patient full name",
    phone: "Phone number",
    whatsapp: "WhatsApp number",
    whatsappPlaceholder: "If different from phone",
    email: "Email",
    city: "City",
    cityPlaceholder: "City / town",
    ageGroup: "Age group",
    selectAgeGroup: "Select age group",
    preVisit: "Pre-visit intake",
    concernCategory: "Concern category",
    selectConcern: "Select concern",
    duration: "Duration",
    selectDuration: "Select duration",
    treatmentArea: "Preferred treatment area",
    treatmentAreaPlaceholder: "OPD, IPD, Panchakarma, program...",
    consultationMode: "Consultation mode",
    selectMode: "Select mode",
    symptoms: "Symptoms / concern summary",
    symptomsPlaceholder:
      "Briefly describe symptoms, diagnosis, medicines, or what guidance you need.",
    details: "details",
    select: "Select",
    reportsCallback: "Reports and callback",
    priorDiagnosis: "Prior diagnosis?",
    reportsAvailable: "Reports available?",
    callbackTime: "Preferred callback time",
    selectTime: "Select time",
    uploadReport: "Upload report",
    fileHint: "Optional: PDF or image report",
    consent:
      "I agree to be contacted by Shanti-Ratnam for consultation scheduling and follow-up.",
    submitting: "Submitting...",
    submit: "Submit Consultation Request",
    success: "Thank you. Your consultation request has been received. Our team will contact you shortly.",
    error: "Something went wrong. Please call or WhatsApp us for quick help."
  },
  hi: {
    sections: ["मरीज की जानकारी", "समस्या", "कॉल बैक"],
    patientDetails: "मरीज की जानकारी",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "मरीज का पूरा नाम",
    phone: "फोन नंबर",
    whatsapp: "व्हाट्सऐप नंबर",
    whatsappPlaceholder: "अगर फोन नंबर से अलग है",
    email: "ईमेल",
    city: "शहर",
    cityPlaceholder: "शहर / कस्बा",
    ageGroup: "आयु वर्ग",
    selectAgeGroup: "आयु वर्ग चुनें",
    preVisit: "परामर्श से पहले जानकारी",
    concernCategory: "समस्या की श्रेणी",
    selectConcern: "समस्या चुनें",
    duration: "समस्या की अवधि",
    selectDuration: "अवधि चुनें",
    treatmentArea: "पसंदीदा उपचार क्षेत्र",
    treatmentAreaPlaceholder: "OPD, IPD, पंचकर्म, प्रोग्राम...",
    consultationMode: "परामर्श का तरीका",
    selectMode: "तरीका चुनें",
    symptoms: "लक्षण / समस्या का विवरण",
    symptomsPlaceholder:
      "अपने लक्षण, निदान, दवाइयां या जिस मार्गदर्शन की जरूरत है, संक्षेप में लिखें।",
    details: "की जानकारी",
    select: "चुनें",
    reportsCallback: "रिपोर्ट और कॉल बैक",
    priorDiagnosis: "पहले निदान हुआ है?",
    reportsAvailable: "रिपोर्ट उपलब्ध है?",
    callbackTime: "कॉल बैक का पसंदीदा समय",
    selectTime: "समय चुनें",
    uploadReport: "रिपोर्ट अपलोड करें",
    fileHint: "वैकल्पिक: PDF या इमेज रिपोर्ट",
    consent:
      "मैं परामर्श बुकिंग और फॉलो-अप के लिए शांति-रत्नम द्वारा संपर्क किए जाने से सहमत हूं।",
    submitting: "सबमिट हो रहा है...",
    submit: "परामर्श अनुरोध भेजें",
    success: "धन्यवाद। आपका परामर्श अनुरोध प्राप्त हो गया है। हमारी टीम जल्द संपर्क करेगी।",
    error: "कुछ समस्या हुई। कृपया तुरंत सहायता के लिए कॉल या व्हाट्सऐप करें।"
  }
};

const initialForm = {
  fullName: "",
  phone: "",
  whatsapp: "",
  email: "",
  city: "",
  ageGroup: "",
  concernCategory: "",
  symptoms: "",
  duration: "",
  treatmentArea: "",
  consultationMode: "",
  callbackTime: "",
  priorDiagnosis: "",
  reportsAvailable: "",
  consent: false
};

function optionLabel(value, locale) {
  const concern = concernOptions.find((option) => option.value === value);
  if (concern) {
    return locale === "hi" ? concern.hi : concern.value;
  }

  return locale === "hi" ? optionLabels[value] || value : value;
}

function fieldLabel(field, locale) {
  return locale === "hi" ? field.labelHi || field.label : field.label;
}

function fieldPlaceholder(field, locale) {
  return locale === "hi" ? field.placeholderHi || field.placeholder : field.placeholder;
}

export default function ConsultationForm({ initialLocale = "en" }) {
  const pathname = usePathname() || "/";
  const [cookieLocale, setCookieLocale] = useState(null);
  const pathLocale = getClientLocaleFromPath(pathname);
  const locale = cookieLocale || initialLocale || pathLocale;
  const t = text[locale] || text.en;
  const [form, setForm] = useState(initialForm);
  const [branchValues, setBranchValues] = useState({});
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const activeBranchFields = useMemo(
    () => branchFields[form.concernCategory] || [],
    [form.concernCategory]
  );

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

  function updateBranchField(name, value) {
    setBranchValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    const body = new FormData(event.currentTarget);
    body.set("branchDetails", JSON.stringify(branchValues));

    try {
      const response = await fetch("/api/consultation-intake", {
        method: "POST",
        body
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || t.error);
      }

      setStatus({ type: "success", message: t.success });
      event.currentTarget.reset();
      setForm(initialForm);
      setBranchValues({});
      setFileName("");
    } catch (error) {
      setStatus({ type: "error", message: error.message || t.error });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="consultation-form intake-form" onSubmit={handleSubmit}>
      <div className="intake-progress" aria-label="Consultation intake sections">
        {t.sections.map((section) => (
          <span key={section}>{section}</span>
        ))}
      </div>

      <fieldset className="intake-section">
        <legend>{t.patientDetails}</legend>
        <div className="intake-grid">
          <label>
            {t.fullName}
            <input
              name="fullName"
              type="text"
              placeholder={t.fullNamePlaceholder}
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
              placeholder="+91"
              pattern="[0-9+\\-\\s]{10,15}"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              required
            />
          </label>
          <label>
            {t.whatsapp}
            <input
              name="whatsapp"
              type="tel"
              placeholder={t.whatsappPlaceholder}
              pattern="[0-9+\\-\\s]{0,15}"
              value={form.whatsapp}
              onChange={(event) => updateField("whatsapp", event.target.value)}
            />
          </label>
          <label>
            {t.email}
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>
          <label>
            {t.city}
            <input
              name="city"
              type="text"
              placeholder={t.cityPlaceholder}
              value={form.city}
              onChange={(event) => updateField("city", event.target.value)}
              required
            />
          </label>
          <label>
            {t.ageGroup}
            <select
              name="ageGroup"
              value={form.ageGroup}
              onChange={(event) => updateField("ageGroup", event.target.value)}
              required
            >
              <option value="">{t.selectAgeGroup}</option>
              {["Below 18", "18-30", "31-45", "46-60", "60+"].map((option) => (
                <option key={option} value={option}>
                  {optionLabel(option, locale)}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className="intake-section">
        <legend>{t.preVisit}</legend>
        <div className="intake-grid">
          <label>
            {t.concernCategory}
            <select
              name="concernCategory"
              value={form.concernCategory}
              onChange={(event) => {
                updateField("concernCategory", event.target.value);
                setBranchValues({});
              }}
              required
            >
              <option value="">{t.selectConcern}</option>
              {concernOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {locale === "hi" ? option.hi : option.value}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.duration}
            <select
              name="duration"
              value={form.duration}
              onChange={(event) => updateField("duration", event.target.value)}
              required
            >
              <option value="">{t.selectDuration}</option>
              {[
                "Less than 1 week",
                "1-4 weeks",
                "1-6 months",
                "More than 6 months",
                "More than 1 year"
              ].map((option) => (
                <option key={option} value={option}>
                  {optionLabel(option, locale)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.treatmentArea}
            <input
              name="treatmentArea"
              type="text"
              placeholder={t.treatmentAreaPlaceholder}
              value={form.treatmentArea}
              onChange={(event) => updateField("treatmentArea", event.target.value)}
            />
          </label>
          <label>
            {t.consultationMode}
            <select
              name="consultationMode"
              value={form.consultationMode}
              onChange={(event) => updateField("consultationMode", event.target.value)}
              required
            >
              <option value="">{t.selectMode}</option>
              {["Online consultation", "In-person consultation", "Team can suggest"].map(
                (option) => (
                  <option key={option} value={option}>
                    {optionLabel(option, locale)}
                  </option>
                )
              )}
            </select>
          </label>
        </div>
        <label className="intake-full">
          {t.symptoms}
          <textarea
            name="symptoms"
            rows={4}
            placeholder={t.symptomsPlaceholder}
            value={form.symptoms}
            onChange={(event) => updateField("symptoms", event.target.value)}
            required
          />
        </label>
      </fieldset>

      {activeBranchFields.length ? (
        <fieldset className="intake-section intake-branch">
          <legend>
            {locale === "hi"
              ? `${optionLabel(form.concernCategory, locale)} ${t.details}`
              : `${form.concernCategory} ${t.details}`}
          </legend>
          <div className="intake-grid">
            {activeBranchFields.map((field) => (
              <label key={field.name}>
                {fieldLabel(field, locale)}
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={branchValues[field.name] || ""}
                    onChange={(event) => updateBranchField(field.name, event.target.value)}
                  >
                    <option value="">{t.select}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {optionLabel(option, locale)}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={field.name}
                    type="text"
                    placeholder={fieldPlaceholder(field, locale)}
                    value={branchValues[field.name] || ""}
                    onChange={(event) => updateBranchField(field.name, event.target.value)}
                  />
                )}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <fieldset className="intake-section">
        <legend>{t.reportsCallback}</legend>
        <div className="intake-grid">
          <label>
            {t.priorDiagnosis}
            <select
              name="priorDiagnosis"
              value={form.priorDiagnosis}
              onChange={(event) => updateField("priorDiagnosis", event.target.value)}
              required
            >
              <option value="">{t.select}</option>
              {["Yes", "No", "Not sure"].map((option) => (
                <option key={option} value={option}>
                  {optionLabel(option, locale)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.reportsAvailable}
            <select
              name="reportsAvailable"
              value={form.reportsAvailable}
              onChange={(event) => updateField("reportsAvailable", event.target.value)}
              required
            >
              <option value="">{t.select}</option>
              {["Yes", "No", "Can share later"].map((option) => (
                <option key={option} value={option}>
                  {optionLabel(option, locale)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.callbackTime}
            <select
              name="callbackTime"
              value={form.callbackTime}
              onChange={(event) => updateField("callbackTime", event.target.value)}
              required
            >
              <option value="">{t.selectTime}</option>
              {["Morning", "Afternoon", "Evening", "Anytime"].map((option) => (
                <option key={option} value={option}>
                  {optionLabel(option, locale)}
                </option>
              ))}
            </select>
          </label>
          <label className="intake-file">
            {t.uploadReport}
            <input
              name="reportFile"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
            />
            <span>{fileName || t.fileHint}</span>
          </label>
        </div>
      </fieldset>

      <label className="intake-consent">
        <input
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          required
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
