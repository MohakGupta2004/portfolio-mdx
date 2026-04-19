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
    {
      id: 2,
      title: "Monolith to Microservices — What System Design Taught Me",
      description:
        "My notes while studying HLD, working with a monolithic codebase, and understanding Saga, Strangler, and deployment patterns in real systems.",
      date: "March 02, 2026",
      category: "system-design",
      readTime: "10 min",
      slug: "monolithic-and-microservices",
      tags: [
        "system-design",
        "architecture",
        "microservices",
        "monolith",
        "saga",
        "strangler-pattern",
        "canary-deployment",
      ],
    },
    {
      id: 3,
      title: "API Gateways: The Unsung Heroes of Microservices",
      description:
        "A deep dive into the role of API gateways in microservices architecture, exploring their benefits, challenges, and best practices for implementation.",
      date: "March 11, 2026",
      category: "system-design",
      readTime: "20 min",
      slug: "api-gateways",
      tags: ["system-design", "architecture", "microservices", "api-gateway"],
    },
    // {
    //   id: 4,
    //   title: "sliding-window-1",
    //   description: "Sliding window is a data structures and algorithms pattern and I'll explain how to approach it.",
    //   date: "March 14, 2026",
    //   category: "datastructures-and-algorithms",
    //   readTime: "5 min",
    //   slug: "sliding-window-1",
    //   tags: ["dsa","sliding-window","cpp","cp","problem-solving","leetcode"],
    // },
    {
      id: 5,
      title: "Load Balancing Algorithms",
      description: "Here we are discussing various algortims of Load Balancers and LB types.",
      date: "March 18, 2026",
      category: "system design",
      readTime: "5 min",
      slug: "load-balancing-algorithms",
      tags: ["system-design","high-level-design"],
    },
    {
      id: 6,
      title: "Proxy vs Reverse proxy",
      description: "Here is a detailed explanation about proxy and reverse proxy with vpn. Why we need reverse proxy and all of these.",
      date: "March 25, 2026",
      category: "system-design",
      readTime: "5 min",
      slug: "proxy-vs-reverse-proxy",
      tags: ["system-design","networking","reverse-proxy"],
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
