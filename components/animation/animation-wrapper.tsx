"use client";
import { motion } from "framer-motion";

const AnimationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="mt-9"
    >
      {children}
    </motion.div>
  );
};
export default AnimationWrapper;
