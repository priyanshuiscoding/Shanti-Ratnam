import SectionHeading from "@/components/SectionHeading";

export default function InnerPageContent({ locale = "en", title, intro, section, body }) {
  const hi = locale === "hi";
  const t = hi
    ? {
        brand: "शांति-रत्नम",
        overview: "अवलोकन",
        note:
          "इस पेज का अंतिम कंटेंट, इमेज और एसईओ डेटा अगली फेज में लाइव साइट से माइग्रेट किया जाएगा।"
      }
    : {
        brand: "Shanti-Ratnam",
        overview: "Overview",
        note:
          "Placeholder block for this page: final text, images, and SEO metadata will be migrated from the current live website in the next phase."
      };

  return (
    <main>
      <section className="container inner-hero reveal in">
        <p className="eyebrow">{t.brand}</p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </section>

      <section className="container inner-content reveal in">
        <SectionHeading eyebrow={t.overview} title={section} />
        <p>{body}</p>
        <p>{t.note}</p>
      </section>
    </main>
  );
}
