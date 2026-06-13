import { getTranslations, setRequestLocale } from "next-intl/server";
import { getBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import SectionTitle from "@/components/SectionTitle";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "blog" });

  return {
    title: `${t("title")} | Emrah Şahin`,
    description: t("subtitle"),
  };
}

export default async function BlogPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("blog");
  const posts = getBlogPosts(params.locale);

  return (
    <div className="section-padding max-w-6xl mx-auto pt-28">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      {posts.length === 0 ? (
        <p className="text-center text-white/50 text-lg">{t("noPosts")}</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              readMoreText={t("readMore")}
              externalUrl={post.externalUrl}
              readOnMediumText={t("readOnMedium")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
