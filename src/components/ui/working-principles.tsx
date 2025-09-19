"use client";

import { motion } from "framer-motion";
import { Settings, Users, Target } from "lucide-react";

const workingPrinciples = [
  {
    icon: Settings,
    title: "How I Work",
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    points: [
      "I don&apos;t jump straight into code; I first dig into why the problem exists.",
      "Once I know the \"why,\" I research patterns, past solutions, and blind spots.",
      "I design systems that solve today&apos;s problem while scaling for tomorrow.",
      "Then I code — shipping in milestones, testing assumptions, and refining quickly."
    ]
  },
  {
    icon: Users,
    title: "Working With People",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    points: [
      "I&apos;ve collaborated with teammates across countries and time zones, learning clarity and patience.",
      "Often the \"translator\" between design and dev, I align creativity with technical reality.",
      "I value feedback loops — reviews, brainstorms, retros — to sharpen the product.",
      "For me, Agile isn&apos;t a checklist; stand-ups and planning keep momentum alive."
    ]
  },
  {
    icon: Target,
    title: "Taking Ownership",
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    points: [
      "To me, leadership is ownership — stepping in and owning outcomes.",
      "I led the frontend team at my last company, mentoring juniors and reviewing code.",
      "I took an iOS app from planning to App Store launch, guiding the team through crunch time.",
      "A proud win: helped a million-dollar client save $11K in just 3 days by re-engineering cloud costs."
    ]
  }
];

export function WorkingPrinciples() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 mb-4">
            Here&apos;s how I can help bring your ideas to{" "}
            <span className="text-[#CC5500]">life</span>.
          </h2>
        </motion.div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {workingPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className={`w-16 h-16 ${principle.bgColor} rounded-full flex items-center justify-center mb-6`}
              >
                <principle.icon className={`w-8 h-8 ${principle.iconColor}`} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {principle.title}
              </h3>

              {/* Points */}
              <ul className="space-y-4 text-left max-w-sm">
                {principle.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + pointIndex * 0.1 + 0.5
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#CC5500] mt-2 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed text-sm">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}