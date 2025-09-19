"use client";

import { ResumeActions } from "@/components/ui/resume-actions";
import { SocialIcons } from "@/components/ui/social-icons";
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
    src: "/profile-photo.png",
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
    src: "/profile-photo.png",
    borderColor: "border-purple-300",
    shadowColor: "shadow-purple-200/50",
    bgGradient: "bg-gradient-to-br from-purple-100 to-pink-100",
  },
  {
    src: "/Kshitij.png",
    borderColor: "border-rose-300",
    shadowColor: "shadow-rose-200/50",
    bgGradient: "bg-gradient-to-br from-rose-100 to-pink-100",
  },
  {
    src: "/profile-photo.png",
    borderColor: "border-teal-300",
    shadowColor: "shadow-teal-200/50",
    bgGradient: "bg-gradient-to-br from-teal-100 to-cyan-100",
  },
];

export function ModernHero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [profileConfig] = useState(
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20"
    >
      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Mobile: Profile image first (above content) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden relative flex justify-center order-1"
        >
          <div className="relative">
            {/* Mobile profile image - smaller and circular */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden shadow-xl ${profileConfig.shadowColor} border-2 ${profileConfig.borderColor} ${profileConfig.bgGradient} p-1`}
              >
                <Image
                  src={profileConfig.src}
                  alt="Kshitij Dumbre"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover object-center rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text content - centered on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-center lg:text-left order-2"
        >
          {/* Small greeting with wave emoji */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium"
          >
            Hi, I&apos;m Kshitij 👋
          </motion.p>

          {/* Main tagline - responsive font sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-800 leading-tight"
          >
            I design and build software that handles real users, real data, and
            real pressure.
          </motion.h1>

          {/* Typewriter animation - responsive sizing with fixed height */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium h-16 sm:h-20 lg:h-24 flex items-start"
          >
            <div className="leading-relaxed">
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
            </div>
          </motion.div>

          {/* CTA Buttons - centered on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 sm:gap-6 pt-2 items-center lg:items-start"
          >
            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Check My Work
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-full sm:w-auto"
              >
                <ResumeActions />
              </motion.div>
            </div>

            {/* Social Icons - centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialIcons />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop: Profile image on right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex relative justify-center lg:justify-end lg:col-span-5 order-3"
        >
          <div className="relative">
            {/* Desktop profile image */}
            <div className="relative w-[22rem] h-[28rem] xl:w-[26rem] xl:h-[32rem]">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden shadow-2xl ${profileConfig.shadowColor} border-4 ${profileConfig.borderColor} ${profileConfig.bgGradient} p-2`}
              >
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
