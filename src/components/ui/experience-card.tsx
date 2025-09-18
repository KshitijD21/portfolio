"use client";

import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { Building2, Calendar, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  image?: string;
  index: number;
}

export function ExperienceCard({
  company,
  role,
  location,
  duration,
  description,
  achievements,
  technologies,
  image,
  index,
}: ExperienceCardProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto">
        {/* Desktop: 2 columns, Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="order-1 lg:order-1 relative"
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              {image ? (
                <Image
                  src={image}
                  alt={`${company} workspace`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Building2 className="w-24 h-24 text-gray-400 dark:text-gray-600" />
                </div>
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="order-2 lg:order-2 space-y-6"
          >
            {/* Header Card */}
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              {/* Company & Role */}
              <div className="space-y-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  <span className="text-[#CC5500]">{company}</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  {role}
                </h3>

                {/* Location & Duration */}
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#CC5500]" />
                    <span className="text-sm font-medium">{location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#CC5500]" />
                    <span className="text-sm font-medium">{duration}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  {description}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.5 + idx * 0.1 },
                        },
                      }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#CC5500] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      variants={badgeVariants}
                      style={{ transitionDelay: `${0.7 + idx * 0.05}s` }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-gray-900 dark:bg-gray-700 text-white hover:bg-[#CC5500] transition-colors duration-200 px-3 py-1.5 text-sm font-medium"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
