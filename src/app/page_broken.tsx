"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnhancedHeroSection } from "@/components/ui/enhanced-hero";
import { SoftSkillsSection } from "@/components/ui/enhanced-skills";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Preloader } from "@/components/ui/preloader";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Coffee,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    emoji: "🚀",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "3+",
    label: "Years Experience",
    emoji: "⭐",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "15+",
    label: "Technologies",
    emoji: "💻",
    color: "from-green-500 to-teal-500",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    emoji: "🎯",
    color: "from-orange-500 to-red-500",
  },
];

const quickTechStack = [
  { name: "React", emoji: "⚛️", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", emoji: "🚀", color: "from-gray-800 to-gray-900" },
  { name: "TypeScript", emoji: "📘", color: "from-blue-600 to-blue-700" },
  { name: "Node.js", emoji: "🟢", color: "from-green-500 to-green-600" },
  { name: "Python", emoji: "🐍", color: "from-yellow-500 to-blue-500" },
  { name: "AWS", emoji: "☁️", color: "from-orange-400 to-orange-600" },
];

const recentHighlights = [
  {
    title: "Full-Stack E-commerce Platform",
    description:
      "Built a scalable e-commerce solution with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    emoji: "🛒",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI-Powered Chat Application",
    description:
      "Developed an intelligent chat app using OpenAI API and real-time WebSocket connections",
    tech: ["Next.js", "OpenAI", "WebSocket", "Prisma"],
    emoji: "🤖",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud Infrastructure Migration",
    description:
      "Led migration of legacy systems to AWS, improving performance by 300%",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
    emoji: "☁️",
    gradient: "from-green-500 to-teal-500",
  },
];

export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      <div 
        className={`relative min-h-screen transition-opacity duration-500 ${
          showPreloader ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <GradientBackground />

        <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <EnhancedHeroSection />

        {/* Quick Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Professional Achievements
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                📊{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Impact & Results
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.emoji}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tech Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                <Code className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Technology Stack
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                🛠️{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Core Technologies
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                The technologies I use to bring ideas to life
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {quickTechStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-4">
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {tech.emoji}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {tech.name}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/skills">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  View All Skills
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Recent Highlights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Recent Work
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                ✨{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Recent Highlights
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Some of my latest projects and achievements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentHighlights.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                    <CardHeader className="pb-4">
                      <div
                        className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {project.emoji}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Coffee className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  View All Projects
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Soft Skills Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Professional Skills
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                🤝{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Beyond the Code
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                The soft skills that make collaboration and project success
                possible
              </p>
            </motion.div>

            <SoftSkillsSection />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                🚀 Let's Build Something Amazing Together
              </h2>

              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Ready to turn your ideas into reality? Let's discuss your next
                project and create something extraordinary.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[160px]"
                  >
                    <Users className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Get In Touch
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>

                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[160px]"
                  >
                    <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
