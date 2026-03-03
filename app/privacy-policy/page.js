import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Shanti-Ratnam website and consultation forms."
};

export default function PrivacyPolicyPage() {
  const hi = getServerLocale() === "hi";
  return (
    <main>
      <section className="container policy-page reveal in">
        <p className="mini-kicker">{hi ? "\u0928\u0940\u0924\u093f" : "Policy"}</p>
        <h1>{hi ? "\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0928\u0940\u0924\u093f" : "Privacy Policy"}</h1>
        <p>
          {hi
            ? "\u0939\u092e \u0915\u0947\u0935\u0932 \u0905\u092a\u0949\u0907\u0902\u091f\u092e\u0947\u0902\u091f \u0938\u092e\u0928\u094d\u0935\u092f \u0914\u0930 \u0930\u094b\u0917\u0940 \u0938\u0902\u091a\u093e\u0930 \u0915\u0947 \u0932\u093f\u090f \u0906\u0935\u0936\u094d\u092f\u0915 \u0935\u093f\u0935\u0930\u0923 \u0939\u0940 \u090f\u0915\u0924\u094d\u0930 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964 \u0939\u092e \u0915\u093f\u0938\u0940 \u0924\u0943\u0924\u0940\u092f \u092a\u0915\u094d\u0937 \u0915\u094b \u0928\u093f\u091c\u0940 \u0921\u0947\u091f\u093e \u0928\u0939\u0940\u0902 \u092c\u0947\u091a\u0924\u0947\u0964"
            : "We collect only necessary details for appointment coordination and patient communication. We do not sell personal data to third parties."}
        </p>
        <p>
          {hi
            ? "\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0926\u094d\u0935\u093e\u0930\u093e \u0938\u093e\u091d\u093e \u0915\u0940 \u0917\u0908 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u092a\u0930\u093e\u092e\u0930\u094d\u0936 \u0936\u0947\u0921\u094d\u092f\u0942\u0932\u093f\u0902\u0917, \u092b\u0949\u0932\u094b-\u0905\u092a \u0938\u0902\u091a\u093e\u0930 \u0914\u0930 \u0938\u0947\u0935\u093e \u0938\u0941\u0927\u093e\u0930 \u0915\u0947 \u0932\u093f\u090f \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948\u0964"
            : "Information shared by users may be used for consultation scheduling, follow-up communication, and service improvement."}
        </p>
      </section>
    </main>
  );
}

