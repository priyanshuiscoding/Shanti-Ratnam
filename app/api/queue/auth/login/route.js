import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  createAuthToken,
  getQueuePasswords,
  normalizeCredential
} from "@/lib/queueAuth";

export async function POST(request) {
  try {
    const body = await request.json();
    const role = String(body?.role || "reception").trim().toLowerCase();
    const password = normalizeCredential(body?.password || "");

    const passwords = getQueuePasswords();
    const allowed =
      (role === "admin" && password === passwords.admin) ||
      (role === "reception" && (password === passwords.reception || password === passwords.admin));

    if (!allowed) {
      return NextResponse.json({ ok: false, message: "Invalid credentials." }, { status: 401 });
    }

    const token = createAuthToken(role === "admin" ? "admin" : "reception");
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12
    });
    return response;
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to login." }, { status: 400 });
  }
}

