import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Cancellation and Refund Policy",
  description: "Cancellation and refund policy for consultation and package bookings."
};

export default function CancellationRefundPolicyPage() {
  const hi = getServerLocale() === "hi";
  return (
    <main>
      <section className="container policy-page reveal in">
        <p className="mini-kicker">{hi ? "\u0928\u0940\u0924\u093f" : "Policy"}</p>
        <h1>
          {hi
            ? "\u0930\u0926\u094d\u0926\u0940\u0915\u0930\u0923 / \u0930\u093f\u092b\u0902\u0921 \u0928\u0940\u0924\u093f"
            : "Cancellation / Refund Policy"}
        </h1>
        <p>
          {hi
            ? "\u092a\u0930\u093e\u092e\u0930\u094d\u0936 \u0930\u0926\u094d\u0926\u0940\u0915\u0930\u0923 \u0915\u0940 \u0938\u0942\u091a\u0928\u093e \u092b\u094b\u0928 \u092f\u093e \u0935\u094d\u0939\u093e\u091f\u094d\u0938\u090f\u092a \u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u092a\u0939\u0932\u0947 \u0926\u0947\u0928\u0940 \u0939\u094b\u0917\u0940\u0964"
            : "Consultation cancellations should be communicated in advance through phone or WhatsApp."}
        </p>
        <p>
          {hi
            ? "\u092a\u0948\u0915\u0947\u091c \u0915\u0947 \u0930\u093f\u092b\u0902\u0921 \u0915\u0940 \u092f\u094b\u0917\u094d\u092f\u0924\u093e \u091f\u094d\u0930\u0940\u091f\u092e\u0947\u0902\u091f \u0938\u094d\u091f\u0947\u091c, \u0905\u0932\u0949\u0915\u0947\u091f \u0938\u0902\u0938\u093e\u0927\u0928 \u0914\u0930 \u092e\u0948\u0928\u0947\u091c\u092e\u0947\u0902\u091f \u0930\u093f\u0935\u094d\u092f\u0942 \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u0940 \u0939\u0948\u0964"
            : "Refund eligibility for packages depends on treatment stage, resources already allocated, and management review."}
        </p>
      </section>
    </main>
  );
}

