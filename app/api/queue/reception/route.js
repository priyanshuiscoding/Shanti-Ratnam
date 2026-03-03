import { NextResponse } from "next/server";
import { COOKIE_NAME, verifyAuthToken } from "@/lib/queueAuth";
import { createQueueView, getQueueState, receptionAction } from "@/lib/queueStore";

export async function POST(request) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const session = verifyAuthToken(token);
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    await receptionAction(body);
    const state = await getQueueState();
    return NextResponse.json({ ok: true, data: createQueueView(state) });
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to process action." }, { status: 400 });
  }
}
