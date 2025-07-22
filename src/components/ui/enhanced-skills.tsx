"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Code,
  Database,
  Globe,
  Heart,
  Lightbulb,
  MessageSquare,
  Server,
  Smartphone,
  Target,
  Users,
  Zap,
} from "lucide-react";

// Skills data
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React & Next.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "HTML5 & CSS3", level: 95, icon: "🌐" },
      { name: "JavaScript (ES6+)", level: 93, icon: "🟨" },
      { name: "Responsive Design", level: 90, icon: "📱" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Node.js & Express", level: 88, icon: "🟢" },
      { name: "Python & Django", level: 85, icon: "🐍" },
      { name: "REST APIs", level: 92, icon: "🔌" },
      { name: "GraphQL", level: 80, icon: "💠" },
      { name: "Microservices", level: 82, icon: "🔧" },
      { name: "Authentication", level: 88, icon: "🔐" },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PostgreSQL", level: 90, icon: "🐘" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "AWS Services", level: 82, icon: "☁️" },
      { name: "Docker & K8s", level: 80, icon: "🐳" },
      { name: "Redis", level: 78, icon: "🔴" },
      { name: "Firebase", level: 75, icon: "🔥" },
    ],
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "React Native", level: 80, icon: "📱" },
      { name: "Git & GitHub", level: 95, icon: "🔄" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "Jest & Testing", level: 82, icon: "🧪" },
      { name: "Webpack/Vite", level: 78, icon: "📦" },
    ],
  },
];

// Soft skills data
const softSkills = [
  {
    title: "Problem Solving",
    description: "Breaking down complex challenges into manageable solutions",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-500",
    level: 95,
  },
  {
    title: "Team Collaboration",
    description: "Working effectively with diverse teams and stakeholders",
    icon: Users,
    color: "from-blue-500 to-purple-500",
    level: 92,
  },
  {
    title: "Communication",
    description: "Clear technical communication and documentation",
    icon: MessageSquare,
    color: "from-green-500 to-blue-500",
    level: 88,
  },
  {
    title: "Adaptability",
    description: "Quick learning and adaptation to new technologies",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    level: 90,
  },
  {
    title: "Leadership",
    description: "Mentoring juniors and leading technical initiatives",
    icon: Target,
    color: "from-red-500 to-orange-500",
    level: 85,
  },
  {
    title: "Empathy",
    description: "Understanding user needs and team dynamics",
    icon: Heart,
    color: "from-pink-500 to-red-500",
    level: 90,
  },
];

// Main skills grid component
export function EnhancedSkillsGrid() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Category Header */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}
            >
              <category.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {category.skills.length} technologies
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group"
              >
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{skill.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}% proficiency
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Progress value={skill.level} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Soft skills section component
export function SoftSkillsSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {skill.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(skill.level / 20)
                                ? "bg-gradient-to-r " + skill.color
                                : "bg-gray-200 dark:bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Brain className="w-8 h-8" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-4">
              Continuous Learning Mindset
            </h3>

            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
              I believe in the power of continuous learning and staying updated
              with the latest technologies. My approach combines technical
              expertise with strong soft skills to deliver exceptional results
              and foster positive team dynamics.
            </p>

            <div className="flex justify-center gap-8 mt-8">
              {[
                { label: "Years Experience", value: "3+", icon: Award },
                { label: "Technologies", value: "15+", icon: Code },
                { label: "Projects Completed", value: "50+", icon: Target },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
