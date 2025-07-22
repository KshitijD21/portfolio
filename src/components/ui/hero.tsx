"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/KshitijD21",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kshitij-dhurve",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:kshitijdhurve@gmail.com",
    label: "Email",
  },
];

const techStack = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-100 to-orange-100 dark:from-pink-950 dark:to-orange-950 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            👋 Hello, I'm Kshitij
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Software
          <br />
          <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
            Development
          </span>
          <br />
          Engineer
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Passionate about building scalable systems and solving complex
          problems. I specialize in full-stack development with expertise in
          modern technologies.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
            >
              <Badge variant="secondary" className="text-sm">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button size="lg" asChild className="text-base">
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="text-base">
            <Link href="/contact">Get In Touch</Link>
          </Button>

          <Button variant="ghost" size="lg" asChild className="text-base">
            <Link href="/resume.pdf" target="_blank">
              <Download className="mr-2 w-4 h-4" />
              Resume
            </Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              </Button>
            );
          })}
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12"
        >
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Available for hire
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
