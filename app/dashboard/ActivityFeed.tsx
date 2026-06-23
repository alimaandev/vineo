"use client"

import { motion } from "framer-motion";
import { Clock, Hash } from "lucide-react";
import { Key } from "react";

function timeAgo(date: Date) {
  const diffMs = Date.now() - date.getTime();
  const sec = Math.floor(diffMs / 1000);
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  return `${day}d ago`;
}

function activityText(type: string) {
  // Generic, since we don't know your exact event taxonomy.
  switch (type) {
    case "page_view":
      return "Page view recorded";
    case "login":
      return "User logged in";
    case "click":
      return "Click event recorded";
    default:
      return `Event received: ${type}`;
  }
}

export async function ActivityFeed() {
  // Supabase client singleton
  const supabase = (await import('@/lib/supabase')).default;

  const { data: events, error } = await supabase
    .from('analytics_event')
    .select('id, type, createdAt')
    .order('createdAt', { ascending: false })
    .limit(8);

  // Fallback to empty list on error
  const safeEvents = events ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#121216] border border-[#222227] rounded-xl p-6 flex flex-col"
    >
      <h3 className="text-sm font-medium text-[#F4F4F6] mb-6">Recent Activity</h3>

      <div className="flex-1 space-y-0">
        {safeEvents.length === 0 ? (
          <div className="text-sm text-[#8A8A93] py-6">
            No analytics activity yet.
          </div>
        ) : (
          safeEvents.map((e: { id: Key | null | undefined; type: string; createdAt: string | number | Date; }) => (
            <div key={e.id} className="flex gap-4 group cursor-default">
              <div className="flex flex-col items-center">
                <div className="p-1.5 rounded-md bg-[#0A0A0C] border border-[#222227] text-[#00F0FF] transition-colors group-hover:border-[#8A8A93]/30">
                  <Hash size={14} />
                </div>
               {e.id !== safeEvents[safeEvents.length - 1]?.id && (
                  <div className="w-px flex-1 bg-[#222227] my-2" />
                )}
              </div>

              <div className="pb-6">
                <p className="text-sm text-[#F4F4F6]/90 leading-relaxed">
                  {activityText(e.type)}
                </p>
                <p className="text-xs text-[#8A8A93] mt-1 flex items-center gap-2">
                  <Clock size={12} />
                  {timeAgo(new Date(e.createdAt))}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}
