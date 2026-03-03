import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { withLocalePath } from "@/lib/locale";
import { getServerLocale } from "@/lib/locale-server";

export const metadata = {
  title: "Blog",
  description:
    "Latest insights from Shanti-Ratnam on Ayurveda, chronic condition care, and lifestyle healing.",
  alternates: {
    canonical: "/blog"
  }
};

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export default async function BlogPage() {
  const locale = getServerLocale();
  const localHref = (path) => withLocalePath(path, locale);
  const posts = await getAllPosts();

  return (
    <main>
      <section className="container facilities-hero reveal in">
        <p className="mini-kicker">Blog</p>
        <h1>Insights on Healing, Recovery, and Integrative Care</h1>
        <p className="lead">
          Practical articles by the Shanti-Ratnam team on chronic condition
          management and Ayurveda-guided lifestyle improvement.
        </p>
      </section>

      <section className="container blog-listing reveal in">
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={760}
                className="blog-cover"
              />
              <div className="blog-card-body">
                <p className="blog-meta">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>{post.author}</span>
                </p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link href={localHref(`/blog/${post.slug}`)}>Read Article &rarr;</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

