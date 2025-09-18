"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6">
                <Target className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">
                  Portfolio Showcase
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                🚀{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  My Projects
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A curated collection of projects that showcase my technical
                skills, creativity, and passion for building exceptional digital
                experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Content Placeholder */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-gray-600">Projects showcase coming soon...</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
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
                💡 Have a Project in Mind?
              </h2>

              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s collaborate and turn your ideas into reality.
                I&apos;m always excited to work on innovative projects that make
                a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
