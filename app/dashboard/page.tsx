"use client";

import { DashboardLayout } from "./DashboardLayout";
import { StatCard } from "./StatCard";
import { AnalyticsPanel } from "./AnalyticsPanel";
import { ActivityFeed } from "./ActivityFeed";

const stats = [
  { title: "Active Projects", value: "128", change: "+12%", changeType: "up" as const },
  { title: "Completed Tasks", value: "3,842", change: "+8.4%", changeType: "up" as const },
  { title: "Revenue", value: "$48,320", change: "+18.2%", changeType: "up" as const },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* KPI Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <StatCard key={stat.title} {...stat} index={i} />
        ))}
      </div>

      {/* Main Content Grid - 2/3 and 1/3 split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnalyticsPanel />
        <ActivityFeed />
      </div>
    </DashboardLayout>
  );
}