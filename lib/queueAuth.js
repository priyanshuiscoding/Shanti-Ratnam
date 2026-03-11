import crypto from "crypto";

const COOKIE_NAME = "sr_queue_auth";

function getSecret() {
  return process.env.QUEUE_AUTH_SECRET || "sr-queue-default-secret-change-in-production";
}

function b64url(input) {
  return Buffer.from(input).toString("base64url");
}

function sign(payloadEncoded) {
  return crypto.createHmac("sha256", getSecret()).update(payloadEncoded).digest("base64url");
}

export function createAuthToken(role = "reception") {
  const payload = {
    role,
    exp: Date.now() + 1000 * 60 * 60 * 12
  };
  const payloadEncoded = b64url(JSON.stringify(payload));
  const signature = sign(payloadEncoded);
  return `${payloadEncoded}.${signature}`;
}

export function verifyAuthToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) return null;
  const [payloadEncoded, signature] = token.split(".");
  const expected = sign(payloadEncoded);
  if (signature !== expected) return null;

  try {
    const payload = JSON.parse(Buffer.from(payloadEncoded, "base64url").toString("utf8"));
    if (!payload.exp || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function getQueuePasswords() {
  const receptionRaw = process.env.QUEUE_RECEPTION_PASSWORD || "reception123";
  const adminRaw = process.env.QUEUE_ADMIN_PASSWORD || "admin123";

  // Normalize accidental whitespace from env values.
  const reception = String(receptionRaw).trim();
  const admin = String(adminRaw).trim();

  return {
    reception,
    admin
  };
}

export { COOKIE_NAME };

