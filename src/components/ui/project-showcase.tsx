"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  year: string;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern architecture",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js, featuring user authentication, payment processing, inventory management, and admin dashboard. Implements modern design patterns and optimized for performance.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/KshitijD21/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.example.com",
    featured: true,
    year: "2024",
    status: "completed",
  },
  {
    id: "2",
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A modern task management system with real-time collaboration features, drag-and-drop functionality, team management, and detailed analytics. Built for scalability and performance.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/KshitijD21/task-manager",
    liveUrl: "https://taskmanager-demo.example.com",
    featured: true,
    year: "2024",
    status: "completed",
  },
  {
    id: "3",
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for business intelligence and reporting",
    longDescription:
      "A comprehensive analytics dashboard with interactive charts, real-time data processing, and customizable reports. Features advanced filtering, data export, and user role management.",
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "Redis"],
    githubUrl: "https://github.com/KshitijD21/analytics-dashboard",
    featured: false,
    year: "2023",
    status: "completed",
  },
  {
    id: "4",
    title: "Mobile Learning App",
    description: "Cross-platform educational app with interactive content",
    longDescription:
      "A mobile-first learning platform with interactive lessons, progress tracking, offline support, and gamification elements. Supports multiple content types and adaptive learning.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com/KshitijD21/learning-app",
    featured: false,
    year: "2023",
    status: "completed",
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "AI-powered tool for automated content creation",
    longDescription:
      "An innovative content generation platform leveraging AI models for creating blog posts, social media content, and marketing materials. Features template management and collaboration tools.",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/KshitijD21/ai-content-generator",
    featured: true,
    year: "2024",
    status: "in-progress",
  },
  {
    id: "6",
    title: "DevOps Automation Suite",
    description: "Comprehensive DevOps toolkit for CI/CD automation",
    longDescription:
      "A complete DevOps automation solution with CI/CD pipeline management, infrastructure monitoring, deployment automation, and team collaboration features.",
    technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    githubUrl: "https://github.com/KshitijD21/devops-suite",
    featured: false,
    year: "2024",
    status: "in-progress",
  },
];

const statusColors = {
  completed:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "in-progress":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  planned: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
};

interface ProjectShowcaseProps {
  showFeaturedOnly?: boolean;
  maxItems?: number;
}

export function ProjectShowcase({
  showFeaturedOnly = false,
  maxItems,
}: ProjectShowcaseProps) {
  const filteredProjects = showFeaturedOnly
    ? projects.filter((project) => project.featured)
    : projects;

  const displayProjects = maxItems
    ? filteredProjects.slice(0, maxItems)
    : filteredProjects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </div>
                {project.featured && (
                  <Star className="w-5 h-5 text-yellow-500 fill-current ml-2 flex-shrink-0" />
                )}
              </div>

              <div className="flex items-center gap-2 mt-2">
                <Badge className={statusColors[project.status]}>
                  {project.status.replace("-", " ")}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  {project.year}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-2 pt-4">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
              )}

              {project.liveUrl && (
                <Button size="sm" asChild className="flex-1">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
