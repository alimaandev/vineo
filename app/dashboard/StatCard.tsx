"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  index: number;
}

export function StatCard({ title, value, change, changeType, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="bg-[#121216] border border-[#222227] rounded-xl p-6 flex flex-col justify-between h-[140px]"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-[#8A8A93]">
        {title}
      </p>
      
      <div className="flex items-end justify-between mt-4">
        <h3 className="text-3xl font-semibold tracking-tight text-[#F4F4F6]">
          {value}
        </h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-md ${
          changeType === "up" 
            ? "text-[#00F0FF] bg-[#00F0FF]/10" 
            : "text-red-400 bg-red-400/10"
        }`}>
          {change}
        </span>
      </div>
    </motion.div>
  );
}