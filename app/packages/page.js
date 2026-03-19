import Link from "next/link";
import Image from "next/image";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Package",
  description:
    "Explore daily OPD walk-in packages and residential IPD admissions at Shanti-Ratnam.",
  alternates: {
    canonical: "/packages"
  }
};

const opdPackages = [
  {
    id: "feel-good-package",
    categoryClass: "prevention",
    category: "Prevention",
    title: "Feel Good Package",
    subtitle: "Package #1 - OPD Outpatient Programme",
    duration: "2 Days",
    dailyHours: "2-3 hrs/day",
    price: "Rs 7,000",
    shortDescription:
      "A revitalising two-day retreat designed to refresh your body and uplift your spirit through time-tested Ayurvedic therapies.",
    fullDescription:
      "The Feel Good Package is an introduction to restorative Ayurveda. It combines Abhyangam warm oil massage, Manjal Kizhi herbal poultice work, specialised stimulation techniques, and herbal steam to improve circulation, reduce fatigue, and leave the body feeling renewed.",
    procedures: ["Abhyangam", "Manjal Kizhi", "SSPS", "PPS", "Steam"],
    benefits: [
      "Relieves muscular fatigue and body ache",
      "Improves blood and lymphatic circulation",
      "Brightens and nourishes skin",
      "Boosts immunity and energy levels",
      "Promotes deep mental calm and clarity"
    ]
  },
  {
    id: "know-your-body-package",
    categoryClass: "rejuvenation",
    category: "Rejuvenation",
    title: "Know Your Body Package",
    subtitle: "Package #2 - OPD Outpatient Programme",
    duration: "3 Days",
    dailyHours: "2-3 hrs/day",
    price: "Rs 11,000",
    shortDescription:
      "A three-day journey of self-discovery and deep cellular rejuvenation using the royal oil bath of Pizhichiil alongside classical Panchakarma techniques.",
    fullDescription:
      "This package begins with Abhyangam and then introduces Pizhichiil, a deeply nourishing warm oil treatment for muscles, joints, and the nervous system. CPS and Nasyam are added to support energy balance, sinus clarity, sharper focus, and overall rejuvenation.",
    procedures: ["Abhyangam", "Pizhichiil", "CPS", "Nasyam", "Steam"],
    benefits: [
      "Deep joint and muscle nourishment",
      "Balances all three doshas",
      "Clears nasal passages and improves breathing",
      "Enhances mental focus and memory",
      "Strengthens the nervous system"
    ]
  },
  {
    id: "basic-detoxification-package",
    categoryClass: "detox",
    category: "Detoxification",
    title: "Basic Detoxification Package",
    subtitle: "Package #3 - OPD Outpatient Programme",
    duration: "5 Days",
    dailyHours: "2-3 hrs/day",
    price: "Rs 16,000",
    shortDescription:
      "A focused five-day detox programme to cleanse the body of accumulated toxins and restore cellular vitality through classical Ayurvedic purification.",
    fullDescription:
      "Each day combines Abhyangam, Shirodhara or Takra Dhara, Udwarthanam, Naranga Kizhi, and steam to mobilise toxins, calm the nervous system, stimulate metabolism, and support elimination. It is designed for guests seeking a structured cleansing reset.",
    procedures: [
      "Abhyangam",
      "Shirodhara / Takra Dhara",
      "Udwarthanam",
      "Naranga Kizhi",
      "Steam"
    ],
    benefits: [
      "Deep cellular detoxification",
      "Improved digestive fire",
      "Reduction of inflammation and joint pain",
      "Weight management support",
      "Glowing, tightened skin",
      "Relieves stress and mental fog"
    ]
  },
  {
    id: "complete-detox-package",
    categoryClass: "purification",
    category: "Body Purification",
    title: "Complete Detox Package",
    subtitle: "Package #4 - OPD Outpatient Programme",
    duration: "7 Days",
    dailyHours: "2-3 hrs/day",
    price: "Rs 21,000",
    shortDescription:
      "A comprehensive seven-day purification protocol that works through multiple body systems for a complete Ayurvedic reset.",
    fullDescription:
      "This deeper detox builds on the basic cleanse with Dhanyamla Dhara, CPS, and Matra Basti. The programme supports gut cleansing, Vata balance, joint relief, nervous-system support, and a lighter, clearer post-treatment state.",
    procedures: [
      "Abhyangam",
      "Shirodhara / Takra Dhara",
      "Dhanyamla Dhara",
      "CPS",
      "Steam",
      "Matra Basti"
    ],
    benefits: [
      "Thorough colon and gut cleanse",
      "Relieves chronic back pain and sciatica",
      "Supports neurological health",
      "Reduces excess weight and water retention",
      "Deep nervous system restoration",
      "Full dosha rebalancing"
    ]
  },
  {
    id: "stress-buster-package",
    categoryClass: "destress",
    category: "De-Stress",
    title: "Stress Buster Package",
    subtitle: "Package #5 - OPD Outpatient Programme",
    duration: "10 or 15 Days",
    dailyHours: "2-3 hrs/day",
    price: "Rs 28,000 - Rs 36,000",
    shortDescription:
      "An immersive Ayurvedic stress management programme that works on both the physical and emotional roots of chronic stress.",
    fullDescription:
      "Abhyangam, Shirodhara or Takra Dhara, Udwarthanam, Dhanyamla Dhara, CPS, and steam are combined to regulate stress response, reduce muscular tension, and restore parasympathetic calm. The 15-day option adds Yoga Basti for deeper Vata balancing.",
    procedures: [
      "Abhyangam",
      "Shirodhara / Takra Dhara",
      "Udwarthanam",
      "Dhanyamla Dhara",
      "CPS",
      "Steam",
      "Yoga Basti (15-day)"
    ],
    benefits: [
      "Regulates cortisol and stress hormones",
      "Deeply restores sleep quality",
      "Relieves anxiety, panic and mental fatigue",
      "Addresses root cause of Vata imbalance",
      "Strengthens digestive and immune function",
      "Restores emotional resilience and clarity"
    ]
  },
  {
    id: "lady-bloom-package",
    categoryClass: "womens",
    category: "Women's Care",
    title: "Lady Bloom Package",
    subtitle: "Package #6 - OPD Outpatient Programme",
    duration: "7 Days",
    dailyHours: "2-3 hrs/day",
    price: "Rs 21,000",
    shortDescription:
      "A dedicated seven-day women's wellness programme addressing hormonal balance, reproductive health, skin radiance, and deep feminine vitality.",
    fullDescription:
      "The Lady Bloom Package blends Pizhichiil, Shirodhara or Takra Dhara, Udwarthanam, Dhanyamla Dhara, CPS, steam, and Matra Basti to support hormone rhythm, ease discomfort, improve skin vitality, and promote emotional and reproductive wellbeing.",
    procedures: [
      "Abhyangam",
      "Shirodhara / Takra Dhara",
      "Udwarthanam",
      "Pizhichiil",
      "Dhanyamla Dhara",
      "CPS",
      "Steam",
      "Matra Basti"
    ],
    benefits: [
      "Supports hormonal balance and menstrual health",
      "Relieves perimenopausal and PMS symptoms",
      "Improves skin glow and texture",
      "Reduces pelvic tension and inflammation",
      "Restores libido and reproductive vitality",
      "Deep emotional and energetic renewal"
    ]
  },
  {
    id: "care-package-for-elderly",
    categoryClass: "elderly",
    category: "Senior Citizen Care",
    title: "Care Package for Elderly",
    subtitle: "Package #7 - OPD Outpatient Programme",
    duration: "5 Days",
    dailyHours: "2-3 hrs/day",
    price: "Rs 15,000",
    shortDescription:
      "A gentle yet deeply effective five-day Ayurvedic care programme specially formulated for the needs and sensitivities of senior citizens.",
    fullDescription:
      "This programme uses Abhyangam, Shirodhara, Udwarthanam, CPS, and steam in a slower, carefully supported format for ageing bodies. It focuses on mobility, sleep quality, mental calm, circulation, and seasonal tune-up care.",
    procedures: [
      "Abhyangam",
      "Shirodhara / Takra Dhara",
      "Udwarthanam",
      "CPS",
      "Steam"
    ],
    benefits: [
      "Relieves arthritic joint pain and stiffness",
      "Improves sleep and cognitive function",
      "Supports healthy blood pressure",
      "Reduces emotional stress",
      "Strengthens skin, immunity and circulation",
      "Promotes graceful, dignified aging"
    ]
  },
  {
    id: "pioneering-package-for-kids",
    categoryClass: "kids",
    category: "Children's Care",
    title: "Pioneering Package for Kids",
    subtitle: "Package #8 - OPD Outpatient Programme",
    duration: "8 Weekend Days/Month",
    dailyHours: "2-3 hrs/day",
    price: "Rs 15,000",
    shortDescription:
      "An innovative weekend Ayurvedic programme for children under 15, supporting immunity, concentration, and emotional wellbeing.",
    fullDescription:
      "Conducted over 8 weekend sessions in a month, this child-friendly package combines Abhyangam, Shirodhara or Takra Dhara, Nasyam, Manjal Kizhi, and steam in age-appropriate ways to support growth, calmness, respiratory ease, and learning focus.",
    procedures: [
      "Abhyangam",
      "Shirodhara / Takra Dhara",
      "Nasyam",
      "Manjal Kizhi",
      "Steam"
    ],
    benefits: [
      "Builds strong immunity and disease resistance",
      "Improves concentration, memory and learning",
      "Reduces hyperactivity and anxiety",
      "Supports healthy growth and development",
      "Relieves recurrent respiratory conditions",
      "Promotes deep, restful sleep in children"
    ]
  }
];

const ipdPackages = [
  {
    id: "rejuvenation-package",
    title: "Rejuvenation Package",
    subtitle: "This package is designed to relax and vitalize the body.",
    goal: "Recovery, Vitalization",
    days: "14 Days",
    imagePath: "/images/packages/Rejuvenation package.webp",
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
    imagePath: "/images/packages/detox package.webp",
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
    imagePath: "/images/packages/stress management.webp",
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
    imagePath: "/images/packages/weight management.webp",
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
    imagePath: "/images/packages/diabeties package.webp",
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
    imagePath: "/images/packages/womens health care.webp",
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
    imagePath: "/images/packages/joint and spine.webp",
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

const packageSequence = [
  "joint-and-spine-package",
  "diabetes-package",
  "detox-package",
  "stress-management-package",
  "weight-management-package",
  "womens-health-care-package",
  "rejuvenation-package"
];

const orderedIpdPackages = packageSequence
  .map((id) => ipdPackages.find((item) => item.id === id))
  .filter(Boolean);

function CheckList({ items }) {
  return (
    <ul className="package-list-grid">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PackageJumpCard({ href, title, subtitle, description }) {
  return (
    <a className="package-jump-card" href={href}>
      <span className="package-jump-kicker">{subtitle}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="package-jump-link">Explore section</span>
    </a>
  );
}

function OpdPackageCard({ item, t, locale }) {
  const localHref = (path) => withLocalePath(path, locale);

  return (
    <article className="opd-package-card" id={item.id}>
      <div className="opd-package-top">
        <span className={`opd-package-badge ${item.categoryClass}`}>{item.category}</span>
        <h3>{item.title}</h3>
        <p className="opd-package-subtitle">{item.subtitle}</p>
      </div>

      <div className="opd-package-body">
        <p className="opd-package-desc">{item.shortDescription}</p>

        <div className="opd-package-procedures">
          <p className="opd-package-label">{t.proceduresIncluded}</p>
          <div className="opd-procedure-tags">
            {item.procedures.map((procedure) => (
              <span key={procedure} className="opd-procedure-tag">
                {procedure}
              </span>
            ))}
          </div>
        </div>

        <details className="opd-package-more">
          <summary>{t.readMore}</summary>
          <div className="opd-package-more-content">
            <p>{item.fullDescription}</p>
            <div className="opd-package-benefits">
              <p className="opd-package-label">{t.keyBenefits}</p>
              <CheckList items={item.benefits} />
            </div>
          </div>
        </details>
      </div>

      <div className="opd-package-footer">
        <div className="opd-package-meta">
          <div className="opd-meta-item">
            <span>{t.duration}</span>
            <strong>{item.duration}</strong>
          </div>
          <div className="opd-meta-item">
            <span>{t.dailyTiming}</span>
            <strong>{item.dailyHours}</strong>
          </div>
        </div>

        <div className="opd-package-price-wrap">
          <p className="opd-package-price">{item.price}</p>
          <Link href={localHref("/consultation")} className="opd-package-cta">
            {t.bookAppointment}
          </Link>
        </div>
      </div>
    </article>
  );
}

function PackageBlock({ item, index, t, locale }) {
  const reverse = item.imageSide === "right" || index % 2 === 1;
  const localHref = (path) => withLocalePath(path, locale);

  return (
    <article id={item.id} className={`package-block${reverse ? " is-reverse" : ""}`}>
      <div className="package-media" aria-label={`${item.title} image`}>
        <div className="package-media-frame">
          <Image
            src={item.imagePath}
            alt={item.title}
            width={1200}
            height={900}
            quality={95}
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="package-media-image"
          />
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
        package: "उपचार पैकेज",
        lead:
          "दैनिक ओपीडी वॉक-इन पैकेज और आवासीय आईपीडी उपचार कार्यक्रम, दोनों एक ही स्थान पर।",
        packageChooser: "पैकेज प्रकार चुनें",
        packageChooserLead:
          "त्वरित विजिट के लिए ओपीडी चुनें या गहन उपचार के लिए आईपीडी प्रवेश देखें।",
        opdTitle: "OPD Packages",
        opdSubtitle: "Daily Walk-In",
        opdLead:
          "दैनिक ओपीडी पैकेज उन मरीजों के लिए हैं जो नियोजित सत्रों के साथ दिन में आकर उपचार लेना चाहते हैं।",
        ipdTitle: "IPD Packages",
        ipdSubtitle: "Admissions",
        ipdLead:
          "आईपीडी पैकेज प्रवेश आधारित आवासीय कार्यक्रम हैं जिनमें लंबी अवधि का समग्र उपचार शामिल है।",
        goal: "लक्ष्य",
        daysLabel: "दिनों की संख्या",
        bookAppointment: "अपॉइंटमेंट बुक करें",
        contents: "कंटेंट ओवरव्यू",
        whoJoin: "किसे जुड़ना चाहिए",
        benefits: "लाभ",
        proceduresIncluded: "प्रोसीजर्स शामिल",
        readMore: "अधिक जानकारी पढ़ें",
        keyBenefits: "मुख्य लाभ",
        duration: "अवधि",
        dailyTiming: "रोजाना"
      }
    : {
        package: "Packages",
        lead:
          "Browse both daily OPD walk-in packages and residential IPD admission programmes in one place.",
        packageChooser: "Choose Package Type",
        packageChooserLead:
          "Pick OPD for short daily visits or IPD for immersive admission-based treatment plans.",
        opdTitle: "OPD Packages",
        opdSubtitle: "Daily Walk-In",
        opdLead:
          "These outpatient packages are designed for guests who want structured daily therapies without hospital admission.",
        ipdTitle: "IPD Packages",
        ipdSubtitle: "Admissions",
        ipdLead:
          "These admission-based programmes are better suited for deeper recovery, longer protocols, and supervised residential care.",
        goal: "Goal",
        daysLabel: "No. Of. Days",
        bookAppointment: "Book An Appointment",
        contents: "Contents Overview",
        whoJoin: "Who Must Join",
        benefits: "Benefits",
        proceduresIncluded: "Procedures Included",
        readMore: "Read more",
        keyBenefits: "Key Benefits",
        duration: "Duration",
        dailyTiming: "Daily"
      };

  return (
    <main>
      <section className="container package-hero reveal in">
        <p className="mini-kicker">{t.package}</p>
        <h1>{t.package}</h1>
        <p className="lead">{t.lead}</p>
      </section>

      <section className="container package-jump-grid reveal in" aria-label={t.packageChooser}>
        <div className="package-section-intro">
          <p className="mini-kicker">{t.packageChooser}</p>
          <h2>{t.packageChooser}</h2>
          <p>{t.packageChooserLead}</p>
        </div>

        <div className="package-jump-links">
          <PackageJumpCard
            href="#opd-packages"
            title={t.opdTitle}
            subtitle={t.opdSubtitle}
            description={t.opdLead}
          />
          <PackageJumpCard
            href="#ipd-packages"
            title={t.ipdTitle}
            subtitle={t.ipdSubtitle}
            description={t.ipdLead}
          />
        </div>
      </section>

      <section id="opd-packages" className="container package-section reveal in">
        <div className="package-section-head">
          <p className="mini-kicker">{t.opdSubtitle}</p>
          <h2>{t.opdTitle}</h2>
          <p>{t.opdLead}</p>
        </div>

        <div className="opd-package-grid">
          {opdPackages.map((item) => (
            <OpdPackageCard key={item.id} item={item} t={t} locale={locale} />
          ))}
        </div>
      </section>

      <section id="ipd-packages" className="container package-section reveal in">
        <div className="package-section-head">
          <p className="mini-kicker">{t.ipdSubtitle}</p>
          <h2>{t.ipdTitle}</h2>
          <p>{t.ipdLead}</p>
        </div>

        <div className="package-stack">
          {orderedIpdPackages.map((item, index) => (
            <PackageBlock key={item.id} item={item} index={index} t={t} locale={locale} />
          ))}
        </div>
      </section>
    </main>
  );
}
