"use client";
import { motion } from "framer-motion";

export const AnimationH1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="font-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
    >
      {children}
    </motion.h1>
  );
};
