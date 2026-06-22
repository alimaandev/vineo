// app/projects/[projectId]/layout.tsx – layout for a single project page
import Navbar from '@/components/Navbar';
import React from 'react';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0A0A0C] text-[#F4F4F6]">
      <Navbar />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
