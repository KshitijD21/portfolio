"use client";

import { AuthenticMacOSDock } from "@/components/authentic-macos-dock";
import { MacOSHero } from "@/components/macos-hero";
import { MacOSNotch } from "@/components/macos-notch";

export default function ModernPage() {
  return (
    <main className="relative min-h-screen">
      {/* macOS-style notch */}
      <MacOSNotch />

      {/* Hero Section with macOS styling */}
      <MacOSHero />

      {/* macOS-style dock navigation */}
      <AuthenticMacOSDock />
    </main>
  );
}
