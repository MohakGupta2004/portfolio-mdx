import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./animation/animation-wrapper";
const ProjectCard = ({
  src,
  alt,
  title,
  description,
  tools,
  href,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  tools: Array<{
    src: string;
    alt: string;
  }>;
}) => {
  return (
    <AnimationWrapper>
      <Card className="relative h-full rounded-2xl w-full pt-0 overflow-hidden shadow-inner hover:border-gray-500">
        <div className="absolute inset-0 z-30 aspect-video" />
        <Image
          src={src}
          height={400}
          width={400}
          alt={alt}
          className="relative z-20 aspect-video w-full object-cover brightness-100"
        />
        <CardHeader className="grid grid-cols-1 gap-2">
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </CardDescription>
          <div className="font-grotesk font-bold text-sm">Technologies</div>
          <br />
          <div className="flex text-sm font-grotesk font-bold">
            {tools.map((tool, idx) => (
              <Image
                key={idx}
                src={tool.src}
                alt={tool.alt}
                height={20}
                width={20}
                className="mr-2 fill-white"
              />
            ))}
          </div>
          <Link href={href}>
            <Badge variant="secondary">
              View Details <ArrowRight />
            </Badge>
          </Link>
        </CardHeader>
      </Card>
    </AnimationWrapper>
  );
};

export default ProjectCard;
