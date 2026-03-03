import { NextResponse } from "next/server";
import { COOKIE_NAME, verifyAuthToken } from "@/lib/queueAuth";
import { createQueueView, getQueueState } from "@/lib/queueStore";

export async function GET(request) {
  try {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const session = verifyAuthToken(token);
    const state = await getQueueState();
    const view = createQueueView(state);

    if (!session) {
      return NextResponse.json({
        ok: true,
        data: {
          dayKey: view.dayKey,
          departments: view.departments,
          nowServing: view.nowServing,
          waitingByDepartment: view.waitingByDepartment,
          nextTokens: view.nextTokens
        }
      });
    }

    return NextResponse.json({ ok: true, data: view, session });
  } catch {
    return NextResponse.json({ ok: false, message: "Failed to load queue state." }, { status: 500 });
  }
}
