"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket, Settings, Users } from "lucide-react";

interface SectionData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  items: string[];
}

interface UnifiedSectionProps {
  type: "services" | "about";
}

export function UnifiedSection({ type }: UnifiedSectionProps) {
  const aboutData: SectionData[] = [
    {
      icon: Settings,
      title: "How I Work",
      description: "",
      items: [
        "I don't jump straight into code; I first dig into why the problem exists.",
        'Once I know the "why," I research patterns, past solutions, and blind spots.',
        "I design systems that solve today's problem while scaling for tomorrow.",
        "Then I code — shipping in milestones, testing assumptions, and refining quickly.",
      ],
    },
    {
      icon: Users,
      title: "Working With People",
      description: "",
      items: [
        "I've collaborated with teammates across countries and time zones, learning clarity and patience.",
        'Often the "translator" between design and dev, I align creativity with technical reality.',
        "I value feedback loops — reviews, brainstorms, retros — to sharpen the product.",
        "For me, Agile isn't a checklist; stand-ups and planning keep momentum alive.",
      ],
    },
    {
      icon: Rocket,
      title: "Taking Ownership",
      description: "",
      items: [
        "To me, leadership is ownership — stepping in and owning outcomes.",
        "I led the frontend team at my last company, mentoring juniors and reviewing code.",
        "I took an iOS app from planning to App Store launch, guiding the team through crunch time.",
        "A proud win: helped a million-dollar client save $11K in just 3 days by re-engineering cloud costs.",
      ],
    },
  ];

  const data = aboutData;
  const sectionId = "about";
  const tagText = "ABOUT ME";
  const heading =
    "Here's a glimpse into how I approach problems, people, and projects.";

  return (
    <section id={sectionId} className="py-20 bg-gray-50">
      <div className="w-full  mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full flex flex-col items-center"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-center text-[#FF6B6B] text-lg font-bold rounded-full mb-6">
            {tagText}
          </div>
          <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6 max-w-4xl">
            {heading.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < heading.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            {/* Mobile: Horizontal scroll, Desktop: Grid */}
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:gap-12">
              {/* Mobile horizontal scroll container */}
              <div
                className="flex gap-8 overflow-x-auto pb-4 lg:hidden scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {data.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex-none w-80" // Fixed width for mobile cards
                  >
                    <Card className="p-8 h-full bg-transparent rounded-2xl shadow-none hover:shadow-none transition-all duration-300 border-0">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <section.icon className="w-6 h-6 text-[#FF6B6B]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-left text-xl font-bold text-gray-900 mb-4 ">
                        {section.title}
                      </h3>

                      {/* Description - Only show if not empty */}
                      {section.description && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                          {section.description}
                        </p>
                      )}

                      {/* Items List */}
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-left"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-900 text-sm font-medium leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Desktop grid */}
              <div className="hidden lg:contents">
                {data.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8 h-full bg-transparent rounded-2xl shadow-none hover:shadow-none transition-all duration-300 border-0">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <section.icon className="w-6 h-6 text-[#FF6B6B]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">
                        {section.title}
                      </h3>

                      {/* Description - Only show if not empty */}
                      {section.description && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                          {section.description}
                        </p>
                      )}

                      {/* Items List */}
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-left"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-900 text-sm font-medium leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// For backward compatibility, export the old component names
export function ModernAboutSection() {
  return <UnifiedSection type="services" />;
}

export function PersonalAboutSection() {
  return <UnifiedSection type="about" />;
}
