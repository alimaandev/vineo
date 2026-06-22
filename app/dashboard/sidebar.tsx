"use client";

import { UserButton } from "@clerk/nextjs";
import {
  LayoutDashboard,
  FolderKanban,
  TrendingUp,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },

  { name: "Projects", icon: FolderKanban, href: "/projects" },
  { name: "Team", icon: Users, href: "/team" },
  { name: "Analytics", icon: TrendingUp, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
];


export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-[#121216] border-r border-[#222227] flex flex-col justify-between z-50">
      {/* Logo & Nav */}
      <div className="px-4 pt-6">
        <div className="flex items-center h-8 px-2 mb-8">
          <span className="text-lg font-semibold tracking-tight text-[#F4F4F6]">
            Vineo<span className="text-[#9D4EDD]">.</span>
          </span>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 h-9 px-3 rounded-lg text-sm font-medium transition-all duration-150 relative
                ${item.href === usePathname()
                  ? "bg-[#1A1A20] text-[#F4F4F6]"
                  : "text-[#8A8A93] hover:text-[#F4F4F6] hover:bg-[#1A1A20]/50"
                }`}
            >

              {/* Active Indicator - The "Linear" look */}
              {item.href === usePathname() && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#00F0FF] rounded-r-full" />
              )}

              <item.icon size={18} className="shrink-0" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom User Section */}
      <div className="px-4 pb-6">
        <div className="flex items-center gap-3 h-10 px-3 rounded-lg border-t border-[#222227] pt-6 mt-4">
          <UserButton />
          <span className="text-sm text-[#8A8A93] truncate">Account</span>
        </div>
      </div>
    </aside>
  );
}