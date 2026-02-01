import BlogCard from "@/components/blog-card";

const Blogs = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
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
    </div>
  );
};
export default Blogs;
