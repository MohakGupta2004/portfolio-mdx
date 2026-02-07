import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  tools: Array<{
    src: string;
    alt: string;
  }>;
}

const ProjectCard = ({
  src,
  alt,
  title,
  description,
  tools,
  href,
}: ProjectCardProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full border border-border/50 rounded-lg overflow-hidden bg-card/30 hover:border-primary transition-colors duration-200"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary/30">
        <Image
          src={src}
          height={200}
          width={400}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
        </div>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Tech Icons */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
          {tools.slice(0, 5).map((tool, idx) => (
            <Image
              key={idx}
              src={tool.src}
              alt={tool.alt}
              height={16}
              width={16}
              className="opacity-60 group-hover:opacity-100 transition-opacity"
              title={tool.alt}
            />
          ))}
          {tools.length > 5 && (
            <span className="text-xs text-muted-foreground">
              +{tools.length - 5}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
