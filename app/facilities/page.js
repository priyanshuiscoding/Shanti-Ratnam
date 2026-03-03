import Image from "next/image";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Facilities",
  description:
    "Explore Shanti-Ratnam facilities including OPD, IPD, therapies, wellness spaces, and patient support services.",
  alternates: {
    canonical: "/facilities"
  }
};

const facilities = [
  {
    title: "OPD For Ayurveda And Naturopathy",
    image: "/images/facilities/opd.png",
    alt: "Doctor consultation in OPD",
    body:
      "We provide timely medical care, expert consultations, and precise diagnostics—all without the need for an overnight stay. Our facility ensures convenient access to specialized healthcare, catering to a wide range of medical needs efficiently and effectively."
  },
  {
    title: "Male And Female Separate IPD's",
    image: "/images/facilities/doctor patient picture.jpeg",
    alt: "Male and female separate IPD ward",
    body:
      "Our Male and Female Wards each feature 27 beds, central air cooling, and essential medical equipment to ensure patient comfort and well-being. The Male Ward is equipped with advanced medical devices and 24/7 nursing care for holistic health support, while the Female Ward includes a pulse oximeter, glucometer, and a dedicated nursing team providing comprehensive care."
  },
  {
    title: "Special Deluxe Rooms",
    image: "/images/facilities/delux room.jpeg",
    alt: "Special deluxe patient room",
    body:
      "Our Special Deluxe rooms offer 24/7 services designed for maximum comfort, featuring attached bath, closet, nurse call system, locker, and TV. Each room is equipped with a sofa, chair, and writing desk, ensuring a relaxing and convenient stay."
  },
  {
    title: "Panchkarma Therapy",
    image: "/images/facilities/PANCHKARMA THERAPY.png",
    alt: "Panchkarma therapy session",
    body:
      "We offer authentic Panchkarma therapy, a holistic detoxification process rooted in Ayurveda. This rejuvenating treatment includes Vamana (therapeutic emesis), Virechana (purgation), Basti (medicated enema), Nasya (nasal administration of medicated oils), and Raktamokshana (bloodletting) to eliminate toxins, balance Doshas, and revitalize the body. Our expert team customizes treatments to promote deep healing, enhance immunity, and restore overall well-being."
  },
  {
    title: "Naturopathy Treatments",
    image: "/images/facilities/doctor patient picture.jpeg",
    alt: "Naturopathy treatment support",
    body:
      "Our Naturopathy treatments emphasize natural healing through diet, hydrotherapy, colon hydrotherapy, mud therapy, yoga, and lifestyle modifications. By harnessing the body's innate self-healing ability, we help manage chronic diseases, promote detoxification, and restore balance. Guided by experts, our therapies support holistic wellness, rejuvenation, and long-term health, ensuring a natural and sustainable approach to well-being."
  },
  {
    title: "Detoxification Therapy",
    image: "/images/facilities/Detoxification Therapy.png",
    alt: "Detoxification therapy",
    body:
      "Our Detoxification Therapy integrates Ayurveda, Naturopathy, and Yoga to eliminate toxins, boost metabolism, and restore vitality. Through Panchakarma, fasting, herbal remedies, hydrotherapy, and personalized diet plans, we facilitate deep cellular cleansing, enhance immunity, and support complete wellness naturally."
  },
  {
    title: "Yoga Studio",
    image: "/images/facilities/yoga-studio.jpg",
    alt: "Yoga studio session",
    body:
      "Our tranquil yoga studio is thoughtfully designed to foster harmony and well-being. It features cross-ventilation, ample natural sunlight, a wooden floor with mats, and a mirrored wall for an immersive practice experience. A serene ambience, soft indoor lighting, and free WiFi further enhance relaxation and focus."
  },
  {
    title: "Meditation Therapy",
    image: "/images/facilities/meditation thearepy.jpg",
    alt: "Meditation therapy session",
    body:
      "Meditation Therapy promotes mental clarity, stress relief, and holistic healing through expert-guided practices. We offer mindfulness, breathwork, and deep relaxation techniques to enhance emotional balance, sharpen focus, and cultivate inner peace. With regular practice, meditation supports overall well-being, resilience, and spiritual growth."
  },
  {
    title: "Physical Therapy",
    image: "/images/facilities/doctor patient picture.jpeg",
    alt: "Physical therapy care",
    body:
      "We combine Ayurveda and modern rehabilitation techniques to restore mobility, relieve discomfort, and strengthen the body. Through therapeutic exercise, manual therapy, hydrotherapy, and yoga-based routines, we support recovery from injuries, improve posture, and enhance overall physical well-being."
  },
  {
    title: "Diet Center",
    image: "/images/facilities/Diet Center SR-AIIMS.jpg",
    alt: "Diet center hall",
    body:
      "Our Diet Room caters to both inpatients and outpatients, offering doctor-prescribed therapeutic diets in a comfortable setting. Designed with natural light and cozy seating, it provides an ideal space for nourishment, healing, and overall well-being."
  },
  {
    title: "Pharmacy",
    image: "/images/facilities/doctor patient picture.jpeg",
    alt: "In-house pharmacy",
    body:
      "Our pharmacy ensures continuous nursing care, vital sign monitoring, and proper medication management, providing essential health support for optimal patient well-being."
  },
  {
    title: "Recreation Center",
    image: "/images/facilities/meditation thearepy.jpg",
    alt: "Recreation center room",
    body:
      "Our dedicated relaxation and leisure space offers a refreshing break for patients and visitors. Equipped with carrom, chess, table tennis, and other indoor games, it provides an engaging environment to unwind. These activities help reduce stress, enhance mental focus, and promote overall well-being."
  }
];

export default function FacilitiesPage() {
  const hi = getServerLocale() === "hi";
  const t = hi
    ? {
        title: "\u0938\u0941\u0935\u093f\u0927\u093e\u090f\u0902",
        hero: "\u0909\u0928\u094d\u0928\u0924 \u0926\u0947\u0916\u092d\u093e\u0932 \u0914\u0930 \u0938\u0939\u093e\u0928\u0941\u092d\u0942\u0924\u093f \u0915\u0947 \u0938\u093e\u0925 \u0935\u0947\u0932\u0928\u0947\u0938 \u0915\u094b \u0928\u0908 \u090a\u0901\u091a\u093e\u0908\u0964",
        lead:
          "\u0936\u093e\u0902\u0924\u093f-\u0930\u0924\u094d\u0928\u092e, \u0938\u093e\u0917\u0930 \u092e\u0947\u0902 \u092e\u0947\u0921\u093f\u0915\u0932, \u0925\u0947\u0930\u0947\u092a\u0940 \u0914\u0930 \u0930\u094b\u0917\u0940 \u0938\u0939\u093e\u092f\u0924\u093e \u0938\u0941\u0935\u093f\u0927\u093e\u0913\u0902 \u0915\u093e \u0938\u0902\u0915\u094d\u0937\u093f\u092a\u094d\u0924 \u0905\u0935\u0932\u094b\u0915\u0928\u0964"
      }
    : {
        title: "Facilities",
        hero: "Elevating wellness through advanced care and compassion.",
        lead:
          "A focused overview of core medical, therapy, and patient-support facilities at Shanti-Ratnam, Sagar."
      };

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">{t.title}</p>
        <h1>{t.hero}</h1>
        <p className="lead">{t.lead}</p>
      </section>

      <section className="container facilities-grid-wrap reveal in">
        <div className="facilities-grid">
          {facilities.map((item) => (
            <article key={item.title} className="facility-card">
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={760}
                className="facility-image"
              />
              <div className="facility-body">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

