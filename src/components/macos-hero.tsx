"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typewriterPhrases = [
  "full-stack applications.",
  "scalable backend systems.",
  "modern user interfaces.",
  "innovative solutions.",
  "websites that don't crash on demo day.",
];

export function MacOSHero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        const currentPhrase = typewriterPhrases[currentPhraseIndex];

        if (!isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));

          if (currentText === currentPhrase) {
            setIsPaused(true);
          }
        } else {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentPhraseIndex(
              (prev) => (prev + 1) % typewriterPhrases.length
            );
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100
    );

    return () => clearInterval(interval);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* macOS-style background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6">
            Kshitij Dumbre
          </h1>
          <div className="text-2xl md:text-3xl text-purple-200 mb-4 h-12 flex items-center justify-center">
            I build{" "}
            <span className="ml-2 text-white font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          A passionate Software Development Engineer crafting digital
          experiences with modern technologies and innovative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-purple-400 text-purple-200 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
