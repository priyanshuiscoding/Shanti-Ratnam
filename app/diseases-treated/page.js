import Image from "next/image";
import Link from "next/link";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Disease Treated",
  description:
    "Integrated Ayurveda and naturopathy based condition-focused care at Shanti-Ratnam.",
  alternates: {
    canonical: "/diseases-treated"
  }
};

const diseaseSections = [
  {
    id: "neuro-pain-management",
    kicker: "Specialty Program",
    title: "SR-AIIMS Neuro - Pain Management",
    summary:
      "Focused care for chronic nerve and spine pain through Ayurvedic therapies, movement correction, and guided recovery routines.",
    points: [
      "Sciatica and neuropathic pain",
      "Cervical and lumbar spondylosis",
      "Migraine and stress headache",
      "Frozen shoulder and stiffness"
    ],
    image: "/images/diseases-treated/neuro.webp",
    imageAlt: "Neuro pain management care"
  },
  {
    id: "diabetic-reversal-program",
    kicker: "Specialty Program",
    title: "SR-AIIMS Diabetic Reversal Program",
    summary:
      "A practical plan combining food correction, Ayurvedic support, and daily activity to improve sugar control and metabolic health.",
    points: [
      "Type 2 diabetes management",
      "Insulin resistance support",
      "Weight and lifestyle correction",
      "Metabolic risk reduction"
    ],
    learnMoreHref: "/diabetic-reversal-program-sagar",
    image: "/images/diseases-treated/diabetic.webp",
    imageAlt: "Diabetic reversal program support"
  },
  {
    id: "panchakarma-therapies",
    kicker: "Specialty Program",
    title: "SR-AIIMS Panchakarma Therapies",
    summary:
      "Classical detox and rejuvenation therapies designed to reduce toxic load, improve digestion, and restore dosha balance.",
    points: [
      "Vamana and virechana protocols",
      "Basti and nasya support",
      "Joint and muscle cleansing care",
      "Recovery and immunity building"
    ],
    image: "/images/diseases-treated/PANCHKARMA THERAPY.png",
    imageAlt: "Panchakarma therapy session"
  },
  {
    id: "yoga-wellness",
    kicker: "Specialty Program",
    title: "SR-AIIMS Yoga & Wellness",
    summary:
      "Personalized yoga, breathwork, and relaxation modules to support flexibility, emotional balance, and long-term wellness.",
    points: [
      "Posture and mobility improvement",
      "Stress and anxiety regulation",
      "Breath and sleep quality support",
      "Mind-body strengthening"
    ],
    image: "/images/diseases-treated/yoga.jpeg",
    imageAlt: "Yoga and wellness practice"
  },
  {
    id: "orthopaedic-department",
    kicker: "Orthopaedic Department",
    title: "SR-AIIMS Orthopaedic Department",
    summary:
      "Condition-focused care for joint, spine, and mobility concerns with integrative therapies and rehabilitation support.",
    points: [
      "Calcaneal spur",
      "Sciatica",
      "Osteoarthritis",
      "Cervical and lumbar spondylosis"
    ],
    image: "/images/diseases-treated/orthopedic.webp",
    imageAlt: "Orthopaedic department"
  },
  {
    id: "oncology-department",
    kicker: "Oncology Department",
    title: "SR-AIIMS Oncology Department",
    summary:
      "Supportive, integrative care to improve strength, digestion, and quality of life during long-term oncology management.",
    points: ["Lung cancer", "Liver cancer", "Colorectal cancer", "Thyroid cancer"],
    image: "/images/diseases-treated/onchology.webp",
    imageAlt: "Oncology department"
  },
  {
    id: "pulmonology-department",
    kicker: "Pulmonology Department",
    title: "SR-AIIMS Pulmonology Department",
    summary:
      "Respiratory support plans for chronic breathing disorders with detox, breathing practices, and immune-strengthening care.",
    points: ["Allergic asthma", "Sinusitis", "Rhinitis", "Post-covid complications"],
    image: "/images/diseases-treated/Pulmonology.webp",
    imageAlt: "Pulmonology department"
  },
  {
    id: "womens-health-department",
    kicker: "Women's Health Department",
    title: "SR-AIIMS Women's Health Department",
    summary:
      "Holistic support for hormonal, menstrual, fertility, and life-stage specific women’s health concerns.",
    points: ["Infertility", "PCOD", "Menstrual disorders", "Pre and post-menopausal support"],
    image: "/images/diseases-treated/women-health.jpeg",
    imageAlt: "Women's health department"
  },
  {
    id: "gastroenterology-department",
    kicker: "Gastroenterology Department",
    title: "SR-AIIMS Gastroenterology Department",
    summary:
      "Digestive care programs focused on metabolism, gut comfort, and bowel regularity through integrative treatment.",
    points: ["Indigestion", "Hyperacidity", "Constipation", "Irritable bowel syndrome"],
    image: "/images/diseases-treated/Gastroenterology.webp",
    imageAlt: "Gastroenterology department"
  },
  {
    id: "urology-department",
    kicker: "Urology Department",
    title: "SR-AIIMS Urology Department",
    summary:
      "Targeted care for urinary and kidney disorders with symptom-focused, root-cause oriented protocols.",
    points: ["Kidney stones", "Urinary tract infections", "Prostate hypertrophy", "Renal failure support"],
    image: "/images/diseases-treated/Urology.webp",
    imageAlt: "Urology department"
  },
  {
    id: "neurology-department",
    kicker: "Neurology Department",
    title: "SR-AIIMS Neurology Department",
    summary:
      "Integrative neurological care for movement, nerve, and stress-related conditions with long-term recovery guidance.",
    points: ["Parkinsonism", "Migraine", "Fibromyalgia", "Facial palsy"],
    image: "/images/diseases-treated/Neurology.webp",
    imageAlt: "Neurology department"
  },
  {
    id: "sexual-health-department",
    kicker: "Sexual Health Department",
    title: "SR-AIIMS Sexual Health Department",
    summary:
      "Confidential and practical care for male and female reproductive health, vitality, and fertility concerns.",
    points: [
      "Erectile dysfunction",
      "Premature ejaculation",
      "Male and female infertility",
      "Faulty sperm counts"
    ],
    image: "/images/diseases-treated/Sexual Health Department.webp",
    imageAlt: "Sexual health department"
  },
  {
    id: "skin-and-hair-department",
    kicker: "Skin And Hair Department",
    title: "SR-AIIMS Skin And Hair Department",
    summary:
      "Detox and restorative plans for persistent skin and hair concerns with internal correction and external therapies.",
    points: ["Psoriasis", "Acne", "Eczema", "Hyperpigmentation"],
    image: "/images/diseases-treated/Skin And Hair.webp",
    imageAlt: "Skin and hair department"
  },
  {
    id: "diet-and-nutrition-department",
    kicker: "Diet And Nutrition Department",
    title: "SR-AIIMS Diet and Nutrition Department",
    summary:
      "Clinical nutrition guidance for weight balance, metabolic recovery, and sustainable daily food routines.",
    points: [
      "Weight management",
      "Diet for diabetes and fatty liver",
      "Undernutrition support",
      "Lifestyle counseling"
    ],
    image: "/images/diseases-treated/Diet and Nutrition.webp",
    imageAlt: "Diet and nutrition department"
  },
  {
    id: "yoga-and-naturopathy-department",
    kicker: "Yoga And Naturopathy Department",
    title: "SR-AIIMS Yoga and Naturopathy Department",
    summary:
      "Non-invasive healing support through asanas, pranayama, natural therapies, and disciplined lifestyle correction.",
    points: ["Asanas", "Pranayama", "Mudras", "Meditation and relaxation"],
    image: "/images/diseases-treated/Yoga and Naturopathy.webp",
    imageAlt: "Yoga and naturopathy department"
  },
  {
    id: "mental-wellbeing-department",
    kicker: "Mental Wellbeing Department",
    title: "SR-AIIMS Mental Wellbeing Department",
    summary:
      "Structured support for stress, anxiety, and emotional fatigue using counseling, meditation, and holistic routines.",
    points: ["Stress and anxiety support", "Sleep and mood balance", "Counseling programs", "Mindfulness practices"],
    image: "/images/diseases-treated/Mental Wellbeing Department.webp",
    imageAlt: "Mental wellbeing department"
  }
];

export default function DiseaseTreatedPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const localHref = (path) => withLocalePath(path, locale);
  const t = hi
    ? {
        diseases: "\u0930\u094b\u0917\u094b\u0902 \u0915\u093e \u0909\u092a\u091a\u093e\u0930",
        hero: "\u092a\u0942\u0930\u094d\u0923 \u0926\u0940\u0930\u094d\u0918\u0915\u093e\u0932\u093f\u0915 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0932\u093e\u092d \u0915\u0947 \u0932\u093f\u090f \u0939\u092e\u093e\u0930\u0947 \u0938\u092e\u0930\u094d\u092a\u093f\u0924 \u0909\u092a\u091a\u093e\u0930 \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e\u0964",
        lead:
          "\u0936\u093e\u0902\u0924\u093f-\u0930\u0924\u094d\u0928\u092e \u092e\u0947\u0902 \u0935\u093f\u0936\u0947\u0937 \u0914\u0930 \u0935\u093f\u092d\u093e\u0917-\u0906\u0927\u093e\u0930\u093f\u0924 \u091f\u094d\u0930\u0940\u091f\u092e\u0947\u0902\u091f \u092a\u094d\u0932\u093e\u0928 \u0926\u0947\u0916\u0947\u0902\u0964",
        learnMore: "\u0905\u0927\u093f\u0915 \u091c\u093e\u0928\u0947\u0902",
        imageSoon: "\u091b\u0935\u093f \u091c\u0932\u094d\u0926 \u091c\u094b\u0921\u093c\u0940 \u091c\u093e\u090f\u0917\u0940"
      }
    : {
        diseases: "Diseases Treated",
        hero: "Focused condition-care programs designed for lasting recovery.",
        lead: "Explore specialty and department-based treatment plans at Shanti-Ratnam.",
        learnMore: "Learn More",
        imageSoon: "Image will be added soon"
      };

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">{t.diseases}</p>
        <h1>{t.hero}</h1>
        <p className="lead">{t.lead}</p>
      </section>

      <section className="container disease-stack reveal in">
        {diseaseSections.map((section, index) => (
          <article
            key={section.title}
            id={section.id}
            className={`disease-card${index % 2 === 1 ? " is-reverse" : ""}`}
          >
            <div className="disease-card-media">
              {section.hasImage === false ? (
                <div className="disease-image-placeholder">{t.imageSoon}</div>
              ) : (
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={1200}
                  height={760}
                  className="disease-image"
                />
              )}
            </div>
            <div className="disease-card-copy">
              <p className="eyebrow disease-kicker">{section.kicker}</p>
              <h2>{section.title}</h2>
              <p>{section.summary}</p>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {section.learnMoreHref ? (
                <Link className="disease-learn-link" href={localHref(section.learnMoreHref)}>
                  {t.learnMore} &rarr;
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
