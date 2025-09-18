"use client";

import { Navigation } from "@/components/navigation";
import { ModernAboutSection } from "@/components/ui/modern-about";
import { ModernContactSection } from "@/components/ui/modern-contact";
import { ModernHero } from "@/components/ui/modern-hero";
import { ModernProjectsSection } from "@/components/ui/modern-projects";
import { ModernSkillsSection } from "@/components/ui/modern-skills";
import { Preloader } from "@/components/ui/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <Preloader />
      </AnimatePresence>
    );
  }

  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <ModernHero />

      {/* About/Services Section */}
      <ModernAboutSection />

      {/* Skills Section */}
      <ModernSkillsSection />

      {/* Projects Section */}
      <ModernProjectsSection />

      {/* Contact Section */}
      <ModernContactSection />
    </main>
  );
}
