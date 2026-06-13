import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose-blog">
      <MDXRemote source={source} />
    </div>
  );
}
