import Image from "next/image";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Media Gallery",
  description:
    "Explore moments from Shanti-Ratnam through our media gallery featuring facilities, care, and patient-focused healing spaces."
};

const galleryImages = [
  {
    src: "/images/media/DSC_0362.JPG",
    alt: "Shanti-Ratnam clinic environment view",
    width: 6192,
    height: 4128
  },
  {
    src: "/images/media/DSC_0423.JPG",
    alt: "Ayurveda consultation and patient interaction",
    width: 6192,
    height: 4128
  },
  {
    src: "/images/media/DSC_0448.JPG",
    alt: "Wellness area at Shanti-Ratnam",
    width: 6192,
    height: 4128
  },
  {
    src: "/images/media/DSC_0480.JPG",
    alt: "Clinical and therapy space at Shanti-Ratnam",
    width: 6192,
    height: 4128
  },
  {
    src: "/images/media/IMG_2743.jpg",
    alt: "Care team and patient support moment",
    width: 5712,
    height: 4284
  },
  {
    src: "/images/media/IMG_2747.jpg",
    alt: "Ayurveda treatment setup",
    width: 5712,
    height: 4284
  },
  {
    src: "/images/media/IMG_2752.jpg",
    alt: "Facility interior at Shanti-Ratnam",
    width: 5712,
    height: 4284
  },
  {
    src: "/images/media/IMG_2763.jpg",
    alt: "Patient-focused wellness interaction",
    width: 5712,
    height: 4284
  },
  {
    src: "/images/media/Naturopathy Treatment .png",
    alt: "Naturopathy treatment at Shanti-Ratnam",
    width: 1200,
    height: 896
  }
];

const collageClasses = [
  "is-hero",
  "is-wide",
  "is-square",
  "is-square",
  "is-wide",
  "is-square",
  "is-wide",
  "is-square",
  "is-wide"
];

export default function GalleryPage() {
  const locale = getServerLocale();
  const hi = locale === "hi";

  return (
    <main>
      <section className="container media-gallery-hero reveal in">
        <p className="mini-kicker">{hi ? "मीडिया" : "Media"}</p>
        <h1>{hi ? "मीडिया और गैलरी" : "Media & Gallery"}</h1>
        <p className="lead">
          {hi
            ? "हमारे कैंपस, उपचार वातावरण और देखभाल यात्रा की वास्तविक झलकियां।"
            : "A visual journey through our campus, care spaces, and treatment experience."}
        </p>
      </section>

      <section className="container media-collage-wrap reveal in">
        <div className="media-collage-grid">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`media-collage-tile ${collageClasses[index] || "is-wide"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="media-collage-image"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
