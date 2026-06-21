"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, FileText, DollarSign } from "lucide-react";

const activities = [
  { icon: FileText, text: "New project \"Brand Redesign\" created", time: "2m ago", color: "text-[#9D4EDD]" },
  { icon: CheckCircle2, text: "Task \"Update UI components\" completed", time: "14m ago", color: "text-[#00F0FF]" },
  { icon: MessageSquare, text: "Client feedback received on Wireframes", time: "1h ago", color: "text-[#F4F4F6]" },
  { icon: DollarSign, text: "Invoice #1082 marked as paid", time: "3h ago", color: "text-[#00F0FF]" },
];

export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#121216] border border-[#222227] rounded-xl p-6 flex flex-col"
    >
      <h3 className="text-sm font-medium text-[#F4F4F6] mb-6">Recent Activity</h3>
      
      <div className="flex-1 space-y-0">
        {activities.map((item, i) => (
          <div key={i} className="flex gap-4 group cursor-default">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className={`p-1.5 rounded-md bg-[#0A0A0C] border border-[#222227] ${item.color} transition-colors group-hover:border-[#8A8A93]/30`}>
                <item.icon size={14} />
              </div>
              {i < activities.length - 1 && (
                <div className="w-px flex-1 bg-[#222227] my-2" />
              )}
            </div>
            
            {/* Content */}
            <div className="pb-6">
              <p className="text-sm text-[#F4F4F6]/90 leading-relaxed">
                {item.text}
              </p>
              <p className="text-xs text-[#8A8A93] mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}