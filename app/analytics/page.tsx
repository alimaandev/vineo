"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Filter, Download } from "lucide-react";
import Reveal from "../components/animations/Reveal";
import FloatingCard from "../components/animations/FloatingCard";
import { DashboardLayout } from "../dashboard/DashboardLayout";

const kpis = [
  { label: "Conversion Rate", value: "4.8%", change: "+0.6%", changeType: "up" as const },
  { label: "Avg. Response Time", value: "1.2m", change: "-8.1%", changeType: "down" as const },
  { label: "Retention", value: "62%", change: "+3.2%", changeType: "up" as const },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between gap-6 mb-8">
        <Reveal>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F6]">
              Analytics
            </h1>
            <p className="text-sm text-[#8A8A93] mt-2">
              Deeper performance signals and trends across your workspace.
            </p>
          </div>
        </Reveal>

        <div className="flex items-center gap-3">
          <Reveal>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-4 py-2 text-sm font-medium text-[#00F0FF]"
            >
              <Filter size={16} />
              Filters
            </motion.button>
          </Reveal>

          <Reveal>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#9D4EDD]/10 border border-[#9D4EDD]/30 px-4 py-2 text-sm font-medium text-[#9D4EDD]"
            >
              <Download size={16} />
              Export
            </motion.button>
          </Reveal>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {kpis.map((kpi, idx) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="bg-[#121216] border border-[#222227] rounded-xl p-6 flex flex-col justify-between h-[140px]"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[#8A8A93]">
              {kpi.label}
            </p>

            <div className="flex items-end justify-between mt-4">
              <h3 className="text-3xl font-semibold tracking-tight text-[#F4F4F6]">
                {kpi.value}
              </h3>

              <span
                className={`text-xs font-medium px-2 py-1 rounded-md ${
                  kpi.changeType === "up"
                    ? "text-[#00F0FF] bg-[#00F0FF]/10"
                    : "text-red-400 bg-red-400/10"
                }`}
              >
                {kpi.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="lg:col-span-2 bg-[#121216] border border-[#222227] rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-[#F4F4F6]">Performance Trends</h3>
                  <p className="text-xs text-[#8A8A93] mt-1">
                    Revenue, tasks, and conversion over time
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#00F0FF]">
                  <TrendingUp size={14} />
                  <span className="text-xs font-medium">+12.4%</span>
                </div>
              </div>

              <div className="flex-1 h-[300px] rounded-lg bg-[#0A0A0C] border border-[#222227] relative overflow-hidden p-4">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(157,78,221,0.05),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,240,255,0.05),transparent_50%)]" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-b border-[#222227] w-full" style={{ opacity: 0.5 }} />
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-[#8A8A93] text-xs z-20">
                  Insert Chart Component (Recharts / Tremor)
                </div>
              </div>
            </div>
          </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="bg-[#121216] border border-[#222227] rounded-xl p-6">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A0A0C] border border-[#222227] flex items-center justify-center">
                    <BarChart3 size={16} className="text-[#00F0FF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#F4F4F6]">Top Categories</h3>
                    <p className="text-xs text-[#8A8A93] mt-1">Contribution to overall performance</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Projects", value: 58, color: "bg-[#00F0FF]" },
                  { name: "Team Ops", value: 29, color: "bg-[#9D4EDD]" },
                  { name: "Automations", value: 18, color: "bg-[#F4F4F6]" },
                ].map((row) => (
                  <div key={row.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#8A8A93]">{row.name}</span>
                      <span className="text-xs text-[#F4F4F6] font-medium">{row.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#0A0A0C] border border-[#222227] overflow-hidden">
                      <div className={`h-full ${row.color}`} style={{ width: `${row.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-[#121216] border border-[#222227] rounded-xl p-6">
              <h3 className="text-sm font-medium text-[#F4F4F6] mb-4">Insights</h3>
              <div className="space-y-3">
                {[
                  { title: "Revenue spike", desc: "Improved onboarding conversion", color: "text-[#00F0FF]" },
                  { title: "Lower latency", desc: "Team feedback loop stabilized", color: "text-[#9D4EDD]" },
                  { title: "Retention gains", desc: "More projects reaching 'on track'", color: "text-[#F4F4F6]" },
                ].map((ins, idx) => (
                  <motion.div
                    key={ins.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="rounded-lg border border-[#222227] bg-[#0A0A0C] px-4 py-3"
                  >
                    <div className={`text-sm font-medium ${ins.color}`}>{ins.title}</div>
                    <div className="text-xs text-[#8A8A93] mt-1">{ins.desc}</div>
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
