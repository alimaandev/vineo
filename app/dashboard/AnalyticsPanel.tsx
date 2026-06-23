"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

type Report = {
  id: string;
  title: string;
  data: any;
  createdAt: string;
};

function safeComputeChange(reports: Report[]) {
  // Best-effort: if report.data contains numeric series, derive a % change.
  // Otherwise return null so we don't show mock values.
  if (!reports.length) return null;

  const latest = reports[0];
  const previous = reports[1];
  if (!latest?.data || !previous?.data) return null;

  // Try common patterns: { series: [{value: number}, ...] } or arrays of {value}
  const extractLastNumber = (d: any): number | null => {
    if (Array.isArray(d)) {
      for (let i = d.length - 1; i >= 0; i--) {
        const v = d[i]?.value ?? d[i]?.y;
        if (typeof v === "number" && Number.isFinite(v)) return v;
      }
    }
    const series = d?.series;
    if (Array.isArray(series)) {
      for (let i = series.length - 1; i >= 0; i--) {
        const v = series[i]?.value ?? series[i]?.y;
        if (typeof v === "number" && Number.isFinite(v)) return v;
      }
    }
    return null;
  };

  const a = extractLastNumber(latest.data);
  const b = extractLastNumber(previous.data);
  if (a == null || b == null || b === 0) return null;

  const pct = ((a - b) / Math.abs(b)) * 100;
  if (!Number.isFinite(pct)) return null;

  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(1)}%`;
}

export function AnalyticsPanel() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/analytics/reports");
        const json = await res.json();
        if (!mounted) return;
        setReports(Array.isArray(json?.reports) ? json.reports : []);
      } catch {
        if (!mounted) return;
        setReports([]);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const change = safeComputeChange(reports);

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
          <p className="text-xs text-[#8A8A93] mt-1">Analytics reports</p>
        </div>
        <div className="flex items-center gap-2 text-[#00F0FF]">
          <TrendingUp size={14} />
          <span className="text-xs font-medium">{loading ? "—" : change ?? "—"}</span>
        </div>
      </div>

      <div className="flex-1 h-[280px] rounded-lg bg-[#0A0A0C] border border-[#222227] relative overflow-hidden p-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(157,78,221,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,240,255,0.05),transparent_50%)]" />

        <div className="relative z-10 h-full flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="border-b border-[#222227] w-full"
              style={{ opacity: 0.5 }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-[#8A8A93] text-xs z-20 px-4 text-center">
          {loading
            ? "Loading analytics…"
            : reports.length
              ? `Latest: ${reports[0].title}`
              : "No analytics reports yet."}
        </div>
      </div>
    </motion.div>
  );
}
