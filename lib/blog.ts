import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  locale: string;
  content: string;
}

function getLocaleBlogDir(locale: string): string {
  return path.join(blogDirectory, locale);
}

export function getBlogPosts(locale: string): BlogPost[] {
  const localeDir = getLocaleBlogDir(locale);

  if (!fs.existsSync(localeDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(localeDir);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(localeDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        locale,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getBlogPost(slug: string, locale: string): BlogPost | null {
  const localeDir = getLocaleBlogDir(locale);
  const fullPath = path.join(localeDir, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    locale,
    content,
  };
}

export function getAllBlogSlugs(locale: string): string[] {
  const localeDir = getLocaleBlogDir(locale);

  if (!fs.existsSync(localeDir)) {
    return [];
  }

  return fs
    .readdirSync(localeDir)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}
