"use client";
import { cn } from "@/lib/utils";

interface AnimationH1Props {
  children: React.ReactNode;
  className?: string;
}

export const AnimationH1 = ({ children, className }: AnimationH1Props) => {
  return (
    <h1
      className={cn(
        "font-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground",
        className
      )}
    >
      {children}
    </h1>
  );
};
