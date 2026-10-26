import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DashboardSidebar />
      <main id="main" className="min-w-0 flex-1 px-4 py-8 sm:px-8">
        {children}
      </main>
    </div>
  );
}
