export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/blog/${slug}.mdx`);

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12">
      <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none">
        <Post />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return [{ slug: "hello-world" }];
}

export const dynamicParams = false;
