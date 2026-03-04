export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/facilities", label: "Facilities" },
  { href: "/diseases-treated", label: "Diseases Treated" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" }
];

export const whyChooseUs = [
  {
    title: "Unmatched Legacy",
    body: "Built on the 88-year foundation of Dr. Ratan Chand Jain."
  },
  {
    title: "Proven Results",
    body: "Trust of over 10,000+ satisfied patients in the Sagar division."
  },
  {
    title: "Holistic AYUSH Approach",
    body: "Combining Ayurveda with modern Indian medicinal sciences."
  },
  {
    title: "Accessibility",
    body: "Consultation available in Hindi & English for your comfort."
  },
  {
    title: "Since 2004",
    body: "Two decades of dedicated clinical excellence under Dr. Saurabh Bharill."
  }
];

export const mdDeskContent = {
  title: "From The MD's Desk",
  paragraphs: [
    "At SR-AIIMS we believe in the power of ancient Indian healing practices and modern scientific research to transform healthcare. We aim to help people feel better and maintain their health using natural methods like Ayurvedic, Naturopathy, and Yoga.",
    "Our treatments are safe, effective, and supported by evidence, and we emphasize educating our patients about healthy living. We are committed to caring for everyone, especially those with limited resources, and strive to build healthier communities.",
    "Join us on a unique journey to better health, where we blend the wisdom of the past with today's knowledge."
  ],
  doctorName: "Dr. Saurabh Bharill",
  signaturePath: "/images/doctors/Dr-saurabh-signature.png",
  photoPath: "/images/doctors/dr-saurabh-photo.jpeg"
};

export const innerPages = [
  {
    slug: "about-us",
    title: "About Us",
    intro:
      "Shanti-Ratnam combines classical Ayurveda principles with practical, patient focused care plans.",
    section: "Who We Are",
    body:
      "This page will include your actual clinic journey, founders profile, certifications, and treatment philosophy from the old website."
  },
  {
    slug: "facilities",
    title: "Facilities",
    intro:
      "A calm healing campus with consultation units, therapy rooms, and recovery support spaces.",
    section: "Infrastructure Highlights",
    body:
      "Add exact facility details here: room categories, therapy setup, in-house support, hygiene standards, and patient comfort services."
  },
  {
    slug: "diseases-treated",
    title: "Diseases Treated",
    intro:
      "Condition based Ayurvedic plans crafted after a complete consultation and progress tracking.",
    section: "Condition Categories",
    body:
      "Replace this with your old data categories such as lifestyle disorders, digestive concerns, stress related conditions, and chronic case management."
  },
  {
    slug: "packages",
    title: "Packages",
    intro:
      "Flexible wellness packages based on consultation type, stay duration, and treatment goals.",
    section: "Program Packages",
    body:
      "You can list package tiers here with inclusions, exclusions, ideal duration, and who each package is designed for."
  },
  {
    slug: "gallery",
    title: "Gallery",
    intro:
      "Visual overview of campus, treatment spaces, staff interactions, and patient experience moments.",
    section: "Photo Collections",
    body:
      "Replace this text with real images and grouped sections like campus, therapies, accommodations, and events."
  },
  {
    slug: "team",
    title: "Team",
    intro:
      "Meet the doctors, therapists, and care coordinators who handle patient journeys end to end.",
    section: "Clinical Team",
    body:
      "Add each team member profile with role, specialty, years of experience, and brief clinical focus."
  },
  {
    slug: "blog",
    title: "Blog",
    intro:
      "Knowledge center for Ayurveda lifestyle, food routines, treatment awareness, and wellness education.",
    section: "Latest Insights",
    body:
      "This section can show article cards, category filters, and featured posts once content is migrated."
  },
  {
    slug: "contact-us",
    title: "Contact Us",
    intro:
      "Reach us for consultation booking, treatment guidance, and program planning support.",
    section: "Get In Touch",
    body:
      "Visit us at Lane No.3 Neha Nagar, Makronia, Sagar-470004, Madhya Pradesh. You can call us on +91 70070 77353 for consultation booking and treatment guidance."
  }
];

export function getPageBySlug(slug) {
  return innerPages.find((page) => page.slug === slug);
}

