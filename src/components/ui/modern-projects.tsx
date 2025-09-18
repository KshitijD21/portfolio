"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ModernProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/yourusername/taskmanager",
      liveUrl: "https://your-taskmanager-demo.com",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts and interactive maps.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Express", "Weather API", "Mapbox"],
      githubUrl: "https://github.com/yourusername/weather",
      liveUrl: "https://your-weather-demo.com",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on that showcase my
            skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94], // smoother easing
              }}
              viewport={{ once: true }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[400px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4" variant="default">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
