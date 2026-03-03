import QueueReceptionPanel from "@/components/queue/QueueReceptionPanel";
import { requireQueueRole } from "@/lib/queueAuthServer";

export const metadata = {
  title: "Queue Reception Panel",
  description: "Reception dashboard to operate queue tokens."
};

export default function QueueReceptionPage() {
  requireQueueRole("reception");
  return <QueueReceptionPanel />;
}
