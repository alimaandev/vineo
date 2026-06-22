import Navbar from "../components/Navbar";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0A0A0C] text-[#F4F4F6]">
      <Navbar />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
