import Link from "next/link";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Diabetic Reversal Program Sagar",
  description:
    "Reverse diabetes naturally with SR-AIIMS 90-day Ayurvedic diabetic reversal protocol in Sagar.",
  alternates: {
    canonical: "/diabetic-reversal-program-sagar"
  }
};

export default function DiabeticReversalProgramPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const localHref = (path) => withLocalePath(path, locale);
  const t = hi
    ? {
        kicker: "एसआर-एआईआईएमएस डायबिटिक रिवर्सल प्रोग्राम",
        title: "प्राकृतिक रूप से डायबिटीज नियंत्रण की दिशा में आगे बढ़ें",
        lead:
          "हमारे संरचित 90-दिवसीय आयुर्वेदिक प्रोटोकॉल के साथ दवा-निर्भरता कम करने की दिशा में कदम बढ़ाएं।",
        cta: "पात्रता जांचें",
        problem: "समस्या",
        problemBody:
          "इंसुलिन और लगातार दवाओं को लेकर चिंता? दुष्प्रभाव से थक चुके हैं? आप अकेले नहीं हैं।",
        solution: "समाधान: 3-चरण प्रोटोकॉल",
        faq: "अक्सर पूछे जाने वाले प्रश्न"
      }
    : {
        kicker: "SR-AIIMS Diabetic Reversal Program",
        title: "Reverse Your Diabetes Naturally",
        lead:
          "Break free from lifelong medication with our clinically-proven 90-Day Ayurvedic Protocol.",
        cta: "Check Eligibility",
        problem: "The Problem",
        problemBody:
          "Worried about insulin shots? Tired of side effects from allopathic drugs? You are not alone.",
        solution: "The Solution: 3-Phase Protocol",
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
          <h2>{t.problem}</h2>
          <p>{t.problemBody}</p>
        </article>

        <article className="program-panel">
          <h2>{t.solution}</h2>
          <ol>
            <li>
              Detox (Days 1-15): Panchakarma to remove deep toxins (Ama).
            </li>
            <li>
              Rejuvenation (Days 16-60): Targeted herbs (like Vijaysar, Gudmar)
              and diet plan to revive pancreas.
            </li>
            <li>
              Maintenance (Days 61-90): Lifestyle integration to sustain
              reversal.
            </li>
          </ol>
        </article>

        <article className="program-panel">
          <h2>{t.faq}</h2>
          <div className="program-faq-grid">
            <details>
              <summary>Can diabetes really be reversed?</summary>
              <p>
                Many patients with type 2 diabetes can achieve significant sugar
                control and remission-like outcomes with disciplined medical
                supervision, diet, and lifestyle correction.
              </p>
            </details>
            <details>
              <summary>How much does the program cost?</summary>
              <p>
                Program cost depends on case complexity, required therapies, and
                follow-up plan. Contact us for a personalized estimate.
              </p>
            </details>
            <details>
              <summary>Is it safe if I am already on insulin?</summary>
              <p>
                Yes, it is designed to work with ongoing treatment under doctor
                supervision. Medication changes should only be done by your
                physician.
              </p>
            </details>
          </div>
        </article>
      </section>
    </main>
  );
}

