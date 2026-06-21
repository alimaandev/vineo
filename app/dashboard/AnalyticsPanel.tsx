"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function AnalyticsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[#121216] border border-[#222227] rounded-xl p-6 col-span-2 flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-medium text-[#F4F4F6]">Performance</h3>
          <p className="text-xs text-[#8A8A93] mt-1">Revenue & task completion over time</p>
        </div>
        <div className="flex items-center gap-2 text-[#00F0FF]">
          <TrendingUp size={14} />
          <span className="text-xs font-medium">+18.2%</span>
        </div>
      </div>

      {/* Chart Placeholder Area - Built for Recharts/Tremor integration */}
      <div className="flex-1 h-[280px] rounded-lg bg-[#0A0A0C] border border-[#222227] relative overflow-hidden p-4">
        {/* Subtle ambient depth - NOT a neon gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(157,78,221,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,240,255,0.05),transparent_50%)]" />
        
        {/* Grid lines for visual structure */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-b border-[#222227] w-full" style={{ opacity: 0.5 }} />
          ))}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-[#8A8A93] text-xs z-20">
          Insert Chart Component (Recharts / Tremor)
        </div>
      </div>
    </motion.div>
  );
}