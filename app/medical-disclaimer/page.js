import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Medical Disclaimer",
  description: "Medical disclaimer for treatment outcomes and informational content."
};

export default function MedicalDisclaimerPage() {
  const hi = getServerLocale() === "hi";
  return (
    <main>
      <section className="container policy-page reveal in">
        <p className="mini-kicker">{hi ? "\u0928\u0940\u0924\u093f" : "Policy"}</p>
        <h1>{hi ? "\u092e\u0947\u0921\u093f\u0915\u0932 \u0921\u093f\u0938\u094d\u0915\u094d\u0932\u0947\u092e\u0930" : "Medical Disclaimer"}</h1>
        <p>
          {hi
            ? "\u0928\u0924\u0940\u091c\u0947 \u0928\u093f\u0926\u093e\u0928, \u0930\u094b\u0917\u0940 \u0905\u0928\u0941\u092a\u093e\u0932\u0928 \u0914\u0930 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0907\u0924\u093f\u0939\u093e\u0938 \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964 \u092a\u0930\u093f\u0923\u093e\u092e \u0935\u094d\u092f\u0915\u094d\u0924\u093f-\u0935\u093f\u0936\u0947\u0937 \u0905\u0928\u0941\u0938\u093e\u0930 \u092d\u093f\u0928\u094d\u0928 \u0939\u094b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
            : "Treatment outcomes vary based on diagnosis, patient compliance, and health history. Results may vary from person to person."}
        </p>
        <p>
          {hi
            ? "\u0926\u0935\u093e \u092c\u0926\u0932\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u092f\u094b\u0917\u094d\u092f \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u0915 \u0938\u0947 \u0938\u0932\u093e\u0939 \u0905\u0935\u0936\u094d\u092f \u0932\u0947\u0902, \u0935\u093f\u0936\u0947\u0937 \u0930\u0942\u092a \u0938\u0947 \u0915\u094d\u0930\u0949\u0928\u093f\u0915 \u0914\u0930 \u0939\u093e\u0908-\u0930\u093f\u0938\u094d\u0915 \u0915\u0902\u0921\u0940\u0936\u0928 \u092e\u0947\u0902\u0964"
            : "Always consult a qualified doctor before changing medicines, especially in chronic and high-risk conditions."}
        </p>
      </section>
    </main>
  );
}

