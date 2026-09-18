import { NextResponse } from "next/server";

const REQUIRED_FIELDS = [
  "fullName",
  "phone",
  "visitDate",
  "satisfaction",
  "staffBehavior",
  "guidanceClarity",
  "recommendScore"
];

export async function POST(request) {
  try {
    const payload = await request.json();
    const missing = REQUIRED_FIELDS.filter((field) => !String(payload?.[field] || "").trim());

    if (missing.length) {
      return NextResponse.json(
        { message: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const feedback = {
      timestamp: new Date().toISOString(),
      fullName: String(payload.fullName).trim(),
      phone: String(payload.phone).trim(),
      visitDate: String(payload.visitDate).trim(),
      satisfaction: String(payload.satisfaction).trim(),
      staffBehavior: String(payload.staffBehavior).trim(),
      guidanceClarity: String(payload.guidanceClarity).trim(),
      recommendScore: String(payload.recommendScore).trim(),
      issue: String(payload.issue || "").trim(),
      permissionToContact: Boolean(payload.permissionToContact)
    };

    console.info("Patient feedback received", feedback);

    return NextResponse.json({
      message: "Thank you. Your feedback has been submitted.",
      feedback
    });
  } catch (error) {
    console.error("Patient feedback failed", error);
    return NextResponse.json(
      { message: "Unable to submit feedback right now." },
      { status: 500 }
    );
  }
}
