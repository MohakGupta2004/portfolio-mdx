"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-secondary/50 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out",
        "bg-secondary border border-border/50",
        "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sliding circle */}
      <div
        className={cn(
          "absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ease-in-out",
          "flex items-center justify-center",
          isDark
            ? "left-1 bg-primary text-primary-foreground"
            : "left-8 bg-foreground text-background"
        )}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </div>

      {/* Background icons */}
      <div className="flex items-center justify-between w-full h-full px-1.5">
        <Moon
          className={cn(
            "w-3 h-3 transition-opacity duration-300",
            isDark ? "opacity-0" : "opacity-30"
          )}
        />
        <Sun
          className={cn(
            "w-3 h-3 transition-opacity duration-300",
            isDark ? "opacity-30" : "opacity-0"
          )}
        />
      </div>
    </button>
  );
};

export default ThemeSwitcher;
