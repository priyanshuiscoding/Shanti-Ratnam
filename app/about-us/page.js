import Image from "next/image";
import Link from "next/link";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "About Us",
  description:
    "Know more about Shanti-Ratnam, our clinical approach, and our experience in Ayurvedic wellness care.",
  alternates: {
    canonical: "/about-us"
  }
};

const ABOUT_CAMPUS_IMAGE_PATH = "/images/about/about us image.jpeg";
const ABOUT_LEGEND_IMAGE_PATH = "/images/about/Dr. Ratan Chand Jain.png";
const ABOUT_TORCHBEARER_IMAGE_PATH = "/images/facilities/doctor patient picture.jpeg";

const aboutParagraph = `Sarve Bhavantu Sukhinah. Sarve Santu Niraamayaah.
May all beings be happy. May all be free from illness. May all witness that which is auspicious.

Shanti Ratnam is not merely the name of a hospital. It is a resolve, an experience, and a philosophy of life. Every individual who connects with Shanti Ratnam, whether as a patient, a family member, a physician, or a caregiver, experiences the energy of positivity, wholesome living, and universal prosperity.

We believe that health is not only a condition of the body. It is the serenity of the soul, the joy of the mind, and a celebration of life. That is why, at Shanti Ratnam, we do not merely treat, we transform.

Positivity is the first principle of our healing. The environment, the language, and the conduct of our team together awaken confidence, calm, and recovery.

Ancient wisdom and modern science are integrated here to create a comprehensive and transformative healing path rooted in Ayurveda, Panchakarma, Yoga, Meditation, Diet Therapy, and Naturopathy.

Shanti Ratnam is not an institution of walls and instruments alone. It is a living consciousness committed to spreading health, peace, and prosperity.`;

const aboutParagraphHi = `सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।
सभी सुखी हों। सभी रोगमुक्त हों। सभी कल्याण को देखें।

शांति-रत्नम् केवल एक अस्पताल का नाम नहीं है। यह एक संकल्प, एक अनुभव और एक जीवनदर्शन है। जो भी व्यक्ति — रोगी, परिजन, चिकित्सक या सेवक — शांति-रत्नम् से जुड़ता है, वह केवल उपचार नहीं पाता, बल्कि सकारात्मकता, स्वस्थ जीवन और समृद्धि की विशेष ऊर्जा का अनुभव करता है।

हमारा विश्वास है कि स्वास्थ्य केवल शरीर की अवस्था नहीं है; यह आत्मा की शांति, मन की प्रसन्नता और जीवन का उत्सव है। इसलिए शांति-रत्नम् में हम केवल चिकित्सा नहीं करते — हम रूपांतरण करते हैं।

सकारात्मकता हमारी चिकित्सा का पहला सूत्र है। यहाँ का वातावरण, वाणी और व्यवहार रोगी के भीतर नई ऊर्जा जगाते हैं।

शांति-रत्नम् में आयुर्वेद, पंचकर्म, योग, ध्यान, आहार-चिकित्सा और प्राकृतिक चिकित्सा का समन्वय कर प्राचीन ज्ञान तथा आधुनिक विज्ञान के आधार पर समग्र और परिणामकारी उपचार प्रदान किया जाता है।

शांति-रत्नम् केवल दीवारों और उपकरणों का संस्थान नहीं है; यह एक जीवंत चेतना है, जो स्वास्थ्य, शांति और समृद्धि फैलाने के लिए समर्पित है।`;

const facilities = [
  {
    title: "Panchkarma Studio",
    image: "/images/facilities/PANCHKARMA THERAPY.png",
    alt: "Panchkarma therapy room"
  },
  {
    title: "Yoga Studio",
    image: "/images/facilities/yoga-studio.jpg",
    alt: "Yoga studio"
  },
  { title: "Pharmacy" },
  { title: "Chiropractic Therapy" },
  { title: "Colon-hydro Therapy" },
  { title: "Vichy Shower" },
  {
    title: "Diet Center",
    image: "/images/facilities/Diet Center SR-AIIMS.jpg",
    alt: "Diet center"
  },
  { title: "Recreational Hall" },
  {
    title: "Physical Therapy",
    image: "/images/facilities/doctor patient picture.jpeg",
    alt: "Physical therapy consultation"
  },
  { title: "Psychological Counseling" }
];

const valueCards = [
  {
    title: "We Work For",
    body:
      "We do not suppress disease; we work to eradicate its roots through a disciplined, integrative, and patient-centered healing approach."
  },
  {
    title: "Vision",
    body:
      "To build a society where every individual, irrespective of background, can live a healthy, joyful, and abundant life through the convergence of Ayurveda, Naturopathy, and modern science.",
    featured: true
  },
  {
    title: "Mission",
    body:
      "To provide every patient not merely relief, but complete life transformation by awakening body, mind, and soul through authentic AYUSH healing systems."
  }
];

const testimonials = [
  {
    name: "Sushma Singhai",
    text:
      "I had frozen shoulder and back pain for the last 15 years, I got Ayurveda panchakarma therapies as prescribed by Dr. Saurabh Bharill and Acupuncture treatment by Dr. Purushothaman here. To my surprise, in 15 days I got 100 % relief."
  },
  {
    name: "Muni Rathinam",
    text:
      "It is a very good place managed by well-qualified and experienced Dr. Saurabh Bharill. He can read our pulse diagnose the underlying cause of the disease and treat it from the root. So we can feel the result within a few sessions."
  },
  {
    name: "Mahima Dwivedi",
    text:
      "Its a must visit place, I had such a wonderful experience in the yoga classes offered by the hospital. The infrastructure and service provided here gives a soothing and relaxing feel for physical as well as mental health."
  },
  {
    name: "Vaidehi Sharma",
    text:
      "The sessions of yoga are awesome. The best yoga class you could join and that's worth your time and money."
  }
];

export default function AboutUsPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";
  const localHref = (path) => withLocalePath(path, locale);
  const t = hi
    ? {
        about: "\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902",
        hero: "शांति- रत्नम - सम्पूर्ण स्वास्थ्य की शुरुआत",
        storyTitle: "\u0936\u093e\u0902\u0924\u093f-\u0930\u0924\u094d\u0928\u092e: \u0938\u094d\u0935\u0938\u094d\u0925 \u091c\u0940\u0935\u0928 \u0915\u093e \u0926\u094d\u0935\u093e\u0930",
        book: "\u0905\u092a\u0949\u0907\u0902\u091f\u092e\u0947\u0902\u091f \u092c\u0941\u0915 \u0915\u0930\u0947\u0902",
        timing: "\u0938\u092e\u092f",
        service: "\u0939\u092e\u0947\u0936\u093e \u0906\u092a\u0915\u0940 \u0938\u0947\u0935\u093e \u092e\u0947\u0902",
        testimonials: "\u091f\u0947\u0938\u094d\u091f\u093f\u092e\u094b\u0928\u093f\u092f\u0932",
        patientsSay: "\u0930\u094b\u0917\u0940 \u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0915\u094d\u092f\u093e \u0915\u0939\u0924\u0947 \u0939\u0948\u0902",
        newsletter: "\u0928\u094d\u092f\u0942\u091c\u0932\u0947\u091f\u0930",
        newsletterText:
          "\u0905\u0926\u094d\u092f\u0924\u0928 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u092a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0928\u094d\u092f\u0942\u091c\u0932\u0947\u091f\u0930 \u091c\u0949\u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
        send: "\u092d\u0947\u091c\u0947\u0902",
        emailPlaceholder: "\u0905\u092a\u0928\u093e \u0908\u092e\u0947\u0932 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902",
        campus: "\u0939\u092e\u093e\u0930\u093e \u0915\u0948\u0902\u092a\u0938",
        campusSub:
          "shanti-ratnam ayush institute of indian medicinal sciences",
        timingNote: "एसआर-एआईआईएमएस आएं और हमारी सेवाओं का अनुभव करें।",
        opd: "ओपीडी",
        monSat: "सोम-शनि",
        sunday: "रविवार और राष्ट्रीय अवकाश समय",
        ipd: "आईपीडी",
        contactTitle: "अपॉइंटमेंट बुक करें",
        contactBody: "व्यक्तिगत देखभाल के लिए अभी अपना अपॉइंटमेंट सुरक्षित करें और स्वास्थ्य यात्रा शुरू करें।",
        callNow: "अभी कॉल करें",
        callBody: "हमारी टीम से सीधे जुड़ें, हम आपको सही अपॉइंटमेंट तक मार्गदर्शन देंगे।",
        chat: "हमसे चैट करें",
        chatBody: "अपने प्रश्नों के लिए व्हाट्सएप पर हमसे सुविधाजनक रूप से जुड़ें।"
      }
    : {
        about: "About Us",
        hero: "81 Years of Legacy Trusted By Millions Validated By You",
        storyTitle: "Shanti-Ratnam: Gateway To Perfect Health",
        book: "Book An Appointment",
        timing: "Timing",
        service: "At Your Service",
        testimonials: "Testimonial",
        patientsSay: "What Our Patients Say About Us",
        newsletter: "Newsletter",
        newsletterText: "Sign up for our newsletter to get updated information.",
        send: "Send",
        emailPlaceholder: "Enter Your Mail",
        campus: "Our Campus",
        campusSub: "shanti-ratnam ayush institute of indian medicinal sciences"
      };

  return (
    <main>
      <section className="container about-hero-banner reveal in">
        <p className="mini-kicker">{t.about}</p>
        <h1>{t.hero}</h1>
        <p className="lead">
          Shanti-Ratnam AYUSH Institute of Indian Medicinal Sciences, Sagar.
        </p>
      </section>

      <section className="container about-story-section reveal in">
        <div className="about-story-grid">
          <div className="about-media-stack">
            <article className="about-campus-card">
              <div className="about-campus-photo">
                <Image
                  src={ABOUT_CAMPUS_IMAGE_PATH}
                  alt="Shanti-Ratnam hospital building"
                  width={426}
                  height={542}
                  className="about-campus-photo-img"
                />
              </div>
              <div className="about-campus-copy">
                <h3>{t.campus}</h3>
                <p>{t.campusSub}</p>
              </div>
            </article>

          </div>

          <div className="about-story-copy">
            <p className="mini-kicker">{t.about}</p>
            <h2>{t.storyTitle}</h2>
            <p className="about-story-long">{hi ? aboutParagraphHi : aboutParagraph}</p>
            <div className="about-inline-cta">
              <Link href={localHref("/contact-us")}>{t.book}</Link>
            </div>
            <ul className="about-facility-list">
              {facilities.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container about-values-section reveal in">
        <div className="about-values-grid">
          {valueCards.map((item) => (
            <article
              key={item.title}
              className={`about-value-card${item.featured ? " featured" : ""}`}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-legacy-section reveal in">
        <div className="about-legacy-head">
          <p className="mini-kicker">{hi ? "एक अमर विरासत" : "A Living Legacy"}</p>
          <h2>{hi ? "वैद्यराज डॉ. रतन चन्द जैन" : "Dr. Ratan Chand Jain"}</h2>
          <p className="legacy-subtitle">
            {hi ? "आयुर्वेदाचार्य | शाहपुर सागर, मध्य प्रदेश" : "Vaidyaraj | Ayurvedacharya | Shahpur Sagar, Madhya Pradesh"}
          </p>
        </div>

        <div className="about-legacy-compact">
          <div className="legacy-founder-compact">
            <div className="legacy-timeline">
              <div className="legacy-date">
                <span className="date-label">{hi ? "जन्म" : "Born"}</span>
                <span className="date-value">05 Oct 1931</span>
              </div>
              <div className="legacy-date">
                <span className="date-label">{hi ? "ब्रह्मलीन" : "Attained Moksha"}</span>
                <span className="date-value">19 Apr 2019</span>
              </div>
              <div className="legacy-date highlight">
                <span className="date-label">{hi ? "सेवा" : "Service"}</span>
                <span className="date-value">67 Years</span>
              </div>
            </div>
            <div className="legacy-summary">
              <h4>{hi ? "महान विभूति का परिचय" : "About the Legend"}</h4>
              <div className="legacy-summary-layout">
                <div className="legacy-portrait">
                  <Image
                    src={ABOUT_LEGEND_IMAGE_PATH}
                    alt="Dr. Ratan Chand Jain portrait"
                    width={420}
                    height={520}
                    className="legacy-portrait-img"
                  />
                </div>
                <div className="legacy-summary-copy">
                  <p>
                    {hi 
                      ? "डॉ. रतन चन्द जैन मध्य प्रदेश के सागर क्षेत्र के अत्यंत प्रतिष्ठित आयुर्वेदाचार्यों में से एक थे। 5 अक्टूबर 1931 को शाहपुर सागर में जन्म लेकर उन्होंने अपना पूरा जीवन आयुर्वेद और जनसेवा को समर्पित किया। सागर संभाग के लोगों की सेवा में उन्होंने 67 वर्षों तक निरंतर कार्य किया।"
                      : "Dr. Ratan Chand Jain was one of the most revered Ayurvedacharyas of the Sagar region in Madhya Pradesh. Born on 5th October 1931 in Shahpur Sagar, he dedicated his entire life to the ancient science of Ayurveda, serving the people of central India with unwavering devotion, compassion, and exceptional medical wisdom as goverment ayurvedic medical officer (from 1962-1962)."
                    }
                  </p>
                  <p>
                    {hi 
                      ? "उन्होंने हर मरीज की समान भावना से सेवा की, चाहे वह ग्रामीण किसान हो या शहर का शिक्षित परिवार। आयुर्वेद शास्त्र का गहरा ज्ञान, प्रकृति-परीक्षण की कुशलता और जड़ी-बूटियों के विवेकपूर्ण प्रयोग ने उन्हें अद्वितीय वैद्यराज बनाया, जिनसे असंख्य रोगी लाभान्वित हुए।"
                      : "For an extraordinary span of 67 years, Dr. Ratan Chand Jain served as a guiding light for thousands of patients across the region. Whether it was the common folk from rural areas or families from the city, he treated each patient with equal care, ensuring that the blessings of Ayurvedic healing reached every doorstep."
                    }
                  </p>
                  <blockquote className="legacy-quote-compact">
                    {hi ? "वे केवल शरीर नहीं, समाज को भी स्वस्थ करते थे।" : "He did not just heal bodies — he healed communities."}
                    <span className="legacy-quote-sub">
                      {hi ? "उनकी चिकित्सा थी ज्ञान, करुणा और विश्वास का संगम।" : "His medicine was equal parts knowledge, kindness, and faith."}
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="legacy-continuation-compact">
            <h3>{hi ? "विरासत की निरंतरता" : "Healing since 81 years"}</h3>
            <p className="legacy-continuation-intro">
              {hi 
                ? "डॉ. रतन चन्द जैन द्वारा प्रज्ज्वलित ज्ञान की ज्योति आज भी उज्ज्वल है। उनकी इस अमर विरासत को उनके पुत्रों और पौत्र ने आगे बढ़ाया, ताकि शाहपुर सागर और पूरे क्षेत्र के लोगों को भारतीय चिकित्सा परंपरा के आधार पर समर्पित स्वास्थ्य सेवा मिलती रहे।"
                : "The lamp lit by Dr. Ratan Chand Jain has never gone dark. His legacy lives on through his sons and grandson, each of whom took forward the torch of healing — ensuring that the people of Shahpur Sagar and central India continue to receive dedicated, compassionate medical care rooted in the Indian healing tradition."
              }
            </p>
            
            <div className="legacy-torchbearers-compact">
              <div className="torchbearer-compact is-brief">
                <div className="torchbearer-thumb">
                  <Image
                    src={ABOUT_TORCHBEARER_IMAGE_PATH}
                    alt="Doctor consultation at Shanti-Ratnam"
                    width={560}
                    height={360}
                    className="torchbearer-thumb-img"
                  />
                </div>
                <div className="torchbearer-info">
                  <h4>{hi ? "प्रथम मशालवाहक" : "First Torch Bearer"}</h4>
                  <h5>Dr. Sanjeev Kumar Jain</h5>
                  <span className="torchbearer-role">
                    {hi ? "होम्योपैथिक चिकित्सक | डॉ. रतन चन्द जैन के कनिष्ठ पुत्र" : "Homeopathic Practitioner | Younger Son of Dr. Ratan Chand Jain"}
                  </span>
                  <span className="torchbearer-place">
                    {hi ? "शान्तिनिकेतन अस्पताल, शाहपुर सागर" : "Shantiniketan Hospital, Shahpur Sagar"}
                  </span>
                </div>
                <p>
                  {hi 
                    ? "पिता की महान परंपरा में पले-बढ़े डॉ. संजीव कुमार जैन ने बचपन से ही सेवा, विनम्रता और करुणा के संस्कार ग्रहण किए। डॉ. रतन चन्द जैन के कनिष्ठ पुत्र के रूप में उन्होंने परिवार की चिकित्सा परंपरा को आगे बढ़ाया और होम्योपैथी के माध्यम से अधिक से अधिक रोगियों तक उपचार पहुंचाया।"
                    : "Growing up in the shadow of a legendary father, Dr. Sanjeev Kumar Jain imbibed the values of service, humility, and healing from a very young age. As the younger son of Vaidyaraj Dr. Ratan Chand Jain, he was among the first to carry forward the family's sacred mission of healthcare — choosing the path of Homeopathy to extend the reach of the healing legacy to a wider spectrum of patients."
                  }
                </p>
                <p>
                  {hi 
                    ? "शान्तिनिकेतन अस्पताल, शाहपुर सागर में सेवाएं देते हुए डॉ. संजीव कुमार जैन ने एक विश्वसनीय और समर्पित होम्योपैथिक चिकित्सक के रूप में अपनी पहचान बनाई। उनके रोगी-केंद्रित दृष्टिकोण, सूक्ष्म निदान और प्रभावी उपचार ने क्षेत्र के अनेक परिवारों को स्वास्थ्य लाभ दिलाया है।"
                    : "Practicing at Shantiniketan Hospital in Shahpur Sagar, Dr. Sanjeev Kumar Jain has built a trusted reputation as a dedicated Homeopathic practitioner, known for his patient-centric approach, careful case analysis, and commitment to gentle yet effective healing. His clinic has become a familiar refuge for families in Shahpur Sagar who seek holistic, side-effect-free treatment for both acute and chronic conditions."
                  }
                </p>
              </div>

              <div className="torchbearer-compact featured">
                <div className="torchbearer-info">
                  <h4>{hi ? "विरासत की निरंतरता अगली पीढ़ी" : "Legacy Continues Next Generation"}</h4>
                  <h5>Shantiratnam Ayush Institute of Indian Medicinal Sciences</h5>
                  <span className="torchbearer-role">
                    {hi ? "भारतीय चिकित्सा विज्ञान संस्थान | सागर, मध्य प्रदेश | स्थापना: 2004" : "Sagar, Madhya Pradesh | Established: 2004"}
                  </span>
                </div>
                <p>
                  {hi 
                    ? "डॉ. रतन चन्द जैन के पौत्र डॉ. सौरभ भरिल्ल के गतिशील नेतृत्व में शान्तिरत्नम् आयुष संस्थान सागर क्षेत्र में आयुर्वेद और अन्य आयुष विधाओं का प्रमुख केंद्र बन चुका है। वर्ष 2004 से अब तक संस्थान 10,000 से अधिक संतुष्ट रोगियों को सेवाएं प्रदान कर चुका है।"
                    : "Under the dynamic leadership of Dr. Saurabh Bharill, grandson of Dr. Ratan Chand Jain, Shantiratnam Ayush Institute has emerged as a premier center for Ayurveda and other AYUSH disciplines in central India. Since its establishment in 2004 as Shanti ratnam ayurvedic Chitiksalay, the Institute has successfully served more than 10,000 satisfied patients from across central India."
                  }
                </p>
                <p>
                  {hi 
                    ? "यह संस्थान आयुर्वेद, योग और जीवनशैली-आधारित समग्र उपचार प्रदान करता है। डॉ. सौरभ भरिल्ल का आयुष क्षेत्र में कार्य न केवल अपने पूर्वजों की विरासत का सम्मान है, बल्कि मध्य भारत में समग्र स्वास्थ्य सेवाओं के स्तर को ऊंचा उठाने का सतत प्रयास भी है।"
                    : "The Institute offers comprehensive care in Ayurveda, Yoga, and lifestyle disease management — working tirelessly to make traditional Indian medical wisdom accessible to all. Dr. Saurabh Bharill's dynamic work in the AYUSH sector has not only honored the memory of his grandfather but has also elevated the standard of holistic healthcare in central India."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container about-timing-section reveal in">
        <div className="about-timing-grid">
          <div className="timing-left">
            <p className="mini-kicker">{t.timing}</p>
            <h2>{t.service}</h2>
            <p className="timing-note">{hi ? t.timingNote : "Visit SR-AIIMS and explore our services."}</p>

            <article className="timing-opd-card">
              <div className="timing-opd-title">{hi ? t.opd : "OPD"}</div>
              <div className="timing-opd-body">
                <h4>{hi ? t.monSat : "Mon-Sat"}</h4>
                <p>9:00 am-1:30 pm</p>
                <p>3:30 pm-7:30 pm</p>
                <h4>{hi ? t.sunday : "Sunday & National Holidays Time"}</h4>
                <p>9:00 am to 12:30 pm</p>
              </div>
            </article>

            <div className="timing-bottom-cards">
              <article>{hi ? t.ipd : "IPD"}</article>
              <article>24*7</article>
            </div>
          </div>

          <div className="timing-right">
            <article className="contact-strip">
              <h3>{hi ? t.contactTitle : "Book an appointments"}</h3>
              <p>{hi ? t.contactBody : "Secure your appointment now for personalized care and embark on your path to wellness."}</p>
            </article>
            <article className="contact-strip highlight">
              <h3>{hi ? t.callNow : "Call Now"}</h3>
              <p>{hi ? t.callBody : "Connect directly with our team so that they can lead you to the appointment."}</p>
            </article>
            <article className="contact-strip">
              <h3>{hi ? t.chat : "Chat With Us"}</h3>
              <p>{hi ? t.chatBody : "Feel free to connect with us over WhatsApp so we can answer your questions comfortably."}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="container about-testimonials-section reveal in">
        <div className="about-testimonials-head">
          <p className="mini-kicker">{t.testimonials}</p>
          <h2>{t.patientsSay}</h2>
          <p>
            {hi
              ? "रोगियों के अनुभव और सफलता की कहानियां हमारी उपचार प्रणाली की प्रभावशीलता और देखभाल को दर्शाती हैं।"
              : "Patients express their heartfelt gratitude and success stories through testimonials, showcasing the effectiveness of our treatments and care."}
          </p>
        </div>

        <div className="about-testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="about-testimonial-card">
              <p>{item.text}</p>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-newsletter-section reveal in">
        <div className="about-newsletter-card">
          <div>
            <h2>{t.newsletter}</h2>
            <p>{t.newsletterText}</p>
          </div>
          <form className="about-newsletter-form" action="#" method="post">
            <input type="email" placeholder={t.emailPlaceholder} aria-label="Enter your email" />
            <button type="submit">{t.send}</button>
          </form>
        </div>
      </section>
    </main>
  );
}


