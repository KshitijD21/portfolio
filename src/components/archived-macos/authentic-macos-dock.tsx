"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const dockApps = [
  { name: "About", icon: "👤", href: "/about", color: "from-blue-400 to-blue-600" },
  { name: "Experience", icon: "💼", href: "/experience", color: "from-green-400 to-green-600" },
  { name: "Education", icon: "🎓", href: "/education", color: "from-purple-400 to-purple-600" },
  { name: "Skills", icon: "⚡", href: "/skills", color: "from-yellow-400 to-orange-500" },
  { name: "Projects", icon: "🚀", href: "/projects", color: "from-red-400 to-pink-500" },
  { name: "Contact", icon: "📧", href: "/contact", color: "from-cyan-400 to-blue-500" },
];

export function AuthenticMacOSDock() {
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
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-3 shadow-2xl">
        <div className="flex items-end space-x-2">
          {dockApps.map((app, index) => {
            const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 0;
            const scale = hoveredIndex !== null ? Math.max(1.5 - distance * 0.2, 0.8) : 1;
            
            return (
              <motion.a
                key={app.name}
                href={app.href}
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white text-2xl cursor-pointer shadow-lg relative group`}
                whileHover={{ scale: 1.4, y: -8 }}
                animate={{ scale, y: hoveredIndex === index ? -4 : 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 30,
                  duration: 0.1
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {app.icon}
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {app.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
                
                {/* Indicator dot */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-70"></div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}