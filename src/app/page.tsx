"use client";

import { HeroSection } from "@/components/ui/hero";
import { Preloader } from "@/components/ui/preloader";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <main className="relative">
      <HeroSection />
    </main>
  );
}
