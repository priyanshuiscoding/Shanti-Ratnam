import Image from "next/image";
import Link from "next/link";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Team",
  description:
    "Meet the doctors and care team at Shanti-Ratnam who lead patient-centered healing programs."
};

const coreDoctors = [
  {
    name: "Dr. Saurabh Bharill",
    role: "Managing Director",
    image: "/images/doctors/dr-saurabh-photo.jpeg"
  },
  {
    name: "Dr. M. Senthil Kumar",
    role: "Joint & Spine Specialist",
    detail:
      "KERALIYA AYURVEDA SPECIALIST | More Then 20 Years Of Experience In Pain Management",
    image: "/images/team/Dr%20Senthilkumar.jpeg"
  },
  {
    name: "Dr Sanket Chintewar",
    role: "Naturopathy & Yoga Specialist",
    image: "/images/team/Dr%20Sanket%20Chintewar.jpeg"
  },
  {
    name: "Dr. Riya Bhargav AMO",
    role: "Ayurvedic Medical Officer",
    image: "/images/team/DR%20Riya%20BHargav.jpeg"
  },
  {
    name: "Dr. Prasansa Upadhyay",
    role: "Naturopathy And Yoga Specialist",
    image: "/images/team/Dr%20parsansa%20upadhyay.jpeg"
  }
];

export default function TeamPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const localHref = (path) => withLocalePath(path, locale);
  const t = hi
    ? {
        team: "\u091f\u0940\u092e",
        hero: "\u0938\u093e\u091d\u093e \u0932\u0915\u094d\u0937\u094d\u092f \u0914\u0930 \u0938\u092b\u0932\u0924\u093e \u0915\u0947 \u0932\u093f\u090f \u0938\u092e\u0930\u094d\u092a\u093f\u0924 \u0938\u0939\u092f\u094b\u0917\u0940 \u091f\u0940\u092e\u0964",
        lead:
          "\u0909\u0928 \u090f\u0915\u094d\u0938\u092a\u0930\u094d\u091f\u094d\u0938 \u0914\u0930 \u0938\u092a\u094b\u0930\u094d\u091f \u0938\u094d\u091f\u093e\u092b \u0938\u0947 \u092e\u093f\u0932\u0947\u0902 \u091c\u094b \u0930\u094b\u0917\u0940 \u0930\u093f\u0915\u0935\u0930\u0940 \u0915\u094b \u0915\u0930\u0941\u0923\u093e \u0914\u0930 \u0905\u0928\u0941\u0936\u093e\u0938\u0928 \u0915\u0947 \u0938\u093e\u0925 \u0917\u093e\u0907\u0921 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
        meet: "\u0939\u092e\u093e\u0930\u0940 \u091f\u0940\u092e \u0938\u0947 \u092e\u093f\u0932\u0947\u0902",
        teamwork: "\u091f\u0940\u092e\u0935\u0930\u094d\u0915 \u0939\u0940 \u0938\u092a\u0928\u0947 \u092a\u0942\u0930\u0947 \u0915\u0930\u0924\u093e \u0939\u0948",
        ourTeam: "\u0939\u092e\u093e\u0930\u0940 \u091f\u0940\u092e",
        join: "\u0939\u092e\u0938\u0947 \u091c\u0941\u0921\u093c\u0947\u0902",
        contact: "\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902"
      }
    : {
        team: "Team",
        hero: "Collaborative group striving for shared goals and success.",
        lead:
          "Meet the experts and support staff who guide patient recovery with compassion and discipline.",
        meet: "Meet Our Team",
        teamwork: "Teamwork Makes The Dream Work",
        ourTeam: "Our Team",
        join: "Join Us",
        contact: "Contact Us"
      };

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">{t.team}</p>
        <h1>{t.hero}</h1>
        <p className="lead">{t.lead}</p>
      </section>

      <section className="container team-members-section reveal in">
        <div className="team-head">
          <p className="eyebrow">{t.meet}</p>
          <h2>{t.teamwork}</h2>
        </div>
        <div className="team-grid">
          {coreDoctors.map((doctor) => (
            <article key={doctor.name} className="team-card">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={780}
                height={900}
                className="team-card-image"
              />
              <div className="team-card-body">
                <h3>{doctor.name}</h3>
                <p className="team-role">{doctor.role}</p>
                {doctor.detail ? <p className="team-detail">{doctor.detail}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container team-group-section reveal in">
        <h2>{t.ourTeam}</h2>
        <Image
          src="/images/team/WhatsApp%20Image%202026-02-25%20at%206.16.44%20PM.jpeg"
          alt="Shanti-Ratnam full team group photo"
          width={1600}
          height={980}
          className="team-group-photo"
        />
      </section>

      <section className="container team-contact-section reveal in">
        <div className="team-contact-card">
          <p className="eyebrow">{t.join}</p>
          <h2>{hi ? "सहायता के लिए हमारी टीम से संपर्क करें, हमें आपकी मदद करके खुशी होगी।" : "Contact Our Friendly Team For Assistance, And We'll Be Delighted To Help You!"}</h2>
          <p>{hi ? "हमारे उन्नत उपचारों के साथ नई आशा और बेहतर स्वास्थ्य की दिशा में अपनी यात्रा शुरू करें।" : "Discover renewed hope and healing with our advanced treatments. Embrace a journey of wellness, and let us guide you to better health. Join us today!"}</p>
          <Link href={localHref("/contact-us")}>{t.contact}</Link>
        </div>
      </section>
    </main>
  );
}

