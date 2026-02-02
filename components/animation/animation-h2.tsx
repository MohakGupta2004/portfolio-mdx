"use client";
import { motion } from "framer-motion";

export const AnimationH2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-xs text-gray-500"
    >
      {children}
    </motion.h2>
  );
};
