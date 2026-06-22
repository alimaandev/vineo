// app/analytics/page.tsx – simplified Analytics dashboard with placeholder charts
import React from 'react';
import AnalyticsChart from '@/components/AnalyticsChart';

export const metadata = {
  title: 'Analytics',
  description: 'Overview of usage and performance metrics',
};

export default function AnalyticsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-[#F4F4F6]">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsChart title="Page Views" />
        <AnalyticsChart title="Active Users" />
        <AnalyticsChart title="Revenue" />
        <AnalyticsChart title="Conversion Rate" />
      </div>
    </section>
  );
}
