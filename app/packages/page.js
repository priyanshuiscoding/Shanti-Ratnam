import Link from "next/link";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Package",
  description:
    "Package-wise Ayurveda and naturopathy wellness programs at Shanti-Ratnam.",
  alternates: {
    canonical: "/packages"
  }
};

const packagePrograms = [
  {
    id: "rejuvenation-package",
    title: "Rejuvenation Package",
    subtitle: "This package is designed to relax and vitalize the body.",
    goal: "Recovery, Vitalization",
    days: "14 Days",
    imagePath: "/images/packages/rejuvenation-package.jpg",
    imageSide: "left",
    contents: [
      "Panchkarma Treatment",
      "Metabolic Therapy",
      "Daily Follow-Ups Yoga & Meditation",
      "Doctor's Consultation",
      "Naturopathic Diet"
    ],
    whoShouldJoin: [
      "Listlessness",
      "Powerlessness",
      "Pain In The Cervical Vertebrae",
      "Exhaustion",
      "Muscular Tensions"
    ],
    benefits: [
      "Improved Metabolism",
      "Improved Sexual Power",
      "Improved Color And Complexion",
      "Restore Youthful Vigor",
      "To Make You Young Again"
    ]
  },
  {
    id: "detox-package",
    title: "Detox Package",
    subtitle:
      "This Ayurveda and naturopathy package cleanses the body and mind.",
    goal: "Cleansing De-Addiction",
    days: "21 Days",
    imagePath: "/images/packages/detox-package.jpg",
    imageSide: "right",
    contents: [
      "Initial Assessment",
      "Final Consultation",
      "Post Detox Phase",
      "Neo-Nutrigenomic Phase (Regeneration)",
      "Preparation Phase",
      "Pre-Cleansing Phase",
      "Master-Cleansing Phase"
    ],
    whoShouldJoin: [
      "Obesity",
      "Weak Immunity",
      "Addicts (Alcohol/ Smoking)",
      "Fatty Liver",
      "Lethargy",
      "Sleep Disturbances",
      "Digestive Disorders",
      "Chronic Ailments Like Allergies"
    ],
    benefits: [
      "Clarity Of Senses",
      "Improved Skin Health",
      "Improved Longevity",
      "Weightloss",
      "Addictions Like Smoking, Alcohol",
      "Improved Sleep",
      "Improved Gut Health",
      "Better Memory (Brain Fog)",
      "Deep Cellular Cleansing (Master Cleansing)"
    ]
  },
  {
    id: "stress-management-package",
    title: "Stress Management Package",
    subtitle:
      "If you suffer from stress or burn-out symptoms, the stress management package is the right choice.",
    goal: "Let Body And Soul Come To Rest",
    days: "14 Days",
    imagePath: "/images/packages/stress-management-package.jpg",
    imageSide: "left",
    contents: [
      "Initial Assessment",
      "Yoga And Meditation",
      "Practicing Mindfulness",
      "Naturopathy Diet",
      "Workshops For Time Management And How To Handle Stress",
      "Daily Follow-Ups",
      "Deep Relaxation Techniques",
      "Ayurvedic Treatment",
      "Hydrotherapy Treatments Like Vichy Shower"
    ],
    whoShouldJoin: [
      "Stress",
      "Burnout",
      "Insomnia",
      "Muscular Tensions",
      "Feelings Of Mental Overload",
      "Exhaustion",
      "Powerlessness",
      "Anxiety Disorders",
      "Nervousness",
      "Neck And Shoulder Problems"
    ],
    benefits: [
      "Reduce Stress",
      "Lower Emotional Reactivity",
      "Improve Relationships And Communication Skills",
      "Calm An Overthinking Mind",
      "Increase The Ability To Focus",
      "Boost Creativity And Innovation"
    ]
  },
  {
    id: "weight-management-package",
    title: "Weight Management",
    subtitle:
      "Losing weight, feeling freer and more comfortable as well as preventing the harmful effects that can occur due to overweight.",
    goal: "Weight Loss/Weight Gain",
    days: "28 Days",
    imagePath: "/images/packages/weight-management-package.jpg",
    imageSide: "right",
    contents: [
      "Initial Assessment",
      "Cooking Class",
      "Yoga And Meditation",
      "Naturopathy Diet",
      "Seminars On Obesity",
      "Daily Follow-Ups",
      "Hydrotherapy Rx",
      "Ayurvedic Treatment",
      "Mud Therapies"
    ],
    whoShouldJoin: [
      "Overweight",
      "Digestive Problems",
      "High Cholesterol Values",
      "Lipid Metabolic Disorder",
      "Type II Diabetes",
      "Joint Pain During Movement",
      "Hypertension"
    ],
    benefits: [
      "Improved Mood",
      "Higher Self-Esteem",
      "Lower Blood Pressure",
      "Lower Levels Of Triglycerides",
      "Improved Mobility And Reduced Pain",
      "Better Sleep",
      "Less Risk Of Heart Disease",
      "Better Sex And Less Erectile Dysfunction"
    ]
  },
  {
    id: "diabetes-package",
    title: "Diabetes Package",
    subtitle:
      "The diabetes care package helps to prevent pre-diabetes stage and to keep diabetes type 2 in remission.",
    goal: "Monitor Blood Sugar Level",
    days: "21 Days",
    imagePath: "/images/packages/diabetes-package.jpg",
    imageSide: "left",
    contents: [
      "Initial Assessment",
      "Mud Therapies",
      "Seminars On Obesity",
      "Naturopathy Diet",
      "Yoga And Meditation",
      "Daily Follow-Ups",
      "Hydrotherapy Rx",
      "Ayurvedic Treatment",
      "Cooking Class"
    ],
    whoShouldJoin: [
      "Alcohol Addict",
      "Sedentary Lifestyle",
      "Those Who Want To Monitor Blood Sugar",
      "Chain Smoker",
      "Family History Of Diabetes"
    ],
    benefits: [
      "To Prevent Diabetes",
      "To Control Blood Sugar Level",
      "To Modify Your Lifestyle",
      "Eliminate Dependence On Diabetes Medicine"
    ]
  },
  {
    id: "womens-health-care-package",
    title: "Women's Health Care Package",
    subtitle:
      "A holistic package to support women's hormonal, reproductive, and long-term wellness.",
    goal: "Balancing The Aggravated Dosha",
    days: "21 Days",
    imagePath: "/images/packages/womens-health-care-package.jpg",
    imageSide: "right",
    contents: [
      "Initial Assessment",
      "Internal Medications",
      "Local Therapies Like Yoni Pichu, Uthara Vasti",
      "Hydrotherapies Like Douche",
      "Daily Follow-Ups",
      "External Therapies",
      "Diet And Lifestyle Modification",
      "Yogasan, Pranayama And Meditation"
    ],
    whoShouldJoin: [
      "Irregular Periods",
      "Insomnia",
      "Vaginal Dryness",
      "Anger",
      "Ageing Skin, Joint Pains",
      "Anxiety",
      "Urinary Tract Infections",
      "Enhance Skin Health",
      "Nocturnal Sweats",
      "Memory Lapses",
      "Hot Flashes",
      "Generalised Tiredness",
      "Mood Swings",
      "Irritability",
      "Support Healthy Conception"
    ],
    benefits: [
      "Restore Hormonal Balance",
      "Reducing Stress And Anxiety",
      "Maintaining A Healthy Weight",
      "Eliminating Toxins, Improving Digestion, And Balancing The Doshas",
      "Normal Menstrual Cycles",
      "General Reproductive Wellness",
      "Boosting Fertility And Promoting Reproductive Health"
    ]
  },
  {
    id: "joint-and-spine-package",
    title: "Joint And Spine Package",
    subtitle:
      "A well planned health pack using all the possibilities of Ayurveda and Yoga to treat various joint and spine conditions.",
    goal: "To Avoid The Possible Spine And Joint Complications",
    days: "28 Days",
    imagePath: "/images/packages/joint-and-spine-package.jpg",
    imageSide: "left",
    contents: [
      "Initial Assessment",
      "Internal Medications",
      "Workshop For Postural Correction",
      "Physical Therapies Like Chiropractic, Marma Chikitsa, Reflexology, Acupressure, Aerial Yoga, Postural Correction",
      "Daily Follow-Ups",
      "Panchakarma Therapies",
      "Diet And Lifestyle Modification"
    ],
    whoShouldJoin: [
      "Knee Pain",
      "Disc Prolapse",
      "Poor Posture",
      "Sciatica",
      "Cervical Spondylosis",
      "Back Pain",
      "Osteo-Arthritis",
      "Age Related Degenerative Joint Disorders",
      "Neck Pain",
      "Sports Injury",
      "Alcaneal Spur",
      "Rheumatoid Arthritis",
      "Back And Neck Problems",
      "Disc Bulge",
      "Lumbar Spondylosis",
      "Radiating Pain From Spine To Arms And Legs"
    ],
    benefits: [
      "Better Posture",
      "Free From All Joint Pain",
      "Can Avoid Complications",
      "Ability To Perform Activities Of Daily Living",
      "Can Avoid Surgery",
      "Improved Flexibility",
      "Improved Range Of Motion",
      "Panchkarma Treatment"
    ]
  }
];

function CheckList({ items }) {
  return (
    <ul className="package-list-grid">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PackageBlock({ item, index, t, locale }) {
  const reverse = item.imageSide === "right" || index % 2 === 1;
  const localHref = (path) => withLocalePath(path, locale);

  return (
    <article id={item.id} className={`package-block${reverse ? " is-reverse" : ""}`}>
      <div className="package-media" aria-label={`${item.title} image placeholder`}>
        <div className="package-media-frame">
          <p className="package-media-title">{t.imagePlaceholder}</p>
          <p className="package-media-copy">
            {t.addImageAt}: <code>{item.imagePath}</code>
          </p>
        </div>
      </div>

      <div className="package-copy">
        <h2>{item.title}</h2>
        <p className="package-subtitle">{item.subtitle}</p>

        <div className="package-meta-card">
          <h3>{t.goal}</h3>
          <p className="package-goal">{item.goal}</p>
          <p className="package-days-label">{t.daysLabel}</p>
          <p className="package-days">{item.days}</p>
          <Link href={localHref("/consultation")} className="package-cta-btn">
            {t.bookAppointment}
          </Link>
        </div>

        <section className="package-list-section">
          <h4>{t.contents}</h4>
          <CheckList items={item.contents} />
        </section>

        <section className="package-list-section">
          <h4>{t.whoJoin}</h4>
          <CheckList items={item.whoShouldJoin} />
        </section>

        <section className="package-list-section">
          <h4>{t.benefits}</h4>
          <CheckList items={item.benefits} />
        </section>
      </div>
    </article>
  );
}

export default function PackagePage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const t = hi
    ? {
        package: "\u092a\u0948\u0915\u0947\u091c",
        lead:
          "\u0936\u0930\u0940\u0930, \u092e\u0928 \u0914\u0930 \u0906\u0924\u094d\u092e\u093e \u0915\u094b \u0938\u0902\u0924\u0941\u0932\u093f\u0924 \u0914\u0930 \u0938\u093e\u092e\u0902\u091c\u0938\u094d\u092f\u092a\u0942\u0930\u094d\u0923 \u091c\u0940\u0935\u0928 \u0915\u0947 \u0932\u093f\u090f \u091c\u094b\u0921\u093c\u0928\u093e\u0964",
        imagePlaceholder: "\u0907\u092e\u0947\u091c \u092a\u094d\u0932\u0947\u0938\u0939\u094b\u0932\u094d\u0921\u0930",
        addImageAt: "\u0905\u092a\u0928\u0940 \u0907\u092e\u0947\u091c \u092f\u0939\u093e\u0902 \u091c\u094b\u0921\u093c\u0947\u0902",
        goal: "\u0932\u0915\u094d\u0937\u094d\u092f",
        daysLabel: "\u0926\u093f\u0928\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e",
        bookAppointment: "\u0905\u092a\u0949\u0907\u0902\u091f\u092e\u0947\u0902\u091f \u092c\u0941\u0915 \u0915\u0930\u0947\u0902",
        contents: "\u0915\u0902\u091f\u0947\u0902\u091f \u0913\u0935\u0930\u0935\u094d\u092f\u0942",
        whoJoin: "\u0915\u093f\u0938\u0947 \u091c\u0941\u0921\u093c\u0928\u093e \u091a\u093e\u0939\u093f\u090f",
        benefits: "\u0932\u093e\u092d"
      }
    : {
        package: "Package",
        lead: "Uniting body, mind, and soul for a harmonious and balanced life.",
        imagePlaceholder: "Image Placeholder",
        addImageAt: "Add your image at",
        goal: "Goal",
        daysLabel: "No. Of. Days",
        bookAppointment: "Book An Appointment",
        contents: "Contents Overview",
        whoJoin: "Who Must Join",
        benefits: "Benefits"
      };

  return (
    <main>
      <section className="container package-hero reveal in">
        <p className="mini-kicker">{t.package}</p>
        <h1>{t.package}</h1>
        <p className="lead">{t.lead}</p>
      </section>

      <section className="container package-stack reveal in">
        {packagePrograms.map((item, index) => (
          <PackageBlock key={item.id} item={item} index={index} t={t} locale={locale} />
        ))}
      </section>
    </main>
  );
}

