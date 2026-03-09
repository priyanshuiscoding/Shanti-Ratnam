import ContactMessageForm from "@/components/ContactMessageForm";
import { getServerLocale } from "@/lib/locale-server";
import { SocialLinks } from "@/components/SocialIcons";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Shanti-Ratnam in Sagar for appointments, inquiries, and expert guidance.",
  alternates: {
    canonical: "/contact-us"
  }
};

export default function ContactUsPage() {
  const hi = getServerLocale() === "hi";
  const t = hi
    ? {
        contact: "\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902",
        hero: "संपर्क करें, हीलिंग की शुरुआत के लिए हमसे बातचीत करें",
        getInTouch: "\u0938\u0902\u092a\u0930\u094d\u0915 \u092e\u0947\u0902 \u0930\u0939\u0947\u0902",
        shortTitle: "\u0939\u092e \u091c\u0932\u094d\u0926 \u0906\u092a\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0917\u0947",
        sendMessage: "\u0938\u0902\u0926\u0947\u0936 \u092d\u0947\u091c\u0947\u0902",
        questions: "\u0915\u094d\u092f\u093e \u0906\u092a\u0915\u0947 \u0915\u094b\u0908 \u0905\u0928\u094d\u092f \u092a\u094d\u0930\u0936\u094d\u0928 \u0939\u0948\u0902?",
        newsletter: "\u0928\u094d\u092f\u0942\u091c\u0932\u0947\u091f\u0930",
        newsletterText:
          "\u0905\u0926\u094d\u092f\u0924\u0928 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u092a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0928\u094d\u092f\u0942\u091c\u0932\u0947\u091f\u0930 \u091c\u0949\u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
        send: "\u092d\u0947\u091c\u0947\u0902",
        emailPlaceholder: "\u0905\u092a\u0928\u093e \u0908\u092e\u0947\u0932 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902",
        social: "\u0938\u094b\u0936\u0932",
        map: "\u092e\u0948\u092a"
      }
    : {
        contact: "Contact Us",
        hero: "Start the conversation to establish a good relationship and healing",
        getInTouch: "Get In Touch",
        shortTitle: "We Will Be In Touch Shortly",
        sendMessage: "Send Us A Message",
        questions: "Have Other Questions?",
        newsletter: "Newsletter",
        newsletterText: "Sign up for our newsletter to get updated information.",
        send: "Send",
        emailPlaceholder: "Enter Your Mail",
        social: "Social",
        map: "Map"
      };

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">{t.contact}</p>
        <h1>{t.hero}</h1>
      </section>

      <section className="container contact-panels reveal in">
        <article className="contact-panel contact-panel-left">
          <p className="eyebrow">{t.getInTouch}</p>
          <h2>{t.shortTitle}</h2>
          <p>
            For any inquiries, collaboration opportunities, or to explore our
            services, don&apos;t hesitate to get in touch with us.
          </p>

          <div className="contact-info-list">
            <p>
              <strong>Address:</strong> Lane No.3 Neha Nagar, Makronia,
              Sagar-470004, Madhya Pradesh
            </p>
            <p>
              <strong>Email:</strong> info@shantiratnam.com
            </p>
            <p>
              <strong>Phone:</strong> +91 8989927755, +91 7582357300
            </p>
            <p>
              <strong>{t.social}:</strong>
            </p>
            <SocialLinks className="contact-social-list" withLabels />
            <p>
              <strong>{t.map}:</strong>{" "}
              <a href="https://www.google.com/maps/place/Shanti+Ratnam/@23.8575549,78.7958644,17z/data=!3m1!4b1!4m6!3m5!1s0x3978d15d0b823b3f:0xfbbae15f9ad773d6!8m2!3d23.85755!4d78.7984393!16s%2Fg%2F11pzx4mwvs?entry=tts" target="_blank" rel="noopener noreferrer">
                {hi ? "गूगल मैप में खोलें" : "Open In Google Maps"}
              </a>
            </p>
          </div>
        </article>

        <article className="contact-panel contact-panel-right">
          <p className="eyebrow">{t.sendMessage}</p>
          <h2>{t.questions}</h2>
          <p>
            {hi
              ? "यदि आपके कोई प्रश्न हैं या अधिक जानकारी चाहिए, तो हम आपकी सहायता के लिए उपलब्ध हैं।"
              : "If you have any questions or need more information, we are here to help and support."}
          </p>
          <ContactMessageForm />
        </article>
      </section>

      <section className="container contact-map-wrap reveal in">
        <iframe
          title="Shanti-Ratnam location map"
          src="https://www.google.com/maps?q=Shanti-Ratnam%20Wellness%20Centre%20Lane%20No.3%20Neha%20Nagar%20Makronia%20Sagar&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-map"
        />
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

