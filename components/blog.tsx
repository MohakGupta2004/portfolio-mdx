import Link from "next/link";
import Image from "next/image";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH2 } from "./animation/animation-h2";
import { AnimationH1 } from "./animation/animation-h1";
import { Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  tags: string[];
  image?: string;
}

const Blog = () => {
  const blogs: BlogPost[] = [
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
      image: "/images/blogs/hello-world.jpg",
    },
  ];

  return (
    <section className="mt-16">
      <AnimationWrapper>
        <div className="flex items-end justify-between">
          <div>
            <AnimationH2>Latest</AnimationH2>
            <AnimationH1>Articles</AnimationH1>
          </div>
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/50 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
          >
            <span>View All</span>
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </AnimationWrapper>

      <AnimationWrapper delay={50}>
        <div className="mt-6 space-y-4">
          {blogs.length === 0 ? (
            <p className="text-muted-foreground text-sm py-4">
              No articles yet.
            </p>
          ) : (
            blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col sm:flex-row gap-4 p-4 border border-gray-300 dark:border-white/20 rounded-lg bg-card/30 hover:border-gray-300 dark:hover:border-white/20 transition-colors"
              >
                {/* Article Image */}
                {blog.image && (
                  <div className="sm:w-32 sm:h-20 flex-shrink-0 rounded-md overflow-hidden bg-secondary/30">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={128}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {blog.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="text-primary">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Blog;
