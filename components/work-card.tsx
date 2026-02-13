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
      className="group border border-white/10 rounded-xl bg-card open:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
      open={open}
    >
      <summary className="list-none cursor-pointer p-5">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
          <div className="flex gap-4 items-start">
            <Image
              src={src}
              height={48}
              width={48}
              alt={alt}
              className="rounded-lg w-12 h-12 object-cover flex-shrink-0 border border-white/10 bg-secondary/10"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-lg text-foreground">{companyName}</h3>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                {isCurrent && (
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{jobRole}</p>
            </div>

            <ChevronDown className="hidden sm:block w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180 flex-shrink-0 mt-1" />
          </div>

          <div className="text-left sm:text-right text-xs text-muted-foreground/60 space-y-0.5 pl-16 sm:pl-0 font-medium">
            <div>
              {startingDate} - {endingDate}
            </div>
            <div>{location}</div>
          </div>
          
          <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180 ml-auto sm:hidden" />
        </div>
      </summary>

      <div className="px-5 pb-5">
        {/* Separator */}
        <hr className="border-t border-white/10 mb-4" />
        
        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
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
        <ul className="space-y-2 text-sm text-muted-foreground">
          {description.map((d, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-white/20 mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
              <span className="leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default WorkCard;
