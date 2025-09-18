"use client";

import { motion } from "framer-motion";
import {
  SiAmazon,
  SiApachekafka,
  SiCss3,
  SiCypress,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiSpring,
  SiTypescript,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

export function ModernSkillsSection() {
  const techStack: TechCategory[] = [
    {
      title: "Programming Languages",
      items: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      title: "Backend & Databases",
      items: [
        { name: "Spring Boot", icon: SiSpring },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "Kafka", icon: SiApachekafka },
      ],
    },
    {
      title: "Web & Mobile Development",
      items: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "GraphQL", icon: SiGraphql },
      ],
    },
    {
      title: "Testing",
      items: [
        { name: "Jest", icon: SiJest },
        { name: "Cypress", icon: SiCypress },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: SiAmazon },
        { name: "Docker", icon: SiDocker },
        { name: "Git", icon: SiGit },
        { name: "GitHub Actions", icon: SiGithubactions },
      ],
    },
    {
      title: "Observability",
      items: [
        { name: "Prometheus", icon: SiPrometheus },
        { name: "Grafana", icon: SiGrafana },
      ],
    },
    {
      title: "AI & Data",
      items: [
        { name: "OpenAI", icon: SiOpenai },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-0 w-full flex flex-col items-center"
        >
          <div className="inline-block px-8 py-2 bg-primary/10 text-center text-[#FF6B6B] text-lg font-bold rounded-full mb-8">
            MY STACK
          </div>
        </motion.div>

        <div className="space-y-16">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-center"
            >
              {/* Category Title */}
              <div className="w-full lg:w-1/3 flex-shrink-0 mb-6 lg:mb-0">
                <h3 className="text-3xl font-bold text-[#8D7662] text-left lg:text-left">
                  {category.title}
                </h3>
              </div>

              {/* Tech Icons Row */}
              <div className="w-full lg:w-2/3 flex flex-wrap gap-6 lg:gap-8 lg:pl-8">
                {category.items.slice(0, 6).map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + techIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-row items-center group cursor-pointer"
                  >
                    {/* Tech Icon */}
                    <div className="w-16 h-16 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <tech.icon className="w-12 h-12 transition-all duration-300 group-hover:scale-110" />
                    </div>

                    {/* Tech Name */}
                    <span className="text-sm font-medium text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
