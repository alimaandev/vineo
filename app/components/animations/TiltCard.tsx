// components/animations/TiltCard.tsx

"use client";

import { motion } from "framer-motion";

export default function TiltCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}