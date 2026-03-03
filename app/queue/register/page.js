import QueueRegisterForm from "@/components/queue/QueueRegisterForm";
import { getQueueState } from "@/lib/queueStore";

export const metadata = {
  title: "Queue Registration",
  description: "Patient self-registration queue form.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function QueueRegisterPage() {
  const state = await getQueueState();
  return <QueueRegisterForm departments={state.departments || []} />;
}