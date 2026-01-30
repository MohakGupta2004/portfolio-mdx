"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <div className="z-50 max-lg:bottom-2.5 lg:top-1/3">
      <AnimatedThemeToggler duration={600} />
    </div>
  ) : null;
};
export default ThemeSwitcher;
