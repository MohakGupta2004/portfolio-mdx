import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TechStackButtonProps {
  src: string;
  href: string;
  alt: string;
  children: string;
}

const TechStackButton = ({
  href,
  src,
  alt,
  children,
}: TechStackButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-1.5 py-0.5 text-sm font-medium text-foreground bg-secondary/50 border border-border/50 rounded-md hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 no-underline"
    >
      <Image
        src={src}
        height={14}
        width={14}
        alt={alt}
        className="inline"
      />
      <span>{children}</span>
    </Link>
  );
};

export default TechStackButton;
