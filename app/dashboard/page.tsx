import { DashboardLayout } from "./DashboardLayout";
import { StatCard } from "./StatCard";
import { AnalyticsPanel } from "./AnalyticsPanel";
import { ActivityFeed } from "./ActivityFeed";

async function getDashboardStats() {
  import { getClerkUserId } from '@/utils/clerk';

async function getDashboardStats() {
  const supabase = (await import("@/lib/supabase")).default;
  const userId = getClerkUserId();

  const [
    { count: activeProjectsCount },
    { count: completedTasksCount },
    { count: reportsCount },
  ] = await Promise.all([
    supabase
      .from("project")
      .select("id", { count: "exact", head: true })
      .eq("is_active", true)
      .eq("user_id", userId),

    supabase
      .from("analytics_event")
      .select("id", { count: "exact", head: true })
      .in("type", [
        "task_completed",
        "task_complete",
        "completed_task",
        "taskDone",
      ])
      .eq("user_id", userId),

    supabase.from("report").select("id", { count: "exact", head: true }).eq("user_id", userId),
  ]);

  return {
    activeProjectsCount: activeProjectsCount ?? 0,
    completedTasksCount: completedTasksCount ?? 0,
    revenueValue: reportsCount ?? 0,
  };
}

export default async function DashboardPage() {
  const {
    activeProjectsCount,
    completedTasksCount,
    revenueValue,
  } = await getDashboardStats();


  const [
    { count: activeProjectsCount },
    { count: completedTasksCount },
    { count: reportsCount },
  ] = await Promise.all([
    supabase
      .from("Project")
      .select("id", { count: "exact", head: true })
      .eq("isActive", true),

    supabase
      .from("analytics_event")
      .select("id", { count: "exact", head: true })
      .in("type", [
        "task_completed",
        "task_complete",
        "completed_task",
        "taskDone",
      ]),

    supabase.from("Report").select("id", { count: "exact", head: true }),
  ]);

  return {
    activeProjectsCount: activeProjectsCount ?? 0,
    completedTasksCount: completedTasksCount ?? 0,
    revenueValue: reportsCount ?? 0,
  };
}

export default async function DashboardPage() {
  const {
    activeProjectsCount,
    completedTasksCount,
    revenueValue,
  } = await getDashboardStats();

  const stats = [
    {
      title: "Active Projects",
      value: activeProjectsCount.toLocaleString(),
      change: "—",
      changeType: "up" as const,
    },
    {
      title: "Completed Tasks",
      value: completedTasksCount.toLocaleString(),
      change: "—",
      changeType: "up" as const,
    },
    {
      title: "Reports",
      value: revenueValue.toLocaleString(),
      change: "—",
      changeType: "up" as const,
    },
  ];

  return (
    <DashboardLayout>
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <StatCard key={stat.title} {...stat} index={i} />
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnalyticsPanel />
        <ActivityFeed />
      </div>
    </DashboardLayout>
  );
}