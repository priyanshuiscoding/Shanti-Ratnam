import { notFound } from "next/navigation";
import InnerPageContent from "@/components/InnerPageContent";
import { getPageBySlug, innerPages } from "@/lib/siteData";
import { getServerLocale } from "@/lib/locale-server";

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
