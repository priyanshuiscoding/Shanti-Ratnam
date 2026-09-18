import { NextResponse } from "next/server";

const REQUIRED_FIELDS = [
  "fullName",
  "phone",
  "city",
  "ageGroup",
  "concernCategory",
  "symptoms",
  "duration",
  "consultationMode",
  "callbackTime",
  "priorDiagnosis",
  "reportsAvailable",
  "consent"
];

function getString(formData, key) {
  return String(formData.get(key) || "").trim();
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const missing = REQUIRED_FIELDS.filter((field) => !getString(formData, field));

    if (missing.length) {
      return NextResponse.json(
        { message: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const reportFile = formData.get("reportFile");
    const report =
      reportFile && typeof reportFile === "object" && reportFile.size
        ? {
            name: reportFile.name,
            type: reportFile.type,
            size: reportFile.size
          }
        : null;

    const submission = {
      timestamp: new Date().toISOString(),
      fullName: getString(formData, "fullName"),
      phone: getString(formData, "phone"),
      whatsapp: getString(formData, "whatsapp"),
      email: getString(formData, "email"),
      city: getString(formData, "city"),
      ageGroup: getString(formData, "ageGroup"),
      concernCategory: getString(formData, "concernCategory"),
      symptoms: getString(formData, "symptoms"),
      duration: getString(formData, "duration"),
      treatmentArea: getString(formData, "treatmentArea"),
      consultationMode: getString(formData, "consultationMode"),
      callbackTime: getString(formData, "callbackTime"),
      priorDiagnosis: getString(formData, "priorDiagnosis"),
      reportsAvailable: getString(formData, "reportsAvailable"),
      branchDetails: getString(formData, "branchDetails"),
      report,
      patientStage: "New inquiry",
      followUpStatus: "Pending call"
    };

    console.info("Consultation intake received", submission);

    return NextResponse.json({
      message:
        "Thank you. Your consultation request has been received. Our team will contact you shortly.",
      submission
    });
  } catch (error) {
    console.error("Consultation intake failed", error);
    return NextResponse.json(
      { message: "Unable to submit consultation request right now." },
      { status: 500 }
    );
  }
}
