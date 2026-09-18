import FeedbackForm from "@/components/FeedbackForm";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Patient Feedback",
  description:
    "Share post-visit feedback for consultation, treatment guidance, staff behavior, and service experience.",
  alternates: {
    canonical: "/feedback"
  }
};

export default function FeedbackPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const t = hi
    ? {
        kicker: "मरीज फीडबैक",
        title: "आपका अनुभव बेहतर बनाने में हमारी मदद करें",
        lead:
          "यह छोटा फीडबैक फॉर्म हमारी टीम को सेवा में सुधार और परामर्श या उपचार के बाद बेहतर फॉलो-अप में मदद करता है।",
        formTitle: "विजिट के बाद फीडबैक",
        formText:
          "कृपया परामर्श या उपचार के 24-48 घंटे बाद अपना अनुभव साझा करें।"
      }
    : {
        kicker: "Patient Feedback",
        title: "Help Us Improve Your Care Experience",
        lead:
          "This short feedback form helps our team identify service gaps early and improve follow-up after consultation or treatment.",
        formTitle: "Post-Visit Feedback",
        formText:
          "Please share your experience 24-48 hours after consultation or treatment."
      };

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">{t.kicker}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
      </section>

      <section className="container feedback-layout reveal in">
        <article className="consultation-form-card">
          <h2>{t.formTitle}</h2>
          <p>{t.formText}</p>
          <FeedbackForm initialLocale={locale} />
        </article>
      </section>
    </main>
  );
}
