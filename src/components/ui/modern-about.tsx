"use client";

import { WorkingPrinciples } from "./working-principles";

export function UnifiedSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <WorkingPrinciples />
    </section>
  );
}

// For backward compatibility, export the old component names
export function ModernAboutSection() {
  return <UnifiedSection />;
}

export function PersonalAboutSection() {
  return <UnifiedSection />;
}
