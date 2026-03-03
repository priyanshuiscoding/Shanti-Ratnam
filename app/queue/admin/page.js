import QueueAdminPanel from "@/components/queue/QueueAdminPanel";
import { requireQueueRole } from "@/lib/queueAuthServer";

export const metadata = {
  title: "Queue Admin Panel",
  description: "Admin controls for queue reset and department configuration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QueueAdminPage() {
  requireQueueRole("admin");
  return <QueueAdminPanel />;
}