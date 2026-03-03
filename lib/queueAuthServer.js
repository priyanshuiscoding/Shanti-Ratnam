import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, verifyAuthToken } from "@/lib/queueAuth";

export function getQueueSession() {
  const token = cookies().get(COOKIE_NAME)?.value;
  return verifyAuthToken(token);
}

export function requireQueueRole(requiredRole = "reception") {
  const session = getQueueSession();
  if (!session) {
    redirect("/queue/login");
  }
  if (requiredRole === "admin" && session.role !== "admin") {
    redirect("/queue/login?denied=1");
  }
  return session;
}
