import { Link } from "@/i18n/routing";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMoreText: string;
  externalUrl?: string;
  readOnMediumText?: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  readMoreText,
  externalUrl,
  readOnMediumText,
}: BlogCardProps) {
  const article = (
      <article className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
        <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
          <Calendar size={14} />
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all">
          {title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        <span className="text-accent-purple text-sm font-medium group-hover:text-accent-pink transition-colors">
          {externalUrl && readOnMediumText ? readOnMediumText : readMoreText} →
        </span>
      </article>
  );

  if (externalUrl) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        {article}
      </a>
    );
  }

  return <Link href={`/blog/${slug}`}>{article}</Link>;
}
