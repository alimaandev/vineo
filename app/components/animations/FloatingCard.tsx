// components/animations/FloatingCard.tsx

"use client";

import { motion } from "framer-motion";

export default function FloatingCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}