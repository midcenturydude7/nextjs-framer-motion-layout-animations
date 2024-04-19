"use client";
import { motion, useTransform } from "framer-motion";

export default function Logo({ scrollYBoundedProgressThrottled }) {
  return (
    <motion.div
      className="text-3xl"
      style={{
        scale: useTransform(scrollYBoundedProgressThrottled, [0, 1], [1, 0.9]),
      }}
      animate={{ ease: "easeInOut", duration: 1.5 }}
    >
      LOGO
    </motion.div>
  );
}
