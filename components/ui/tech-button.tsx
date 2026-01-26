import Image from "next/image";
import Link from "next/link";
import React from "react";
const TechStackButton = ({
  href,
  src,
  alt,
  children,
}: {
  src: string;
  href: string;
  alt: string;
  children: string;
}) => {
  return (
    <>
      <span className="p-1 mb-2 cursor-pointer">
        <Link
          className="underline decoration-dotted border border-gray-400 p-1 rounded-lg text-gray-600 border-dashed  dark:text-gray-200 bg-white/30 shadow-inner dark:border-dashed dark:border-white"
          href={href}
          target="_blank"
        >
          <Image
            src={src}
            height={20}
            width={20}
            alt={alt}
            className="inline pr-1"
          />
          <span className="text-sm font-bold">{children}</span>
        </Link>
      </span>
    </>
  );
};

export default TechStackButton;
