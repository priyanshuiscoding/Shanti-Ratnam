import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { mdDeskContent } from "@/lib/siteData";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";
import { GOOGLE_REVIEWS_FALLBACK_URL, getLiveGoogleReviews } from "@/lib/googleReviews";

export const metadata = {
  title: "Home",
  description:
    "Shanti-Ratnam home page with wellness programs, why choose us details, and consultation access.",
  alternates: {
    canonical: "/"
  }
};

const treatmentDepartments = [
  {
    title: "Gastroenterology",
    hindi: "\u0917\u0948\u0938\u094d\u091f\u094d\u0930\u094b\u090f\u0902\u091f\u094d\u0930\u094b\u0932\u0949\u091c\u0940",
    href: "/diseases-treated#gastroenterology-department",
    imagePath: "/images/treatment/gaestroentrology.png"
  },
  {
    title: "Gynaecology",
    hindi: "\u0917\u093e\u0907\u0928\u0915\u094b\u0932\u0949\u091c\u0940",
    href: "/diseases-treated#womens-health-department",
    imagePath: "/images/treatment/gyne.png"
  },
  {
    title: "Neurology",
    hindi: "\u0928\u094d\u092f\u0942\u0930\u094b\u0932\u0949\u091c\u0940",
    href: "/diseases-treated#neurology-department",
    imagePath: "/images/treatment/neurology.png"
  },
  {
    title: "Pulmonology",
    hindi: "\u092a\u0932\u094d\u092e\u094b\u0928\u094b\u0932\u0949\u091c\u0940",
    href: "/diseases-treated#pulmonology-department",
    imagePath: "/images/treatment/pulmon-1.png"
  },
  {
    title: "Urology",
    hindi: "\u092f\u0942\u0930\u094b\u0932\u0949\u091c\u0940",
    href: "/diseases-treated#urology-department",
    imagePath: "/images/treatment/urology-new-1.png"
  },
  {
    title: "Skin & Hair",
    hindi: "\u0924\u094d\u0935\u091a\u093e \u0914\u0930 \u092c\u093e\u0932",
    href: "/diseases-treated#skin-and-hair-department",
    imagePath: "/images/treatment/skin-and-hair-1.png"
  },
  {
    title: "Obesity",
    hindi: "\u092e\u094b\u091f\u093e\u092a\u093e",
    href: "/diseases-treated#diet-and-nutrition-department",
    imagePath: "/images/treatment/obesity-2.png"
  },
  {
    title: "Spine & Joint Care",
    hindi: "\u0930\u0940\u0922\u093c \u0914\u0930 \u091c\u094b\u0921\u093c\u094b\u0902 \u0915\u0940 \u0926\u0947\u0916\u092d\u093e\u0932",
    href: "/diseases-treated#orthopaedic-department",
    imagePath: "/images/treatment/joint.png"
  },
  {
    title: "Sexual Health",
    hindi: "\u092f\u094c\u0928 \u0930\u094b\u0917",
    href: "/diseases-treated#sexual-health-department",
    imagePath: "/images/treatment/gender-1.png"
  },
  {
    title: "Oncology / Cancer",
    hindi: "\u0911\u0928\u094d\u0915\u094b\u0932\u0949\u091c\u0940 / \u0915\u0948\u0902\u0938\u0930",
    href: "/diseases-treated#oncology-department",
    imagePath: "/images/treatment/cancer.png"
  },
  {
    title: "Diabetes",
    hindi: "\u092e\u0927\u0941\u092e\u0947\u0939",
    href: "/diseases-treated#diabetic-reversal-program",
    imagePath: "/images/treatment/diabetese-1.png"
  },
  {
    title: "Endocrinology",
    hindi: "\u0905\u0902\u0924\u0903\u0938\u094d\u0930\u093e\u0935\u093f\u0915\u093e",
    href: "/diseases-treated#diabetic-reversal-program",
    imagePath: "/images/treatment/thyroid.png"
  }
];

const videoTestimonials = [
  {
    title: "Diabetes Reversal Testimonial",
    titleHi: "\u0921\u093e\u092f\u092c\u093f\u091f\u0940\u091c \u0930\u093f\u0935\u0930\u094d\u0938\u0932 \u091f\u0947\u0938\u094d\u091f\u093f\u092e\u094b\u0928\u093f\u092f\u0932",
    youtubeUrl: "https://www.youtube.com/watch?v=1bCflnm8vPA"
  },
  {
    title: "Patient Recovery Testimonial",
    titleHi: "\u0930\u094b\u0917\u0940 \u0930\u093f\u0915\u0935\u0930\u0940 \u091f\u0947\u0938\u094d\u091f\u093f\u092e\u094b\u0928\u093f\u092f\u0932",
    youtubeUrl: "https://youtu.be/we04tu-zIUE?si=sITDEpcTtCBTFitf"
  }
];

const googleReviewsFallback = [
  {
    name: "Sushma Singhai",
    rating: 5,
    text:
      "I had frozen shoulder and back pain for years. The therapy plan and guidance gave me major relief in a short period."
  },
  {
    name: "Muni Rathinam",
    rating: 5,
    text:
      "Very well-managed center with experienced doctors. They identify root cause and explain treatment clearly."
  },
  {
    name: "Mahima Dwivedi",
    rating: 5,
    text:
      "A calm, positive place. Yoga and wellness support here improved both physical and mental health."
  }
];

function getYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
    return "";
  } catch {
    return "";
  }
}

export default async function HomePage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const t = hi
    ? {
        welcome:
          "\u0938\u0902\u092a\u0942\u0930\u094d\u0923 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0915\u0947 \u0932\u093f\u090f \u0936\u093e\u0902\u0924\u093f-\u0930\u0924\u094d\u0928\u092e \u092e\u0947\u0902 \u0906\u092a\u0915\u093e \u0938\u094d\u0935\u093e\u0917\u0924 \u0939\u0948",
        book:
          "\u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u092a\u0930\u093e\u092e\u0930\u094d\u0936 \u0915\u0947 \u0932\u093f\u090f \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902",
        callNow: "\u0905\u092d\u0940 \u0915\u0949\u0932 \u0915\u0930\u0947\u0902",
        advisor: "\u0939\u092e\u093e\u0930\u0947 \u0935\u0947\u0932\u0928\u0947\u0938 \u090f\u0921\u0935\u093e\u0907\u091c\u0930 \u0938\u0947 \u092c\u093e\u0924 \u0915\u0930\u0947\u0902",
        advisorBody:
          "\u0938\u093e\u0917\u0930, \u092e\u0927\u094d\u092f \u092a\u094d\u0930\u0926\u0947\u0936 \u092e\u0947\u0902 \u0939\u092e\u093e\u0930\u0940 \u091f\u0940\u092e \u0915\u0947 \u0938\u093e\u0925 \u0905\u092a\u0928\u093e \u092a\u0948\u0915\u0947\u091c \u0915\u0938\u094d\u091f\u092e\u093e\u0907\u091c \u0915\u0930\u0947\u0902\u0964",
        symptom:
          "\u0905\u092a\u0928\u0947 \u0932\u0915\u094d\u0937\u0923 \u0917\u0942\u0917\u0932 \u0915\u0930\u0928\u093e \u092c\u0902\u0926 \u0915\u0930\u0947\u0902\u0964 15 \u092e\u093f\u0928\u091f \u092e\u0947\u0902 \u0939\u092e\u093e\u0930\u0947 \u090f\u0915\u094d\u0938\u092a\u0930\u094d\u091f\u094d\u0938 \u0938\u0947 \u0938\u094d\u092a\u0937\u094d\u091f \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0932\u0947\u0902\u0964",
        whyEyebrow: "\u0939\u092e\u0947\u0902 \u0915\u094d\u092f\u094b\u0902 \u091a\u0941\u0928\u0947\u0902",
        whyTitle:
          "\u0930\u094b\u0917\u0940-\u092a\u094d\u0930\u0925\u092e \u0926\u0947\u0916\u092d\u093e\u0932, \u0938\u0902\u0930\u091a\u093f\u0924 \u0939\u0940\u0932\u093f\u0902\u0917 \u092a\u094d\u0932\u093e\u0928",
        specialties: "\u0935\u093f\u0936\u0947\u0937 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e",
        specialtyTitle:
          "\u092a\u0942\u0930\u094d\u0923 \u0926\u0940\u0930\u094d\u0918\u0915\u093e\u0932\u093f\u0915 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0932\u093e\u092d \u0915\u0947 \u0932\u093f\u090f \u0939\u092e\u093e\u0930\u0947 \u0938\u092e\u0930\u094d\u092a\u093f\u0924 \u0909\u092a\u091a\u093e\u0930 \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e",
        learnMore: "\u0905\u0927\u093f\u0915 \u091c\u093e\u0928\u0947\u0902",
        ourTreatment: "\u0939\u092e\u093e\u0930\u0940 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e",
        treatmentTitle:
          "\u092e\u0942\u0932\u092d\u0942\u0924 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e \u0938\u0947 \u0905\u092a\u0928\u0947 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0915\u094b \u0938\u092e\u0943\u0926\u094d\u0927 \u0915\u0930\u0947\u0902",
        treatmentEyebrow: "\u091f\u094d\u0930\u0940\u091f\u092e\u0947\u0902\u091f \u0915\u0947\u092f\u0930",
        treatmentPrograms:
          "\u0907\u0928-\u092a\u0947\u0936\u0947\u0902\u091f \u0914\u0930 \u0935\u0949\u0915-\u0907\u0928 \u091f\u094d\u0930\u0940\u091f\u092e\u0947\u0902\u091f \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e",
        inPatient: "\u0907\u0928 \u092a\u0947\u0936\u0947\u0902\u091f \u091f\u094d\u0930\u0940\u091f\u092e\u0947\u0902\u091f",
        walkIn: "\u0935\u0949\u0915 \u0907\u0928 \u091f\u094d\u0930\u0940\u091f\u092e\u0947\u0902\u091f",
        knowMore: "\u0905\u0927\u093f\u0915 \u091c\u093e\u0928\u0947\u0902",
        goldenWords: "\u0938\u094d\u0935\u0930\u094d\u0923\u093f\u092e \u0935\u093f\u091a\u093e\u0930",
        healer: "\u0939\u0940\u0932\u0930 \u0938\u0947 \u092e\u093f\u0932\u093f\u090f",
        videoEyebrow: "\u0935\u0940\u0921\u093f\u092f\u094b \u091f\u0947\u0938\u094d\u091f\u093f\u092e\u094b\u0928\u093f\u092f\u0932",
        videoTitle:
          "\u0930\u094b\u0917\u093f\u092f\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u092d\u0935 \u0914\u0930 \u0938\u092b\u0932\u0924\u093e \u0915\u0939\u093e\u0928\u093f\u092f\u093e\u0901",
        videoLead:
          "\u0906\u092a \u092f\u0939\u093e\u0901 \u0930\u0940\u092f\u0932 \u0930\u094b\u0917\u0940 \u0905\u0928\u0941\u092d\u0935 \u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964 \u0928\u090f \u0935\u0940\u0921\u093f\u092f\u094b \u0928\u093f\u092f\u092e\u093f\u0924 \u0930\u0942\u092a \u0938\u0947 \u091c\u094b\u0921\u093c\u0947 \u091c\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964",
        watchOnYouTube: "\u092f\u0942\u091f\u094d\u092f\u0942\u092c \u092a\u0930 \u0926\u0947\u0916\u0947\u0902",
        reviewEyebrow: "\u0917\u0942\u0917\u0932 \u0930\u093f\u0935\u094d\u092f\u0942",
        reviewTitle: "\u0917\u0942\u0917\u0932 \u092a\u0930 \u0930\u094b\u0917\u093f\u092f\u094b\u0902 \u0915\u0940 \u0930\u093e\u092f",
        reviewLead:
          "\u0930\u0940\u092f\u0932 \u0917\u0942\u0917\u0932 \u0930\u093f\u0935\u094d\u092f\u0942 \u0926\u0947\u0916\u0947\u0902 \u0914\u0930 \u0930\u094b\u0917\u093f\u092f\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u092d\u0935 \u091c\u093e\u0928\u0947\u0902\u0964",
        reviewCta: "\u0917\u0942\u0917\u0932 \u092a\u0930 \u0938\u092d\u0940 \u0930\u093f\u0935\u094d\u092f\u0942 \u0926\u0947\u0916\u0947\u0902",
        reviewSummary: "\u0917\u0942\u0917\u0932 \u0930\u0947\u091f\u093f\u0902\u0917",
        heroLead:
          "\u0939\u092e \u0938\u0902\u0930\u091a\u093f\u0924, \u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0915\u0943\u0924 \u0914\u0930 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u0921\u0949\u0915\u094d\u091f\u0930-\u0917\u093e\u0907\u0921\u0947\u0921 \u0939\u0940\u0932\u093f\u0902\u0917 \u092a\u094d\u0932\u093e\u0928 \u092a\u094d\u0930\u0926\u093e\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u091c\u094b \u0926\u0940\u0930\u094d\u0918\u0915\u093e\u0932\u093f\u0915 \u0938\u094d\u0925\u093f\u0930\u0924\u093e \u0914\u0930 \u092c\u0947\u0939\u0924\u0930 \u0938\u094d\u0935\u0938\u094d\u0925 \u091c\u0940\u0935\u0928 \u0915\u0947 \u0932\u093f\u090f \u0924\u0948\u092f\u093e\u0930 \u0915\u093f\u090f \u0917\u090f \u0939\u0948\u0902\u0964",
        exp: "\u0032\u0035+ \u0935\u0930\u094d\u0937\u094b\u0902 \u0915\u093e \u0905\u0928\u0941\u092d\u0935",
        doctorPrograms: "\u0921\u0949\u0915\u094d\u091f\u0930-\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093f\u0924 \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e",
        chronicFocus: "\u0915\u094d\u0930\u0949\u0928\u093f\u0915 \u0915\u0947\u092f\u0930 \u092b\u094b\u0915\u0938",
        whatsappNow: "\u0935\u094d\u0939\u093e\u091f\u094d\u0938\u090f\u092a \u0915\u0930\u0947\u0902",
        city: "\u0938\u093e\u0917\u0930, \u092e\u0927\u094d\u092f \u092a\u094d\u0930\u0926\u0947\u0936",
        inPatientBody: "\u090f\u0947\u0938\u0947 \u0930\u094b\u0917\u093f\u092f\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0938\u0902\u0930\u091a\u093f\u0924 \u0930\u0947\u091c\u093f\u0921\u0947\u0902\u0936\u093f\u092f\u0932 \u0915\u0947\u092f\u0930 \u092a\u094d\u0932\u093e\u0928 \u091c\u094b \u0926\u0948\u0928\u093f\u0915 \u0925\u0947\u0930\u0947\u092a\u0940, \u092a\u094d\u0930\u0917\u0924\u093f \u092e\u0949\u0928\u093f\u091f\u0930\u093f\u0902\u0917 \u0914\u0930 \u0915\u0947\u0902\u0926\u094d\u0930\u093f\u0924 \u0930\u093f\u0915\u0935\u0930\u0940 \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902\u0964",
        walkInBody: "\u0909\u0928 \u0930\u094b\u0917\u093f\u092f\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0932\u091a\u0940\u0932\u0940 \u0915\u0902\u0938\u0932\u094d\u091f\u0947\u0936\u0928 \u0914\u0930 \u0925\u0947\u0930\u0947\u092a\u0940 \u0938\u0941\u0935\u093f\u0927\u093e \u091c\u093f\u0928\u094d\u0939\u0947\u0902 \u092a\u0942\u0930\u094d\u0923 \u0907\u0928-\u092a\u0947\u0936\u0947\u0902\u091f \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e \u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0928\u0939\u0940\u0902 \u0939\u0948\u0964"
      }
    : {
        welcome: "Welcome To",
        book: "Book Free Consultation",
        callNow: "Call Now",
        advisor: "Call Our Wellness Advisor",
        advisorBody:
          "Customize your package with our wellness team in Sagar, Madhya Pradesh.",
        symptom:
          "Stop Googling Your Symptoms. We know you've already spent hours online. Let our experts give you clarity in 15 minutes.",
        whyEyebrow: "Why Choose Us",
        whyTitle: "Patient First Care, Structured Healing Plans",
        specialties: "Specialties",
        specialtyTitle: "Specialized Care for Chronic Conditions",
        learnMore: "Learn More",
        ourTreatment: "Our Treatment",
        treatmentTitle: "We Heal These Systems",
        treatmentEyebrow: "Treatment Care",
        treatmentPrograms: "In Patient And Walk In Treatment Programs",
        inPatient: "In Patient Treatment",
        walkIn: "Walk In Treatment",
        knowMore: "Know More",
        goldenWords: "Golden Words",
        healer: "Meet The Healer",
        videoEyebrow: "Video Testimonials",
        videoTitle: "Patient Stories and Recovery Experiences",
        videoLead:
          "Watch real patient video testimonials. New videos can be added regularly.",
        watchOnYouTube: "Watch On YouTube",
        reviewEyebrow: "Google Reviews",
        reviewTitle: "What Our Patients Say",
        reviewLead: "See public patient feedback and ratings from Google reviews.",
        reviewCta: "Read All Reviews",
        reviewSummary: "Google Rating",
        heroLead:
          "We provide structured, personalized, unique doctor-guided healing plans designed for long-term sustainability and better healthy living.",
        exp: "25+ Years Experience",
        doctorPrograms: "Doctor-Guided Programs",
        chronicFocus: "Chronic Care Focus",
        whatsappNow: "WhatsApp Now",
        city: "Sagar, Madhya Pradesh",
        inPatientBody:
          "Structured residential care plans for patients requiring guided daily therapies, monitored progress, and focused recovery.",
        walkInBody:
          "Flexible consultation and therapy sessions for patients who do not require a full in-patient program."
      };

  const whyItems = [
    "100% safe, surgery-free, and time-bound care.",
    "Above 99% cure in cases of migraine, asthma, eczema, allergic rhinitis, urticaria, colitis, and arthritis.",
    "Holistic healing approach.",
    "Fixed and time-bound treatment plans for neuro and spine problems, diabetes reversal, and autoimmune disorders.",
    "Proven clinical outcomes.",
    "No animal cruelty involved.",
    "Legacy care foundation.",
    "Accessibility in both Hindi and English consultation."
  ];

  const consultationCards = hi
    ? [
        {
          title: "Video Consultation",
          imagePath: "/images/sections/Vedio consultation image .png",
          imageAlt: "Video consultation"
        },
        {
          title: "Walk In Consultation - OPD",
          imagePath: "/images/sections/walk-in-treatment.jpg",
          imageAlt: "Walk in consultation OPD"
        },
        {
          title: "Live In Consultation - IPD",
          imagePath: "/images/facilities/delux room.jpeg",
          imageAlt: "Live in consultation IPD"
        }
      ]
    : [
        {
          title: "Video Consultation",
          imagePath: "/images/sections/Vedio consultation image .png",
          imageAlt: "Video consultation"
        },
        {
          title: "Walk In Consultation - OPD",
          imagePath: "/images/sections/walk-in-treatment.jpg",
          imageAlt: "Walk in consultation OPD"
        },
        {
          title: "Live In Consultation - IPD",
          imagePath: "/images/facilities/delux room.jpeg",
          imageAlt: "Live in consultation IPD"
        }
      ];

  const localHref = (path) => withLocalePath(path, locale);

  const liveReviewData = await getLiveGoogleReviews(locale);
  const reviewsToShow = liveReviewData?.reviews?.length
    ? liveReviewData.reviews
    : googleReviewsFallback;
  const reviewRatingValueRaw = liveReviewData?.rating;
  const reviewRatingValue = reviewRatingValueRaw
    ? reviewRatingValueRaw >= 4.95
      ? 5
      : reviewRatingValueRaw
    : 5;
  const reviewTotal = liveReviewData?.totalRatings || 100;
  const reviewUrl = liveReviewData?.placeUrl || GOOGLE_REVIEWS_FALLBACK_URL;

  return (
    <main>
      <section className="hero container">
        <div className="hero-left hero-home-left reveal in">
          <p className="eyebrow">{t.welcome}</p>
          <h1 className="hero-brand-hindi">{"\u0936\u093e\u0902\u0924\u093f \u0930\u0924\u094d\u0928\u092e"}</h1>
          <p className="hero-subtitle">
            Central India's First Neuro-Painfree Centre and DIABETES REVERSAL AYUSH HOSPITAL.
          </p>
          <p className="lead">{t.heroLead}</p>
          <div className="hero-cta-row">
            <Link className="btn saffron-btn" href={localHref("/consultation")}>
              {t.book}
            </Link>
            <a className="btn ghost-btn" href="tel:+917007077353">
              {t.callNow}
            </a>
          </div>
          <div className="hero-logo-placeholders">
            <div className="logo-slot-ayush hero-ayush-badge">
              <div className="hero-ayush-cell hero-ayush-cell-logo">
                <Image
                  src="/images/branding/ayush-logo.jpeg"
                  alt="AYUSH certified logo"
                  width={240}
                  height={360}
                  className="logo-slot-image"
                />
              </div>
              <span className="hero-ayush-cell hero-ayush-claim">
                <strong>100%</strong>
                <small>SAFE</small>
              </span>
              <span className="hero-ayush-cell hero-ayush-claim">
                <strong>100%</strong>
                <small>AYURVEDIC</small>
              </span>
              <span className="hero-ayush-cell hero-ayush-claim">
                <strong>100%</strong>
                <small>VEGETARIAN</small>
              </span>
            </div>
          </div>
        </div>

        <aside className="advisor-card reveal in">
          <h2>{t.advisor}</h2>
          <p>{t.advisorBody}</p>
          <p className="city">{t.city}</p>
          <div className="card-actions">
            <a className="btn saffron-btn" href="tel:+917007077353">
              {t.callNow}
            </a>
            <a
              className="btn ghost-btn"
              href="https://wa.me/917007077353"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.whatsappNow}
            </a>
          </div>
        </aside>
      </section>

      <section className="container symptom-relief-note reveal in">
        <p>
          {t.symptom}
        </p>
      </section>

      <section className="container consultation-showcase reveal in">
        <div className="consultation-showcase-grid">
          <article className="consultation-intro">
            <p className="eyebrow">{hi ? "परामर्श" : "Consultation"}</p>
            <h2>{hi ? "कंसल्टेशन" : "Consultation"}</h2>
            <p>
              {hi
                ? "ऑनलाइन या ऑफलाइन कंसल्टेशन के लिए हमारी टीम से सीधे जुड़ें। आपकी स्थिति के अनुसार सही परामर्श मोड और अगला कदम तय किया जाएगा।"
                : "Connect directly with our team for online or offline consultation. We help you choose the right consultation mode and schedule quickly."}
            </p>
            <Link className="consultation-cta-btn" href={localHref("/contact-us")}>
              {hi ? "स्पेशल क्लिनिक्स" : "Special Clinics"}
            </Link>
          </article>

          <div className="consultation-cards">
            {consultationCards.map((item) => (
              <Link
                key={item.title}
                className="consultation-mode-card"
                href={localHref("/contact-us")}
              >
                <Image
                  src={item.imagePath}
                  alt={item.imageAlt}
                  width={640}
                  height={760}
                  className="consultation-mode-image"
                />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose container reveal in">
        <SectionHeading
          eyebrow={t.whyEyebrow}
          title={t.whyTitle}
        />
        <article className="why-list-card">
          <ol className="why-bullet-list">
            {whyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="specialty-mini container reveal in">
        <SectionHeading
          eyebrow={t.specialties}
          title={t.specialtyTitle}
        />
        <div className="specialty-mini-grid">
          <article>
            <span className="specialty-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 6.5a3 3 0 1 1 6 0v.7a3.8 3.8 0 0 1 2 3.3 3.5 3.5 0 0 1-1 2.5V14a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1a3.5 3.5 0 0 1-1-2.5 3.8 3.8 0 0 1 2-3.3V6.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17v2.5M10 19.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
              </svg>
            </span>
            <h3>Neuro - Pain Management</h3>
            <p>Sciatica, Neuropathy, Cervical &amp; Lumbar Spondylosis</p>
            <Link href={localHref("/neuro-pain-management-sagar")}>{t.learnMore} &rarr;</Link>
          </article>
          <article>
            <span className="specialty-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3.5c-3 3.3-5 5.5-5 8a5 5 0 0 0 10 0c0-2.5-2-4.7-5-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
                <path d="M8.5 16.5c2.4.8 4.8.8 7 0M14.5 8.5a4.2 4.2 0 0 1 3.8 3.6c1.5-.3 2.8-1.6 3.2-3.8-2.3-.2-4.2-.1-7 .2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h3>Diabetic Reversal Program</h3>
            <p>90-Day structured protocol to reduce medication dependency.</p>
            <Link href={localHref("/diabetic-reversal-program-sagar")}>{t.learnMore} &rarr;</Link>
          </article>
          <article>
            <span className="specialty-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.5 4.5c0 2.4-1.4 3.8-3.3 5.8-1.4 1.5-2.2 3-2.2 4.6a4 4 0 0 0 8 0c0-3.1-2.5-5.4-2.5-10.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 17.5h4M4 14.5h5M3.5 11.5h5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
              </svg>
            </span>
            <h3>Panchakarma Therapy</h3>
            <p>Authentic detox therapies for deep healing.</p>
            <Link href={localHref("/diseases-treated#panchakarma-therapies")}>{t.learnMore} &rarr;</Link>
          </article>
        </div>
      </section>

      <section className="our-treatment container reveal in">
        <p className="eyebrow">{t.ourTreatment}</p>
        <h2>{t.treatmentTitle}</h2>
        <div className="our-treatment-grid">
          {treatmentDepartments.map((item) => (
            <Link key={item.title} className="our-treatment-card" href={localHref(item.href)}>
              <div className="our-treatment-image-wrap">
                <Image
                  src={item.imagePath}
                  alt={`${item.title} icon`}
                  width={200}
                  height={200}
                  className="our-treatment-image"
                />
              </div>
              <h3>{hi ? item.hindi : item.title}</h3>
              <p>{hi ? item.title : item.hindi}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="md-desk container reveal in">
        <SectionHeading eyebrow={t.goldenWords} title={t.healer} />
        <div className="md-grid">
          <div className="md-copy">
            {mdDeskContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Led by {mdDeskContent.doctorName}, MD (Ayurveda), with 20+ years
              of experience in treating chronic neurological and metabolic
              disorders.
            </p>
            <p className="md-quote">
              "Our goal is not just to treat disease, but to restore the
              body&apos;s innate ability to heal itself."
            </p>
            <h3>{mdDeskContent.doctorName}</h3>
          </div>
          <div className="md-photo-wrap">
            <Image
              className="doctor-photo"
              src={mdDeskContent.photoPath}
              alt={`Portrait of ${mdDeskContent.doctorName}`}
              width={620}
              height={740}
              priority
            />
          </div>
        </div>
      </section>

      <section className="container home-video-testimonials reveal in">
        <SectionHeading eyebrow={t.videoEyebrow} title={t.videoTitle} />
        <p className="home-video-lead">{t.videoLead}</p>
        <div className="home-video-grid">
          {videoTestimonials.map((video) => {
            const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);
            if (!embedUrl) return null;

            return (
              <article key={video.youtubeUrl} className="home-video-card">
                <div className="home-video-frame">
                  <iframe
                    src={embedUrl}
                    title={hi ? video.titleHi : video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="home-video-body">
                  <h3>{hi ? video.titleHi : video.title}</h3>
                  <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    {t.watchOnYouTube} &rarr;
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container home-google-reviews reveal in">
        <SectionHeading eyebrow={t.reviewEyebrow} title={t.reviewTitle} />
        <p className="home-reviews-lead">{t.reviewLead}</p>
        <p className="home-reviews-summary">
          {t.reviewSummary}: <strong>{reviewRatingValue}</strong> / 5 ({reviewTotal}+)
        </p>
        <div className="home-reviews-grid">
          {reviewsToShow.map((review, index) => {
            const starCount = Math.max(1, Math.min(5, Math.round(review.rating || 5)));
            return (
            <article key={review.name} className="home-review-card">
              <p className="home-review-stars" aria-label={`${starCount} out of 5 stars`}>
                {"\u2605".repeat(starCount)}
              </p>
              <p className="home-review-text">{review.text}</p>
              <h3>{review.name || `Google User ${index + 1}`}</h3>
              {review.timeAgo ? <p className="home-review-time">{review.timeAgo}</p> : null}
            </article>
            );
          })}
        </div>
        <a
          className="home-reviews-cta"
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.reviewCta} &rarr;
        </a>
      </section>
    </main>
  );
}


