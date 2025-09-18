"use client";

import { motion } from "framer-motion";

export function ProfessionalHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
            Kshitij Dumbre
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-slate-600 font-light">
            Software Development Engineer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Experienced in building scalable applications, designing robust
          architectures, and leading development teams to deliver high-quality
          software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-600">Technologies Mastered</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
