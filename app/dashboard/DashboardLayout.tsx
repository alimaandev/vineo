import { Sidebar } from "./sidebar"
import { Topbar } from "./Topbar"
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0A0A0C] text-[#F4F4F6] overflow-hidden">
      {/* Sidebar takes fixed width, flex-shrink-0 prevents collapsing */}
      <Sidebar />
      
      {/* Main area takes remaining width, flex-col to stack topbar and content */}
      <div className="flex-1 flex flex-col min-w-0 ml-[240px]">
        <Topbar />
        
        {/* Scrollable content area with internal padding */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}