"use client";

import { Navigation } from "@/components/navigation";
import { WorkShowcase } from "@/components/ui/work-showcase";

export default function ExperiencePage() {
  return (
    <main className="relative">
      <Navigation />
      {/* <WorkSection /> */}
      <WorkShowcase />
    </main>
  );
}
