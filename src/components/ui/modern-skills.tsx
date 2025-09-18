"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

interface TechItem {
  name: string;
  iconName: string;
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
        { name: "JavaScript", iconName: "js" },
        { name: "TypeScript", iconName: "typescript" },
        { name: "Python", iconName: "python" },
      ],
    },
    {
      title: "Backend & Databases",
      items: [
        { name: "Spring Boot", iconName: "spring" },
        { name: "Node.js", iconName: "nodejs" },
        { name: "MySQL", iconName: "mysql" },
        { name: "PostgreSQL", iconName: "postgresql" },
        { name: "MongoDB", iconName: "mongodb" },
        { name: "Redis", iconName: "redis" },
        { name: "GraphQL", iconName: "graphql" },
      ],
    },
    {
      title: "Web & Mobile Development",
      items: [
        { name: "React.js", iconName: "react" },
        { name: "", iconName: "nextjs" },
        { name: "React Native", iconName: "react" },
        { name: "HTML5", iconName: "html5" },
        { name: "CSS3", iconName: "css3" },
      ],
    },
    {
      title: "Testing",
      items: [
        { name: "Jest", iconName: "jest" },
        { name: "Cypress", iconName: "cypress" },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "AWS", iconName: "aws" },
        { name: "Docker", iconName: "docker" },
        { name: "Kubernetes", iconName: "kubernetes" },
        { name: "Git", iconName: "git" },
      ],
    },
    {
      title: "Observability & Monitoring",
      items: [{ name: "Grafana", iconName: "grafana" }],
    },
    {
      title: "AI & Data",
      items: [
        { name: "OpenAI", iconName: "openai" },
        { name: "Bedrock", iconName: "bedrock" },
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
              className="flex flex-col gap-16 lg:flex-row lg:items-center"
            >
              {/* Category Title */}
              <div className="w-full lg:w-1/3 flex-shrink-0 mb-6 lg:mb-0">
                <h3 className="text-3xl font-bold text-primary text-left lg:text-left">
                  {category.title}
                </h3>
              </div>

              {/* Tech Icons Row */}
              <div className=" flex flex-row items-baseline lg:w-2/3 flex flex-wrap gap-6 lg:gap-8 lg:pl-8">
                {category.items.map((tech, techIndex) => (
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
                    <div className="w-16 h-16  flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <StackIcon
                        name={tech.iconName}
                        className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                      />
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
