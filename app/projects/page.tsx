"use client";

import { motion } from "framer-motion";
import { Plus, FolderKanban, Search, Activity, Clock } from "lucide-react";
import Reveal from "../components/animations/Reveal";
import FloatingCard from "../components/animations/FloatingCard";
import { DashboardLayout } from "../dashboard/DashboardLayout";

const projects = [
  {
    name: "Brand Redesign",
    owner: "Ayesha",
    status: "In Progress",
    due: "Oct 28",
    accent: "text-[#00F0FF]",
    icon: FolderKanban,
  },
  {
    name: "Onboarding Flow",
    owner: "Bilal",
    status: "Review",
    due: "Nov 03",
    accent: "text-[#9D4EDD]",
    icon: FolderKanban,
  },
  {
    name: "Mobile Landing",
    owner: "Logesh",
    status: "Planning",
    due: "Nov 14",
    accent: "text-[#F4F4F6]",
    icon: FolderKanban,
  },
];

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between gap-6 mb-8">
        <Reveal>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F6]">
              Projects
            </h1>
            <p className="text-sm text-[#8A8A93] mt-2">
              Track progress, ownership, and upcoming due dates.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-4 py-2 text-sm font-medium text-[#00F0FF]"
          >
            <Plus size={16} />
            New Project
          </motion.button>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Project List */}
        <Reveal>
          <div className="bg-[#121216] border border-[#222227] rounded-xl overflow-hidden">
            <div className="p-6 border-b border-[#222227] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0A0A0C] border border-[#222227] flex items-center justify-center">
                  <Search size={16} className="text-[#8A8A93]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#F4F4F6]">Project List</h3>
                  <p className="text-xs text-[#8A8A93] mt-1">Most recent activity</p>
                </div>
              </div>
              <span className="text-xs text-[#8A8A93]">3</span>
            </div>

            <div className="divide-y divide-[#222227]">
              {projects.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={{ backgroundColor: "rgba(26,26,32,0.35)" }}
                  className="px-6 py-4 flex items-center justify-between gap-4 cursor-default"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0C] border border-[#222227] flex items-center justify-center">
                      <p.icon size={18} className={p.accent} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-medium text-[#F4F4F6] truncate">
                        {p.name}
                      </div>
                      <div className="text-xs text-[#8A8A93] mt-1 truncate">
                        Owner: {p.owner} • Due: {p.due}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#8A8A93]">
                      {p.status}
                    </span>
                    <div className="w-px h-6 bg-[#222227]" />
                    <div className="flex items-center gap-2 text-xs text-[#8A8A93]">
                      <Activity size={14} />
                      <Clock size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: Health / Status */}
        <div className="lg:col-span-2 flex flex-col gap-6">
            <Reveal>
              <div className="bg-[#121216] border border-[#222227] rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-[#F4F4F6]">
                      Project Health
                    </h3>
                    <p className="text-xs text-[#8A8A93] mt-1">
                      Snapshot of progress and blockers
                    </p>
                  </div>

                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                    On track
                  </span>
                </div>

                <div className="space-y-5">
                  {[
                    { label: "Completion", value: 72, color: "bg-[#00F0FF]" },
                    { label: "Review Queue", value: 31, color: "bg-[#9D4EDD]" },
                    { label: "Risks", value: 18, color: "bg-[#F4F4F6]" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#8A8A93]">{row.label}</span>
                        <span className="text-xs text-[#F4F4F6] font-medium">
                          {row.value}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-[#0A0A0C] border border-[#222227] overflow-hidden">
                        <div
                          className={`h-full ${row.color}`}
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          <Reveal>
            <div className="bg-[#121216] border border-[#222227] rounded-xl p-6">
              <h3 className="text-sm font-medium text-[#F4F4F6] mb-4">
                Next Actions
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Approve UI wireframes", tag: "Review" },
                  { title: "Finalize API contract", tag: "Planning" },
                  { title: "Send kickoff checklist", tag: "In Progress" },
                ].map((a, idx) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="flex items-center justify-between gap-4 rounded-lg border border-[#222227] bg-[#0A0A0C] px-4 py-3"
                  >
                    <span className="text-sm text-[#F4F4F6] font-medium">
                      {a.title}
                    </span>
                    <span className="text-xs text-[#8A8A93]">{a.tag}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </DashboardLayout>
  );
}
