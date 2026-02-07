"use client";
import { cn } from "@/lib/utils";

interface AnimationH2Props {
  children: React.ReactNode;
  className?: string;
}

export const AnimationH2 = ({ children, className }: AnimationH2Props) => {
  return (
    <h2
      className={cn(
        "section-header",
        className
      )}
    >
      {children}
    </h2>
  );
};
