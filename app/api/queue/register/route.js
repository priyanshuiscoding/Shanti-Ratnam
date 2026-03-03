import { NextResponse } from "next/server";
import { getQueueState, registerQueueEntry } from "@/lib/queueStore";

export async function POST(request) {
  try {
    const body = await request.json();
    await registerQueueEntry(body);
    const state = await getQueueState();
    const last = state.entries[state.entries.length - 1];
    const waitingInDept = state.entries
      .filter((item) => item.departmentCode === last.departmentCode && item.status === "waiting")
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const queueAhead = Math.max(
      0,
      waitingInDept.findIndex((item) => item.id === last.id)
    );

    return NextResponse.json({
      ok: true,
      token: last.token,
      departmentName: last.departmentName,
      queueAhead,
      dayKey: state.dayKey
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error?.message || "Unable to register queue entry." },
      { status: 400 }
    );
  }
}
