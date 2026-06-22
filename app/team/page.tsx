"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Sparkles, Mail, Plus } from "lucide-react";
import Reveal from "../components/animations/Reveal";
import FloatingCard from "../components/animations/FloatingCard";
import { DashboardLayout } from "../dashboard/DashboardLayout";

const team = [
  {
    name: "Ayesha Khan",
    role: "Project Manager",
    accent: "text-[#00F0FF]",
    status: "Available",
    initials: "AK",
  },
  {
    name: "Bilal Ahmed",
    role: "Frontend Engineer",
    accent: "text-[#9D4EDD]",
    status: "In Deep Work",
    initials: "BA",
  },
  {
    name: "Logesh Kumar",
    role: "Backend Engineer",
    accent: "text-[#F4F4F6]",
    status: "Reviewing",
    initials: "LK",
  },
  {
    name: "Zara Ibrahim",
    role: "Design Lead",
    accent: "text-[#00F0FF]",
    status: "Available",
    initials: "ZI",
  },
];

const roles = [
  { label: "Engineering", value: 8, accent: "bg-[#00F0FF]" },
  { label: "Design", value: 3, accent: "bg-[#9D4EDD]" },
  { label: "Operations", value: 2, accent: "bg-[#F4F4F6]" },
];

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between gap-6 mb-8">
        <Reveal>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F6]">
              Team
            </h1>
            <p className="text-sm text-[#8A8A93] mt-2">
              Roles, availability, and recent collaboration signals.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#9D4EDD]/10 border border-[#9D4EDD]/30 px-4 py-2 text-sm font-medium text-[#9D4EDD]"
          >
            <Plus size={16} />
            Invite
          </motion.button>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Members */}
        <Reveal>
          <div className="bg-[#121216] border border-[#222227] rounded-xl overflow-hidden">
            <div className="p-6 border-b border-[#222227] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0A0A0C] border border-[#222227] flex items-center justify-center">
                  <Users size={16} className="text-[#8A8A93]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#F4F4F6]">
                    Team Members
                  </h3>
                  <p className="text-xs text-[#8A8A93] mt-1">
                    Who’s working on what right now
                  </p>
                </div>
              </div>
              <span className="text-xs text-[#8A8A93]">{team.length}</span>
            </div>

            <div className="divide-y divide-[#222227]">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={{ backgroundColor: "rgba(26,26,32,0.35)" }}
                  className="px-6 py-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0C] border border-[#222227] flex items-center justify-center">
                      <span className={`text-sm font-semibold ${m.accent}`}>
                        {m.initials}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-medium text-[#F4F4F6] truncate">
                        {m.name}
                      </div>
                      <div className="text-xs text-[#8A8A93] mt-1 truncate">
                        {m.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#8A8A93]">
                      {m.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: Roles + Signals */}
        <div className="lg:col-span-2 flex flex-col gap-6">
            <Reveal>
              <div className="bg-[#121216] border border-[#222227] rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-[#F4F4F6]">
                      Role Distribution
                    </h3>
                    <p className="text-xs text-[#8A8A93] mt-1">
                      Headcount by function
                    </p>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF]">
                    Balanced
                  </span>
                </div>

                <div className="space-y-5">
                  {roles.map((r, idx) => (
                    <div key={r.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#8A8A93]">{r.label}</span>
                        <span className="text-xs text-[#F4F4F6] font-medium">
                          {r.value}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-[#0A0A0C] border border-[#222227] overflow-hidden">
                        <div
                          className={`h-full ${r.accent}`}
                          style={{ width: `${[45, 25, 15][idx]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          <Reveal>
            <div className="bg-[#121216] border border-[#222227] rounded-xl p-6">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-[#F4F4F6]">
                    Collaboration Signals
                  </h3>
                  <p className="text-xs text-[#8A8A93] mt-1">
                    Lightweight activity highlights
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Review SLA",
                    desc: "Avg. turnaround: 6.2h",
                    accent: "text-[#00F0FF]",
                  },
                  {
                    icon: Sparkles,
                    title: "Design QA",
                    desc: "2 components flagged for polish",
                    accent: "text-[#9D4EDD]",
                  },
                  {
                    icon: Mail,
                    title: "Sync Rhythm",
                    desc: "Daily standup active",
                    accent: "text-[#F4F4F6]",
                  },
                ].map((row, i) => (
                  <motion.div
                    key={row.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex items-center justify-between gap-4 rounded-lg border border-[#222227] bg-[#0A0A0C] px-4 py-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-[#0A0A0C] border border-[#222227] flex items-center justify-center">
                        <row.icon size={16} className={row.accent} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-[#F4F4F6] truncate">
                          {row.title}
                        </div>
                        <div className="text-xs text-[#8A8A93] mt-1 truncate">
                          {row.desc}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-[#8A8A93]">View</span>
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
