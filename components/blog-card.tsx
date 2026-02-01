import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    readTime: string;
    slug: string;
    tags: string[];
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.slug}`} passHref>
      <Card className="relative h-full rounded-2xl w-full pt-0 gap-4 overflow-hidden shadow-inner hover:border-gray-500">
        <div className="absolute inset-0 z-30 aspect-video" />
        <Image
          src={`/images/blogs/${blog.slug}.jpg`}
          height={400}
          width={400}
          alt={blog.title}
          className="relative z-20 aspect-video w-full object-cover brightness-100"
        />
        <CardHeader className="grid grid-cols-1 gap-3">
          <CardTitle>{blog.title}</CardTitle>
          <CardDescription>
            {blog.description.length > 100
              ? blog.description.substring(0, 100) + "..."
              : blog.description}
          </CardDescription>
          <div className="font-grotesk font-bold text-sm">Technologies</div>
          <br />
          <div className="flex text-sm font-grotesk font-bold flex-wrap">
            {/* Render only 3 tags if more say +1  */}
            {blog.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="mr-2 outline rounded-full px-2 py-1  dark:bg-card bg-gray-200 text-xs"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 2 && (
              <span className="mr-2 outline rounded-full px-2 py-1  dark:bg-card bg-gray-200 text-xs">
                +{blog.tags.length - 2} more
              </span>
            )}
          </div>
        </CardHeader>
        <div className="flex justify-between items-center mt-auto mb-4">
          <div className="">
            <span className="ml-5 text-sm font-grotesk font-semibold flex-wrap">
              {blog.date}
            </span>
          </div>
          <Badge className="ml-auto mr-5 cursor-pointer hover:scale-105 transition-transform">
            Read More <ArrowRight />
          </Badge>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
