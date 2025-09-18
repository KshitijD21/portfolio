"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const dockApps = [
  { name: "Finder", icon: "🔍", color: "from-blue-400 to-blue-600" },
  { name: "Safari", icon: "🌐", color: "from-blue-500 to-cyan-500" },
  { name: "Messages", icon: "💬", color: "from-green-400 to-green-600" },
  { name: "Mail", icon: "📧", color: "from-blue-400 to-blue-600" },
  { name: "Calendar", icon: "📅", color: "from-red-400 to-red-600" },
  { name: "Photos", icon: "🖼️", color: "from-yellow-400 to-yellow-600" },
  { name: "Music", icon: "🎵", color: "from-red-400 to-pink-500" },
  { name: "Podcast", icon: "🎙️", color: "from-purple-400 to-purple-600" },
];

export function MacOSDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/20 p-2">
        <div className="flex items-end space-x-1">
          {dockApps.map((app, index) => {
            const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 0;
            const scale = hoveredIndex !== null ? Math.max(1.2 - distance * 0.15, 0.8) : 1;
            
            return (
              <motion.div
                key={app.name}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white text-xl cursor-pointer shadow-lg`}
                whileHover={{ scale: 1.3 }}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                title={app.name}
              >
                {app.icon}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}