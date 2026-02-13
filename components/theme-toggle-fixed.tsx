"use client";

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const ThemeToggleFixed = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <AnimatedThemeToggler className="p-2.5 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl shadow-lg shadow-black/10 hover:bg-muted/60" />
    </div>
  );
};

export default ThemeToggleFixed;
