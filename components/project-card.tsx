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
      className="group block h-full border border-gray-300 dark:border-white/20 rounded-2xl overflow-hidden bg-card hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-sm hover:shadow-black/20"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary/20">
        <Image
          src={src}
          height={200}
          width={400}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-[calc(100%-aspect-video)]">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Separator */}
        <hr className="border-t border-white/10 my-4" />

        {/* Tech Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {tools.slice(0, 5).map((tool, idx) => (
              <div
                key={idx}
                className="p-1.5 rounded-md bg-secondary/30 border border-white/5"
                title={tool.alt}
              >
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  height={14}
                  width={14}
                  className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {tools.length > 5 && (
              <span className="text-xs text-muted-foreground ml-1">
                +{tools.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
