import { notFound, redirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar } from "lucide-react";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog";
import { routing } from "@/i18n/routing";
import MDXContent from "@/components/MDXContent";

type Props = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllBlogSlugs(locale).map((slug) => ({ slug, locale }))
  );
}

export async function generateMetadata({ params }: Props) {
  const post = getBlogPost(params.slug, params.locale);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.title} | Emrah Şahin`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("blog");
  const post = getBlogPost(params.slug, params.locale);

  if (!post) {
    notFound();
  }

  if (post.externalUrl) {
    redirect(post.externalUrl);
  }

  return (
    <article className="section-padding max-w-3xl mx-auto pt-28">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-white/50 hover:text-accent-purple transition-colors mb-8 text-sm"
      >
        <ArrowLeft size={16} />
        {t("backToBlog")}
      </Link>

      <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
        <Calendar size={14} />
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString(
            params.locale === "tr" ? "tr-TR" : "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </time>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
        {post.title}
      </h1>

      <p className="text-white/60 text-lg mb-10">{post.description}</p>

      <div className="glass rounded-2xl p-6 md:p-8">
        <MDXContent source={post.content} />
      </div>
    </article>
  );
}
