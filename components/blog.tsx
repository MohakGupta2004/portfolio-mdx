import Link from "next/link";
import BlogCard from "./blog-card";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description:
        "Learn how to build fast and scalable web applications with Next.js framework and modern React patterns.",
      date: "January 15, 2026",
      category: "React",
      readTime: "5 min read",
      slug: "hello-world",
      tags: ["Next.js", "React", "Web Development"],
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-xs text-gray-500">Featured</h2>
        <h1 className="text-3xl font-bold">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Link
          href="/blogs"
          className="px-6 py-2 text-sm font-grotesk font-bold text-gray-700 rounded-lg bg-card border dark:border-gray-700 hover:border-gray-500 hover:bg-card dark:text-white shadow-inner"
        >
          See all blogs
        </Link>
      </div>
    </div>
  );
};
export default Blog;
