import { UserButton } from "@clerk/nextjs";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 h-14 bg-[#0A0A0C]/80 backdrop-blur-xl border-b border-[#222227] flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-4">
        <h2 className="text-sm font-medium text-[#F4F4F6]">Dashboard</h2>
        <span className="text-[#8A8A93] text-xs">/</span>
        <span className="text-xs text-[#8A8A93]">Overview</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-xs text-[#8A8A93] font-medium">
          Today, Oct 24
        </div>
        <UserButton />
      </div>
    </header>
  );
}