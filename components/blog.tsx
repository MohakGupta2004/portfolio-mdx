import Link from "next/link";
import BlogCard from "./blog-card";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started",
      description:
        "Starting to record my learnings, thoughts and ideas in the form of blogs. Stay tuned for more content on web development, AI, and much more.",
      date: "January 15, 2026",
      category: "motivation",
      readTime: "1 min read",
      slug: "hello-world",
      tags: ["Motivation", "Personal"],
    },
  ];

  return (
    <AnimationWrapper>
      <div>
        <AnimationH2>Featured</AnimationH2>
        <AnimationH1>Blogs</AnimationH1>
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
    </AnimationWrapper>
  );
};
export default Blog;
