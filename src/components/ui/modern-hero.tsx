"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const typewriterPhrases = [
  "apps that scale.",
  "websites that don't crash on demo day.",
  "platforms that handle real traffic.",
  "software your users actually enjoy.",
  "features nobody asked for… but everyone needed.",
];

// Profile photo configurations with different styles
const profileConfigs = [
  {
    src: "/Kshitij.png",
    borderColor: "border-amber-300",
    shadowColor: "shadow-amber-200/50",
    bgGradient: "bg-gradient-to-br from-amber-100 to-orange-100",
  },
  {
    src: "/profile photo.png",
    borderColor: "border-blue-300",
    shadowColor: "shadow-blue-200/50",
    bgGradient: "bg-gradient-to-br from-blue-100 to-indigo-100",
  },
  {
    src: "/Kshitij.png",
    borderColor: "border-green-300",
    shadowColor: "shadow-green-200/50",
    bgGradient: "bg-gradient-to-br from-green-100 to-emerald-100",
  },
  {
    src: "/profile photo.png",
    borderColor: "border-purple-300",
    shadowColor: "shadow-purple-200/50",
    bgGradient: "bg-gradient-to-br from-purple-100 to-pink-100",
  },
];

export function ModernHero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [profileConfig, setProfileConfig] = useState(
    () => profileConfigs[Math.floor(Math.random() * profileConfigs.length)]
  );

  useEffect(() => {
    const currentPhrase = typewriterPhrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (!isDeleting) {
          // Typing
          if (currentText.length < currentPhrase.length) {
            setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex(
              (prev) => (prev + 1) % typewriterPhrases.length
            );
          }
        }
      },
      isPaused ? 2000 : isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Small greeting with wave emoji */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl text-gray-600 font-medium"
          >
            Hi, I'm Kshitij 👋
          </motion.p>

          {/* Main tagline in bold brown - forced to exactly 2 lines */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold text-amber-800 leading-tight"
          >
            I design and build software that handles real users, real data, and
            real pressure.
          </motion.h1>

          {/* Typewriter animation with static "I build" prefix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium"
          >
            <span className="text-gray-900">I build </span>
            <span className="relative text-gray-800">
              {currentText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-gray-800"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* CTA Buttons with enhanced padding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-16 py-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[4rem] min-w-[200px] border-2 border-gray-200 hover:border-gray-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Check My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-16 py-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[4rem] min-w-[200px]"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side - Profile image (oval shape with random styling) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end lg:col-span-5"
        >
          <div className="relative">
            {/* Main profile image - oval shape with random styling */}
            <div className="relative w-96 h-[30rem] lg:w-[26rem] lg:h-[32rem]">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden shadow-2xl ${profileConfig.shadowColor} border-4 ${profileConfig.borderColor} ${profileConfig.bgGradient} p-2`}
              >
                {/* Profile image */}
                <Image
                  src={profileConfig.src}
                  alt="Kshitij Dumbre"
                  width={450}
                  height={550}
                  className="w-full h-full object-cover object-center rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-4 w-20 h-20 bg-amber-300/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -right-4 w-16 h-16 bg-gray-400/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
