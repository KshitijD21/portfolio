"use client";

import { ExperienceCard } from "@/components/ui/experience-card";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "RKS Cloud",
    role: "Full Stack Developer",
    location: "Irvine, CA (Remote)",
    duration: "Dec 2022 – Dec 2024",
    description:
      "Cloudgov.ai is a cloud cost governance platform designed for enterprise clients to gain visibility into multi-cloud spend, optimize usage, and cut costs. It helps finance and engineering teams collaborate by turning complex AWS and Azure billing data into actionable insights.",
    achievements: [
      "Shipped 20+ features across analytics, billing, and reporting using JavaScript, Next.js, and TypeScript — reduced page load time by 40% and API latency by 60% with Redis caching.",
      "Built a cloud billing microservice in Spring Boot that transforms AWS and Azure CSV data into charts — improved cost forecasting clarity by 15%.",
      "Delivered AI-driven anomaly detection using Amazon Bedrock and SageMaker — saved clients $11K within 3 days and improved forecasting accuracy.",
      "Cut provisioning time by 70% with AWS CI/CD (CodePipeline, CloudFormation) and Kubernetes (EKS).",
    ],
    technologies: [
      "JavaScript",
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Redis",
      "AWS",
      "Kubernetes",
      "Bedrock",
      "SageMaker",
    ],
    image: "/cloudgov.png",
  },
];

export function WorkSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,85,0,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(204,85,0,0.05)_50%,transparent_51%)] bg-[length:60px_60px]" />
      </div>

      {/* Snap Container */}
      <div className="relative z-10 snap-y snap-mandatory overflow-y-auto h-screen">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="snap-start flex items-center justify-center min-h-screen px-4"
        >
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-[#CC5500] to-gray-900 dark:from-white dark:via-[#CC5500] dark:to-white bg-clip-text text-transparent"
            >
              My Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Case studies of impactful projects and professional experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#CC5500] to-transparent rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <div key={experience.id} className="snap-start">
            <ExperienceCard
              company={experience.company}
              role={experience.role}
              location={experience.location}
              duration={experience.duration}
              description={experience.description}
              achievements={experience.achievements}
              technologies={experience.technologies}
              image={experience.image}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
