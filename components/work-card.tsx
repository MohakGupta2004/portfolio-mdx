import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import TechStackButton from "./ui/tech-button";
import { Link as IconLink } from "lucide-react";
import Link from "next/link";
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
}: {
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
}) => {
  return (
    <details className="mt-5 group" open={open}>
      <summary className="list-none cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
          <div className="flex gap-3 sm:gap-5">
            <Image
              src={src}
              height={20}
              width={50}
              alt={alt}
              className="rounded-lg w-12 h-12 sm:w-14 sm:h-14 object-cover flex-shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-bold flex items-center gap-1 flex-wrap">
                <span className="truncate">{companyName}</span>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <IconLink className="text-gray-500 h-4 w-4 flex-shrink-0" />
                </Link>
                <FaAngleDown className="transition-transform group-open:rotate-180 text-gray-300 flex-shrink-0" />
              </h1>
              <h2 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {jobRole}
              </h2>
            </div>
          </div>

          <div className="text-left sm:text-right text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-1 pl-15 sm:pl-0">
            <div>
              {startingDate} - {endingDate}
            </div>
            <div>{location}</div>
          </div>
        </div>
      </summary>
      <div>
        <div className="font-grotesk text-md mt-5 font-bold">
          Tools & Technologies
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tech.map((t, idx) => (
            <TechStackButton key={idx} src={t.src} href={t.href} alt={t.alt}>
              {t.children}
            </TechStackButton>
          ))}
        </div>
      </div>
      <div>
        <ul className="list-disc text-gray-500 dark:text-gray-400 mt-3 space-y-1 text-sm pl-5">
          {description.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default WorkCard;
