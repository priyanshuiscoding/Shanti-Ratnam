import Image from "next/image";
import Link from "next/link";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "About Us",
  description:
    "Know more about Shanti-Ratnam, our clinical approach, and our experience in Ayurvedic wellness care."
};

// Paste your final YouTube embed link here.
// Example format: https://www.youtube.com/embed/VIDEO_ID
const ABOUT_YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/zsqCXAn2A1c";
const ABOUT_CAMPUS_IMAGE_PATH = "/images/about/hospital-campus.webp";

const aboutParagraph = `Start on a Wellness Journey with Shanti Ratnam AYUSH Institute.
For nearly two decades, the Shanti Ratnam AYUSH Institute of Indian Medicinal Sciences has
been immersed in the time-honored traditions of Indian healthcare. Our evolution into a
beacon of research and innovation is driven by an unwavering commitment to elevating healthcare.
At our core, we believe in the profound connection between humans and nature - an interplay that
embodies the true essence of health. Guided by this simple yet profound vision, we strive for
comprehensive health by returning to the fundamental nature of well-being.
In today's whirlwind of life, the surge in lifestyle disorders is a formidable challenge.
Despite the dazzling array of technology and sophisticated treatments, these health issues persist,
leaving us in search of solutions. This is where Shanti Ratnam sets itself apart.
We are not just an AYUSH institute; we are a source of integrated solutions.
From everyday concerns like sleep disturbances to complex adversaries like cancer, we stand ready.
Our expertise encompasses diabetes, hypertension, joint ailments, migraines, prostate health,
liver and kidney wellness, and psychological balance. Our mission is a beacon of clarity:
to share health with happiness.`;

const aboutParagraphHi = `शांति रत्नम आयुष इंस्टीट्यूट के साथ एक सार्थक स्वास्थ्य यात्रा शुरू करें।
लगभग दो दशकों से शांति रत्नम आयुष इंस्टीट्यूट ऑफ इंडियन मेडिसिनल साइंसेज भारतीय चिकित्सा परंपराओं पर गहराई से कार्यरत है।
अनुसंधान और नवाचार की दिशा में हमारा विकास बेहतर स्वास्थ्य सेवाएं देने की प्रतिबद्धता से प्रेरित है।
हम मानते हैं कि प्रकृति और मनुष्य के बीच संतुलन ही वास्तविक स्वास्थ्य का आधार है।
आज की जीवनशैली में बढ़ती बीमारियों के बीच हम आयुर्वेद, प्राकृतिक चिकित्सा और समग्र उपचार के माध्यम से व्यावहारिक समाधान प्रदान करते हैं।
नींद की समस्या से लेकर जटिल रोग स्थितियों तक, हमारा उद्देश्य स्पष्ट है:
स्वास्थ्य को खुशी के साथ जोड़ना।`;

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
      "Establishing a standard in Indian Traditional medicinal sciences by using innovative approaches encompassing healing, prevention and promotion."
  },
  {
    title: "Vision",
    body:
      "Contemporary intensive research to explore the wisdom of ancient Indian medicinal science to heal mankind with evidence.",
    featured: true
  },
  {
    title: "Mission",
    body: "Propagation and practice of AYUSH systems of healing."
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
        hero: "\u0932\u093e\u0916\u094b\u0902 \u0915\u093e \u0935\u093f\u0936\u094d\u0935\u093e\u0938, \u0906\u092a\u0915\u0940 \u092e\u0902\u091c\u0942\u0930\u0940\u0964",
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
          "\u0936\u093e\u0902\u0924\u093f-\u0930\u0924\u094d\u0928\u092e \u0935\u0947\u0932\u0928\u0947\u0938 \u0938\u0947\u0902\u091f\u0930, \u0938\u093e\u0917\u0930",
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
        hero: "81 Years of Legacy : Trusted By Millions, Validated By You.",
        storyTitle: "Shanti-Ratnam: Gateway To Healthy Life",
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
        campusSub: "Shanti-Ratnam Wellness Centre, Sagar"
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

            <div className="about-video-wrap">
              <iframe
                title="About Shanti-Ratnam"
                src={ABOUT_YOUTUBE_EMBED_URL}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <p className="video-hint">
                Add final video link in{" "}
                <code>app/about-us/page.js</code> at{" "}
                <code>ABOUT_YOUTUBE_EMBED_URL</code>
              </p>
            </div>
          </div>

          <div className="about-story-copy">
            <p className="mini-kicker">{t.about}</p>
            <h2>{t.storyTitle}</h2>
            <p>{hi ? aboutParagraphHi : aboutParagraph}</p>
            <div className="about-inline-cta">
              <Link href={localHref("/contact-us")}>{t.book}</Link>
            </div>
            <ul className="about-facility-list">
              {facilities.map((item) => (
                <li key={item.title} className={item.image ? "has-image" : ""}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.alt || item.title}
                      width={52}
                      height={52}
                      className="about-facility-thumb"
                    />
                  ) : null}
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
              <p>
                {hi 
                  ? "डॉ. रतन चन्द जैन मध्य प्रदेश के सागर जिले के सबसे प्रतिष्ठित आयुर्वेदाचार्यों में से एक थे। 5 अक्टूबर 1931 को शाहपुर सागर में जन्मे, उन्होंने अपना सम्पूर्ण जीवन आयुर्वेद की प्राचीन विज्ञान को समर्पित कर दिया। सागर संभाग के लोगों की सेवा में उन्होंने 67 वर्षों तक अनवरत श्रम किया।"
                  : "Dr. Ratan Chand Jain was one of the most revered Ayurvedacharyas of the Sagar region in Madhya Pradesh. Born on 5th October 1931 in Shahpur Sagar, he dedicated his entire life to the ancient science of Ayurveda, serving the people of central India with unwavering devotion, compassion, and exceptional medical wisdom as goverment ayurvedic medical officer (from 1962-1962)."
                }
              </p>
              <p>
                {hi 
                  ? "उन्होंने प्रत्येक रोगी की सेवा समान भाव से की — चाहे वह गांव का साधारण किसान हो या शहर का विद्वान। आयुर्वेदिक शास्त्रों का उनका गहन ज्ञान, प्रकृति-परीक्षण की कुशलता, और जड़ी-बूटियों के प्रयोग ने उन्हें एक अद्वितीय वैद्यराज बनाया जिनके उपचार से असंख्य रोगी लाभान्वित हुए।"
                  : "For an extraordinary span of 67 years, Dr. Ratan Chand Jain served as a guiding light for thousands of patients across the region. Whether it was the common folk from rural areas or families from the city, he treated each patient with equal care, ensuring that the blessings of Ayurvedic healing reached every doorstep."
                }
              </p>
              <blockquote className="legacy-quote-compact">
                "{hi ? "वे केवल रोगों को नहीं, आत्माओं को भी स्वस्थ करते थे।" : "He did not just heal bodies — he healed communities."}"
                <span className="legacy-quote-sub">
                  {hi ? "उनकी दवा थी — ज्ञान, करुणा और विश्वास का संगम।" : "His medicine was equal parts knowledge, kindness, and faith."}
                </span>
              </blockquote>
            </div>
          </div>

          <div className="legacy-continuation-compact">
            <h3>{hi ? "विरासत की निरन्तरता" : "Healing since 81 years"}</h3>
            <p className="legacy-continuation-intro">
              {hi 
                ? "डॉ. रतन चन्द जैन द्वारा जलाई गई ज्ञान की ज्योति आज भी प्रकाशमान है। उनकी इस अमर विरासत को उनके पुत्रों एवं पौत्र ने सार्थक रूप से आगे बढ़ाया है — ताकि शाहपुर सागर और समूचे सागर संभाग के लोग भारतीय चिकित्सा परम्परा की छाया में स्वास्थ्य लाभ पाते रहें।"
                : "The lamp lit by Dr. Ratan Chand Jain has never gone dark. His legacy lives on through his sons and grandson, each of whom took forward the torch of healing — ensuring that the people of Shahpur Sagar and central India continue to receive dedicated, compassionate medical care rooted in the Indian healing tradition."
              }
            </p>
            
            <div className="legacy-torchbearers-compact">
              <div className="torchbearer-compact is-brief">
                <div className="torchbearer-info">
                  <h4>{hi ? "प्रथम मशालवाहक" : "First Torch Bearer"}</h4>
                  <h5>Dr. Sanjeev Kumar Jain</h5>
                  <span className="torchbearer-role">
                    {hi ? "होम्योपैथिक चिकित्सक | डॉ. रतन चन्द जैन के कनिष्ठ पुत्र" : "Homeopathic Practitioner | Younger Son of Dr. Ratan Chand Jain"}
                  </span>
                  <span className="torchbearer-place">
                    {hi ? "शान्तिनिकेतन अस्पताल, शाहपुर सागर" : "शान्तिनिकेतन अस्पताल | Shantiniketan Hospital, Shahpur Sagar"}
                  </span>
                </div>
                <p>
                  {hi 
                    ? "पिता की महान परम्परा में पले-बढ़े डॉ. संजीव कुमार जैन ने बचपन से ही सेवा, विनम्रता और करुणा के संस्कार ग्रहण किए। वैद्यराज डॉ. रतन चन्द जैन के कनिष्ठ पुत्र के रूप में, उन्होंने परिवार की चिकित्सा सेवा की परम्परा को सबसे पहले आगे बढ़ाया। उन्होंने होम्योपैथी को माध्यम बनाकर इस विरासत को एक नई दिशा दी और अधिक से अधिक रोगियों तक चिकित्सा की पहुँच सुनिश्चित की।"
                    : "Growing up in the shadow of a legendary father, Dr. Sanjeev Kumar Jain imbibed the values of service, humility, and healing from a very young age. As the younger son of Vaidyaraj Dr. Ratan Chand Jain, he was among the first to carry forward the family's sacred mission of healthcare — choosing the path of Homeopathy to extend the reach of the healing legacy to a wider spectrum of patients."
                  }
                </p>
                <p>
                  {hi 
                    ? "शान्तिनिकेतन अस्पताल, शाहपुर सागर में अपनी सेवाएँ प्रदान करते हुए, डॉ. संजीव कुमार जैन ने एक विश्वसनीय और समर्पित होम्योपैथिक चिकित्सक के रूप में अपनी पहचान बनाई है। उनका रोगी-केन्द्रित दृष्टिकोण, सूक्ष्म रोग-निदान और प्रभावी उपचार ने शाहपुर सागर के अनगिनत परिवारों को स्वास्थ्य लाभ दिलाया है।"
                    : "Practicing at शान्तिनिकेतन अस्पताल (Shantiniketan Hospital) in Shahpur Sagar, Dr. Sanjeev Kumar Jain has built a trusted reputation as a dedicated Homeopathic practitioner, known for his patient-centric approach, careful case analysis, and commitment to gentle yet effective healing. His clinic has become a familiar refuge for families in Shahpur Sagar who seek holistic, side-effect-free treatment for both acute and chronic conditions."
                  }
                </p>
              </div>

              <div className="torchbearer-compact featured">
                <div className="torchbearer-info">
                  <h4>{hi ? "विरासत की निरन्तरता — अगली पीढ़ी" : "Legacy Continues — Next Generation"}</h4>
                  <h5>Shantiratnam Ayush Institute of Indian Medicinal Sciences</h5>
                  <span className="torchbearer-role">
                    {hi ? "भारतीय चिकित्सा विज्ञान संस्थान | सागर, मध्य प्रदेश | स्थापना: 2004" : "Sagar, Madhya Pradesh | Established: 2004"}
                  </span>
                </div>
                <p>
                  {hi 
                    ? "डॉ. रतन चन्द जैन के पौत्र डॉ. सौरभ भरिल्ल के गतिशील नेतृत्व में शान्तिरत्नम् आयुष संस्थान सागर संभाग में आयुर्वेद एवं अन्य आयुष विषयों के लिए एक प्रमुख केन्द्र के रूप में स्थापित हो चुका है। वर्ष 2004 में स्थापना से अब तक 10,000 से अधिक संतुष्ट रोगियों को सेवाएँ प्रदान की जा चुकी हैं।"
                    : "Under the dynamic leadership of Dr. Saurabh Bharill, grandson of Dr. Ratan Chand Jain, Shantiratnam Ayush Institute has emerged as a premier center for Ayurveda and other AYUSH disciplines in central India. Since its establishment in 2004 as Shanti ratnam ayurvedic Chitiksalay, the Institute has successfully served more than 10,000 satisfied patients from across central India."
                  }
                </p>
                <p>
                  {hi 
                    ? "यह संस्थान आयुर्वेद, योग, यूनानी, सिद्ध और होम्योपैथी में व्यापक चिकित्सा सुविधाएँ प्रदान करता है। डॉ. सौरभ भरिल्ल का आयुष क्षेत्र में गतिशील कार्य न केवल उनके पितामह की स्मृति को सम्मान देता है, बल्कि मध्य भारत में समग्र स्वास्थ्य सेवाओं के स्तर को भी ऊँचा उठाता है।"
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
              ? "रोगियों के अनुभव और सफलता कथाएं हमारी उपचार प्रणाली की प्रभावशीलता और देखभाल को दर्शाती हैं।"
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
