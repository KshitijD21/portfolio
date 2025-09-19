"use client";

import { Navigation } from "@/components/navigation";
import { FormspreeContactForm } from "@/components/ui/formspree-contact";
import { ModernAboutSection } from "@/components/ui/modern-about";
import { ModernHero } from "@/components/ui/modern-hero";
import { ModernSkillsSection } from "@/components/ui/modern-skills";
import { Preloader } from "@/components/ui/preloader";
import { WorkShowcase } from "@/components/ui/work-showcase";
import { WorkingPrinciples } from "@/components/ui/working-principles";
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
      <div className="snap-start">
        <ModernHero />
      </div>

      {/* Working Principles Section */}
      <div className="snap-start">
        <WorkingPrinciples />
      </div>

      {/* About/Services Section */}
      <div className="snap-start">
        <ModernAboutSection />
      </div>

      {/* Featured Work Section */}
      <WorkShowcase />

      {/* Skills Section */}
      <div className="snap-start">
        <ModernSkillsSection />
      </div>

      {/* Formspree Contact Form */}
      <div className="snap-start">
        <FormspreeContactForm formspreeId="xeolyqqy" />
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </main>
  );
}
