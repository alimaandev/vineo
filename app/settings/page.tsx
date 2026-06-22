"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Bell,
  Wand2,
  User,
  KeyRound,
  Save,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/animations/Reveal";
import { DashboardLayout } from "../dashboard/DashboardLayout";

const settingsRows = [
  {
    icon: User,
    label: "Profile",
    desc: "Update name, email, and avatar",
    accent: "text-[#00F0FF]",
  },
  {
    icon: KeyRound,
    label: "Security",
    desc: "Password & active sessions",
    accent: "text-[#9D4EDD]",
  },
  {
    icon: Bell,
    label: "Notifications",
    desc: "Email and in-app alerts",
    accent: "text-[#00F0FF]",
  },
  {
    icon: Shield,
    label: "Privacy",
    desc: "Data sharing and visibility controls",
    accent: "text-[#F4F4F6]",
  },
  {
    icon: Wand2,
    label: "Workspace",
    desc: "Billing and access permissions",
    accent: "text-[#9D4EDD]",
  },
];

const preferenceRows = [
  { label: "Dark mode", value: "Enabled" },
  { label: "Email digest", value: "Weekly" },
  { label: "Team mentions", value: "On" },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between gap-6 mb-8">
        <div className="min-w-0">
          <Reveal>
            <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F6]">
              Settings
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-sm text-[#8A8A93] mt-2">
              Configure your workspace, security, and notification preferences.
            </p>
          </Reveal>
        </div>

        <div className="flex items-center gap-3">
          <Reveal>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/25 px-4 py-2 text-sm font-medium text-[#00F0FF]"
            >
              <Save size={16} />
              Save changes
            </motion.button>
          </Reveal>
          <Reveal>
            <div className="hidden md:flex items-center gap-2 rounded-xl border border-[#222227] bg-[#0A0A0C]/60 px-4 py-2">
              <Sparkles size={16} className="text-[#9D4EDD]" />
              <span className="text-xs text-[#8A8A93]">Stripe-style clean UI</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Account / categories */}
        <div className="lg:col-span-2 flex flex-col gap-6">
       
            <Reveal>
              <div className="relative overflow-hidden bg-[#121216] border border-[#222227] rounded-xl">
                {/* subtle edge accents */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.08),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(157,78,221,0.08),transparent_55%)]" />

                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-sm font-medium text-[#F4F4F6]">
                        Manage settings
                      </h3>
                      <p className="text-xs text-[#8A8A93] mt-1">
                        Organized sections with consistent hover and spacing.
                      </p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                      Active
                    </span>
                  </div>

                  <div className="mt-5 space-y-0 divide-y divide-[#222227]">
                    {settingsRows.map((row, idx) => {
                      const Icon = row.icon;
                      return (
                        <motion.div
                          key={row.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.06 }}
                          whileHover={{ backgroundColor: "rgba(26,26,32,0.35)" }}
                          className="group flex items-center justify-between gap-4 px-0 py-0"
                        >
                          <button
                            type="button"
                            className="w-full text-left px-2 py-4 flex items-center justify-between gap-4 rounded-lg hover:cursor-default"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 rounded-lg bg-[#0A0A0C] border border-[#222227] flex items-center justify-center">
                                <Icon size={16} className={row.accent} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-[#F4F4F6] truncate">
                                  {row.label}
                                </div>
                                <div className="text-xs text-[#8A8A93] mt-1 truncate">
                                  {row.desc}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xs text-[#8A8A93] group-hover:text-[#F4F4F6]">
                                Edit
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#222227] group-hover:bg-[#00F0FF]/70" />
                            </div>
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

          <Reveal>
            <div className="bg-[#121216] border border-[#222227] rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-[#F4F4F6]">
                      Activity & security snapshot
                    </h3>
                    <p className="text-xs text-[#8A8A93] mt-1">
                      Lightweight placeholders for real integrations.
                    </p>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-[#9D4EDD]/10 text-[#9D4EDD] border border-[#9D4EDD]/20">
                    Healthy
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Signed in devices", value: "3", color: "text-[#00F0FF]" },
                    { title: "Recent alerts", value: "1", color: "text-[#9D4EDD]" },
                    { title: "Password strength", value: "Strong", color: "text-[#F4F4F6]" },
                    { title: "Session expiry", value: "14 days", color: "text-[#00F0FF]" },
                  ].map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="rounded-lg border border-[#222227] bg-[#0A0A0C] px-4 py-4"
                    >
                      <div className="text-xs text-[#8A8A93]">{card.title}</div>
                      <div className={`text-lg font-semibold mt-2 ${card.color}`}>
                        {card.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right - Preferences */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="bg-[#121216] border border-[#222227] rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-sm font-medium text-[#F4F4F6] mb-4">
                  Preferences
                </h3>

                <div className="space-y-3">
                  {preferenceRows.map((row, idx) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.06 }}
                      whileHover={{ backgroundColor: "rgba(26,26,32,0.35)" }}
                      className="rounded-lg border border-[#222227] bg-[#0A0A0C] px-4 py-3 flex items-center justify-between gap-4"
                    >
                      <div className="text-sm font-medium text-[#F4F4F6]">
                        {row.label}
                      </div>
                      <div className="text-xs text-[#8A8A93]">{row.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-[#121216] border border-[#222227] rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-sm font-medium text-[#F4F4F6] mb-3">
                  Notifications
                </h3>
                <p className="text-xs text-[#8A8A93] mb-5">
                  Choose how you want to receive updates.
                </p>

                <div className="space-y-3">
                  {[
                    { label: "Product updates", value: "On" },
                    { label: "Security alerts", value: "On" },
                    { label: "Weekly reports", value: "Off" },
                  ].map((row, idx) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.06 }}
                      className="rounded-lg border border-[#222227] bg-[#0A0A0C] px-4 py-3 flex items-center justify-between gap-4"
                    >
                      <div className="text-sm font-medium text-[#F4F4F6] truncate">
                        {row.label}
                      </div>
                      <div className="text-xs text-[#8A8A93]">{row.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </DashboardLayout>
  );
}
