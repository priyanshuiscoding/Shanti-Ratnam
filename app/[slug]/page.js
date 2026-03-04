import { notFound, redirect } from "next/navigation";
import InnerPageContent from "@/components/InnerPageContent";
import { getPageBySlug, innerPages } from "@/lib/siteData";
import { getServerLocale } from "@/lib/locale-server";

const SLUG_REDIRECTS = {
  "treatment": "/diseases-treated",
  "aayurveda-panchkarma": "/diseases-treated",
  "acupuncture": "/diseases-treated",
  "chiropractic": "/diseases-treated",
  "diet-therapy": "/diseases-treated",
  "mantra-healing": "/diseases-treated",
  "meditation": "/diseases-treated",
  "natural-treatment": "/diseases-treated",
  "physical-therapy": "/diseases-treated",
  "rehabilitation": "/diseases-treated",
  "yoga": "/diseases-treated",
};

export function generateStaticParams() {
  return innerPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const page = getPageBySlug(params.slug);
  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.intro,
    alternates: {
      canonical: `/${page.slug}`
    }
  };
}

export default function InnerPage({ params }) {
  const target = SLUG_REDIRECTS[params.slug];
  if (target) redirect(target);

  const locale = getServerLocale();
  const page = getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <InnerPageContent
      locale={locale}
      title={page.title}
      intro={page.intro}
      section={page.section}
      body={page.body}
    />
  );
}
