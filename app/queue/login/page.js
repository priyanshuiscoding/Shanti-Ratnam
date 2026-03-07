import QueueLoginForm from "@/components/queue/QueueLoginForm";

export const metadata = {
  title: "Queue Login",
  description: "Reception and admin login for queue management.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QueueLoginPage() {
  return <QueueLoginForm />;
}