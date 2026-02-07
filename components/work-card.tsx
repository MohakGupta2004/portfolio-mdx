import Image from "next/image";
import { ChevronDown } from "lucide-react";
import TechStackButton from "./ui/tech-button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface WorkCardProps {
  src: string;
  alt: string;
  companyName: string;
  jobRole: string;
  startingDate: string;
  endingDate: string;
  location: string;
  open: boolean;
  description: Array<string>;
  tech: Array<{
    src: string;
    alt: string;
    href: string;
    children: string;
  }>;
  href: string;
  isCurrent?: boolean;
}

const WorkCard = ({
  src,
  alt,
  companyName,
  jobRole,
  startingDate,
  endingDate,
  location,
  open,
  description,
  tech,
  href,
  isCurrent,
}: WorkCardProps) => {
  return (
    <details
      className="group border border-border/50 rounded-lg bg-card/30 open:border-primary/50 transition-colors"
      open={open}
    >
      <summary className="list-none cursor-pointer p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
          <div className="flex gap-3 sm:gap-4 items-start">
            <Image
              src={src}
              height={48}
              width={48}
              alt={alt}
              className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 object-cover flex-shrink-0 border border-border/50"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-foreground">{companyName}</h3>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                {isCurrent && (
                  <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full border border-primary/30">
                    Current
                  </span>
                )}
                <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180 ml-auto sm:hidden" />
              </div>
              <p className="text-sm text-muted-foreground">{jobRole}</p>
            </div>

            <ChevronDown className="hidden sm:block w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0 mt-1" />
          </div>

          <div className="text-left sm:text-right text-xs text-muted-foreground space-y-0.5 pl-14 sm:pl-0">
            <div>
              {startingDate} - {endingDate}
            </div>
            <div>{location}</div>
          </div>
        </div>
      </summary>

      <div className="px-4 pb-4 border-t border-border/30 pt-4 mt-2">
        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, idx) => (
              <TechStackButton key={idx} src={t.src} href={t.href} alt={t.alt}>
                {t.children}
              </TechStackButton>
            ))}
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {description.map((d, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-primary mt-1.5">→</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default WorkCard;
