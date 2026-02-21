"use client";
import BlogCard from "@/components/blog-card";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Hello World",
      description:
        "A quick who I am and why I started recording my things here.",
      date: "January 15, 2026",
      category: "motivation",
      readTime: "2 min",
      slug: "hello-world",
      tags: ["motivation"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6"
    >
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <h1 className="font-grotesk font-bold text-center text-3xl">Blogs</h1>
        <h2 className="font-grotesk text-gray-500 text-center text-lg">
          Thoughts, tutorials, cheatsheets and much more
        </h2>
        <div className="border w-full mb-2 mt-4"></div>
      </div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </motion.div>
  );
};
export default Blogs;
