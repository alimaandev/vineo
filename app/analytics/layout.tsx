// app/analytics/layout.tsx – layout wrapper for analytics section
import React from 'react';

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0A0A0C] text-[#F4F4F6]">
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
