export default function SeoLocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shanti Ratnam",
    image: "https://shantiratnam.com/images/logo.png",
    telephone: "+91 70070 77353",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lane No.3 Neha Nagar, Makronia",
      addressLocality: "Sagar",
      addressRegion: "Madhya Pradesh",
      postalCode: "470004",
      addressCountry: "IN"
    },
    url: "https://shantiratnam.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
