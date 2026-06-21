// components/animations/ParallaxBlob.tsx

"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBlob() {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 1500],
    [0, -300]
  );

  return (
    <motion.div
      style={{ y }}
      className="
      absolute
      top-0
      left-0
      w-[600px]
      h-[600px]
      rounded-full
      bg-accent-violet/10
      blur-[180px]
      "
    />
  );
}