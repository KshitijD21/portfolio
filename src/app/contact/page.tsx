"use client";

import { Navigation } from "@/components/navigation";
import { FormspreeContactForm } from "@/components/ui/formspree-contact";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FormspreeContactForm formspreeId="xeolyqqy" />
      </div>
    </div>
  );
}
