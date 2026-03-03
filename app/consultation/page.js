import ConsultationForm from "@/components/ConsultationForm";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Consultation",
  description:
    "Book a consultation at Shanti-Ratnam for chronic condition clarity and personalized care."
};

export default function ConsultationPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const t = hi
    ? {
        consultation: "\u092a\u0930\u093e\u092e\u0930\u094d\u0936",
        hero: "\u092a\u0939\u0932\u0947 \u0938\u094d\u092a\u0937\u094d\u091f\u0924\u093e, \u092b\u093f\u0930 \u0926\u0947\u0916\u092d\u093e\u0932\u0964",
        lead:
          "\u0939\u092e\u093e\u0930\u0947 \u090f\u0915\u094d\u0938\u092a\u0930\u094d\u091f\u094d\u0938 \u0938\u0947 \u092c\u093e\u0924 \u0915\u0930\u0947\u0902, \u0905\u092a\u0928\u0940 \u0938\u092e\u0938\u094d\u092f\u093e \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902 \u0914\u0930 \u0915\u094d\u0932\u093f\u092f\u0930 \u091f\u094d\u0930\u0940\u091f\u092e\u0947\u0902\u091f \u0921\u093e\u092f\u0930\u0947\u0915\u094d\u0936\u0928 \u092a\u093e\u090f\u0902\u0964",
        secondOpinion: "\u0938\u0947\u0915\u0902\u0921 \u0913\u092a\u093f\u0928\u093f\u092f\u0928",
        uncertain: "\u0915\u094b\u0908 \u0938\u0902\u0926\u0947\u0939 \u0939\u0948? \u0905\u092a\u0928\u0940 \u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0932\u093e\u090f\u0902\u0964",
        note:
          "\u0938\u0947\u0915\u0902\u0921 \u0913\u092a\u093f\u0928\u093f\u092f\u0928 \u0932\u0947\u0902\u0964 \u0915\u094b\u0908 \u0926\u092c\u093e\u0935 \u0928\u0939\u0940\u0902, \u0938\u093f\u0930\u094d\u092b \u0938\u094d\u092a\u0937\u094d\u091f\u0924\u093e\u0964",
        callNow: "\u0905\u092d\u0940 \u0915\u0949\u0932 \u0915\u0930\u0947\u0902",
        whatsapp: "\u0935\u094d\u0939\u093e\u091f\u094d\u0938\u090f\u092a \u0915\u0930\u0947\u0902",
        freeConsultation: "\u0928\u093f\u0936\u0941\u0932\u094d\u0915 \u092a\u0930\u093e\u092e\u0930\u094d\u0936 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902",
        fillForm: "\u092f\u0939 \u092b\u0949\u0930\u094d\u092e \u092d\u0930\u0947\u0902, \u0939\u092e\u093e\u0930\u0940 \u091f\u0940\u092e \u0906\u092a\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0917\u0940\u0964"
      }
    : {
        consultation: "Consultation",
        hero: "Clarity First. Care Next.",
        lead:
          "Talk to our experts, share your concerns, and receive a clear treatment direction in a short consult.",
        secondOpinion: "Second Opinion",
        uncertain: "Uncertain? Bring your reports.",
        note: "Get a second opinion. No pressure, only clarity.",
        callNow: "Call Now",
        whatsapp: "WhatsApp Us",
        freeConsultation: "Book A Free Consultation",
        fillForm: "Fill this quick form and our team will connect with you."
      };

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">{t.consultation}</p>
        <h1>{t.hero}</h1>
        <p className="lead">{t.lead}</p>
      </section>

      <section className="container consultation-layout reveal in">
        <article className="consultation-note-card">
          <p className="mini-kicker">{t.secondOpinion}</p>
          <h2>{t.uncertain}</h2>
          <p className="consultation-note">{t.note}</p>
          <p>
            {hi
              ? "हम आपकी वर्तमान रिपोर्ट, दवाओं और निदान की समीक्षा करके आगे की स्पष्ट दिशा बताते हैं।"
              : "We review your current diagnosis, medicines, and reports carefully before suggesting next steps."}
          </p>
          <div className="consultation-quick-links">
            <a href="tel:+917007077353">{t.callNow}</a>
            <a href="https://wa.me/917007077353" target="_blank" rel="noopener noreferrer">
              {t.whatsapp}
            </a>
          </div>
        </article>

        <article className="consultation-form-card">
          <h2>{t.freeConsultation}</h2>
          <p>{t.fillForm}</p>
          <ConsultationForm />
        </article>
      </section>
    </main>
  );
}

