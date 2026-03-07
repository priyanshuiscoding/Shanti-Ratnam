import Link from "next/link";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Neuro Pain Management Sagar",
  description:
    "Targeted neuro-pain management in Sagar for sciatica, neuropathy, and cervical or lumbar spondylosis.",
  alternates: {
    canonical: "/neuro-pain-management-sagar"
  }
};

export default function NeuroPainManagementPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const localHref = (path) => withLocalePath(path, locale);
  const t = hi
    ? {
        kicker: "एसआर-एआईआईएमएस न्यूरो-पेन मैनेजमेंट",
        title: "नसों के दर्द की जड़ पर काम करें",
        lead:
          "क्रॉनिक दर्द के लिए संरचित आयुर्वेद, थेरेपी और लाइफस्टाइल रिकवरी प्लान के साथ इंटीग्रेटेड केयर।",
        cta: "पात्रता जांचें",
        conditions: "मुख्य स्थितियां जिन पर हम काम करते हैं",
        approach: "हमारा दृष्टिकोण",
        faq: "अक्सर पूछे जाने वाले प्रश्न"
      }
    : {
        kicker: "SR-AIIMS Neuro-Pain Management",
        title: "Target Nerve Pain at the Root",
        lead:
          "Integrated care for chronic pain conditions with structured Ayurveda, therapy, and lifestyle recovery plans.",
        cta: "Check Eligibility",
        conditions: "Conditions We Focus On",
        approach: "Our Approach",
        faq: "Frequently Asked Questions"
      };

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">{t.kicker}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="hero-cta-row">
          <Link className="btn saffron-btn" href={localHref("/contact-us")}>
            {t.cta} &rarr;
          </Link>
        </div>
      </section>

      <section className="container program-layout reveal in">
        <article className="program-panel">
          <h2>{t.conditions}</h2>
          <ul>
            <li>Sciatica</li>
            <li>Neuropathy</li>
            <li>Cervical spondylosis</li>
            <li>Lumbar spondylosis</li>
          </ul>
        </article>

        <article className="program-panel">
          <h2>{t.approach}</h2>
          <ol>
            <li>Assessment of pain pattern, posture, and movement triggers.</li>
            <li>
              Personalized treatment with therapies, medicines, and routine
              correction.
            </li>
            <li>Guided maintenance plan to reduce recurrence.</li>
          </ol>
        </article>

        <article className="program-panel">
          <h2>{t.faq}</h2>
          <div className="program-faq-grid">
            <details>
              <summary>How soon can I expect relief in nerve pain?</summary>
              <p>
                Response varies by severity and duration. Early and consistent
                care usually improves comfort and mobility.
              </p>
            </details>
            <details>
              <summary>Do I need in-patient care for this program?</summary>
              <p>
                Not always. Many patients can follow OPD-based protocols with
                scheduled therapy sessions.
              </p>
            </details>
            <details>
              <summary>Can this help avoid surgery?</summary>
              <p>
                In selected cases, conservative integrative care may reduce pain
                and improve function, but treatment suitability depends on
                clinical evaluation.
              </p>
            </details>
          </div>
        </article>
      </section>
    </main>
  );
}

