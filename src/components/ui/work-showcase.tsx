"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  Github,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";

const workData = [
  {
    id: 2,
    title: "Cloudgov",
    company: "RKS Cloud",
    location: "Irvine, CA",
    duration: "Dec 2022 – Dec 2024",
    tag: "Professional Experience",
    tagIcon: Briefcase,
    // subtitle:
    //   "Cloud cost governance platform for enterprise clients to optimize multi-cloud spend.",
    description:
      "Cloudgov is an enterprise-grade cloud cost governance platform designed to provide complete visibility into multi-cloud spending across AWS and Azure environments. The platform transforms complex billing data into actionable insights, enabling finance and engineering teams to collaborate effectively on cost optimization.",
    achievements: [
      "Shipped 20+ features using JavaScript, Next.js, and TypeScript, reduced page load time by 40% and API latency by 60% through Redis caching.",
      "Developed cloud billing microservice transforming AWS and Azure CSV data into chart presentations using Java Spring Boot.",
      "Delivered AI-driven anomaly detection using Amazon Bedrock and SageMaker, enabling clients to cut costs by $11K within 3 days.",
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
    githubUrl: "https://github.com/yourusername/cloudgov",
    liveUrl: "https://cloudgov.ai",
  },
  {
    id: 3,
    title: "TRZR",
    company: "TRZR Inc.",
    location: "Irvine, CA",
    duration: "Dec 2022 – Dec 2024",
    tag: "Professional Experience",
    tagIcon: Briefcase,
    // subtitle:
    //   "Mobile sneaker collection and resale marketplace for discovering, showcasing, and trading sneakers.",
    description:
      "TRZR is a mobile sneaker collection and resale marketplace where users can discover, showcase, and trade sneakers. The platform was built to handle large-scale sneaker datasets with real-time search, smooth mobile experiences, and reliable backend services to keep buyers and sellers engaged.",
    achievements: [
      "Led iOS development: Built 40+ reusable screens with React Native, boosted UI performance by 25%.",
      "Designed Spring Boot + GraphQL APIs with async workers and multi-threading for 80K+ records.",
      "Implemented optimized search with Elasticsearch, reduced query time from 1s → 400ms.",
      "Streamlined iOS release cycle with EAS, achieving 98% first-attempt App Store approval.",
    ],
    technologies: [
      "React Native",
      "Spring Boot",
      "GraphQL",
      "Elasticsearch",
      "Redis",
      "EAS",
      "iOS",
      "TypeScript",
      "Java",
    ],
    image: "/trzr.png",
    githubUrl: "https://github.com/yourusername/trzr",
    liveUrl: "https://trzr.app",
  },
  {
    id: 4,
    title: "Xubikle — Freelance Web Developer",
    company: "Xubikle",
    location: "Remote",
    duration: "Aug 2022 – Nov 2022",
    tag: "Professional Experience",
    tagIcon: Briefcase,
    description:
      "Xubikle is a global technology company building enterprise software and SaaS solutions to empower the future of work, with products like TalentX (career networking), collaborative whiteboards, and open-source developer tools.",
    achievements: [
      "Designed and developed a responsive landing page that clarified value proposition, defined KPIs, optimized layout and SEO, and validated with Jest and Cypress — drove 200+ qualified interactions in the first month.",
      "Integrated Hotjar and Google Analytics event pipelines to capture real-time user behavior, identified a 65% drop-off rate, restructured content flow, and improved KPI visibility — increasing engagement by 25%.",
    ],
    technologies: [
      "React",
      "Next.js",
      "SEO",
      "Hotjar",
      "Google Analytics",
      "Jest",
      "Cypress",
    ],
    image: "/Xubikle.png",
    githubUrl: "https://github.com/yourusername/xubikle",
    liveUrl: "https://xubikle.com",
  },
  {
    id: 5,
    title: "PromptPing — Smart Mail Tracker with AI Replies",
    company: "",
    duration: "",
    tag: "Personal Project",
    tagIcon: User,
    description:
      "PromptPing is a productivity-focused mail assistant I built to combine real-time email engagement tracking with AI-powered reply suggestions. The platform helps professionals and teams understand recipient behavior through analytics while reducing the time spent writing and following up on emails.",
    achievements: [
      "Developed a real-time email tracker that logs open counts and timestamps, bypasses Gmail proxy limitations, and visualizes engagement trends with analytics dashboards and time-based graphs — improving visibility into recipient behavior by 35%.",
      "Integrated Gemini Pro–powered reply suggestions and smart follow-up detection into Gmail, leveraging prompt-engineered templates, a React UI, and Spring Boot APIs to automate responses — cutting reply time by 55% and streamlining workflows.",
    ],
    technologies: [
      "React",
      "Spring Boot",
      "Gmail API",
      "Gemini Pro",
      "Charting Libraries",
    ],
    image: "/promptping.png",
    githubUrl: "https://github.com/yourusername/promptping",
    liveUrl: "https://promptping.app",
  },
  {
    id: 6,
    title: "Chatbot Flow Builder Kit",
    company: "",
    duration: "",
    tag: "Personal Project",
    tagIcon: User,
    // subtitle:
    //   "A modern, extensible platform for building conversational chatbots with visual drag-and-drop flow editor.",
    description:
      "The Chatbot Flow Builder Kit is a modern, extensible platform I created to make building conversational chatbots easier. Instead of hard-coding flows, teams can visually design and manage chatbot logic through a drag-and-drop editor. The tool is aimed at developers and product teams who want to rapidly prototype, test, and extend chatbot flows without sacrificing flexibility.",
    achievements: [
      "Designed a flow editor interface using React + React Flow, where users can add, connect, and configure nodes like Start, Message, Conditional Path, and End nodes.",
      "Implemented sidebars for available nodes and node properties, making it easy to extend the builder with new node types and custom property panels.",
      "Added flow validation and auto-adjust features to ensure well-structured, non-overlapping conversation maps.",
      "Architected the project to be highly modular and extensible with TypeScript and Zustand, so developers can quickly add new nodes, panels, or flow logic without heavy refactoring.",
    ],
    technologies: ["React", "React Flow", "Zustand", "TypeScript", "UnoCSS"],
    image: "/chatbot.png",
    githubUrl: "https://github.com/yourusername/chatbot-flow-builder",
    liveUrl: "https://chatbot-flow-builder.vercel.app",
  },
  {
    id: 7,
    title: "InboxOS — Customer Messaging Platform",
    company: "",
    duration: "",
    tag: "Personal Project",
    tagIcon: User,
    // subtitle:
    //   "A scalable customer messaging system for e-commerce and SaaS teams with unified inbox for multi-channel conversations.",
    description:
      "InboxOS is a personal project where I set out to build a scalable customer messaging system for e-commerce and SaaS teams. The platform provides a unified inbox for handling multi-channel conversations (email, chat, integrations) with reliability, observability, and developer-friendly architecture at its core.",
    achievements: [
      "Engineered a modular engagement platform with Next and MySQL, including a unified inbox and customizable channel workflows; added observability with OpenTelemetry + Effect-TS, cutting debugging time by 40% and improving long-term maintainability.",
      "Architected a resilient messaging backend using AdonisJS and Redis with event-driven queues, concurrent consumers, backoff retries, and idempotent handlers — enabling reliable webhook ingestion and horizontal scalability under high message volumes.",
    ],
    technologies: [
      "Next.js",
      "AdonisJS",
      "MySQL",
      "Redis",
      "Effect-TS",
      "OpenTelemetry",
      "TypeScript",
    ],
    image: "/inbox.png", // Added inbox.png image
    githubUrl: "https://github.com/yourusername/inboxos",
    liveUrl: "https://inboxos.com",
  },
];

export function WorkShowcase() {
  return (
    <section className="relative">
      {/* Section Header */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // smoother easing
          }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 mb-4">
            Featured <span className="text-[#CC5500]">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing impactful projects that demonstrate technical excellence
            and real-world problem solving
          </p>
        </motion.div>
      </div>

      {/* Individual Project Pages */}
      {workData.map((work, index) => (
        <div
          key={work.id}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image Section - Left Side (60%) */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94], // smoother easing
                }}
                className="order-2 lg:order-1 lg:col-span-3"
              >
                {work.image ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image
                      src={work.image}
                      alt={`${work.title} preview`}
                      width={900}
                      height={600}
                      className="w-full h-auto max-h-[80vh] object-contain transition-all duration-500 hover:shadow-2xl"
                      priority={index === 0}
                    />
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-[60vh]">
                    <ExternalLink className="w-24 h-24 text-gray-400" />
                  </div>
                )}
              </motion.div>

              {/* Content Section - Right Side (40%) */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94], // smoother easing
                }}
                className="order-1 lg:order-2 lg:col-span-2 space-y-6"
              >
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Badge
                    variant="outline"
                    className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium ${
                      work.tag === "Professional Experience"
                        ? "border-[#FF6B6B] text-[#FF6B6B] bg-[#FF6B6B]/5"
                        : "border-[#CC5500] text-[#CC5500] bg-[#CC5500]/5"
                    }`}
                  >
                    <work.tagIcon className="w-4 h-4" />
                    {work.tag}
                  </Badge>
                </motion.div>

                {/* Title & Company Info */}
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-800 mb-2">
                    {work.title}
                  </h3>
                  {work.company && (
                    <div className="flex flex-col gap-1 mb-4">
                      <p className="text-lg font-semibold text-gray-700">
                        {work.company}
                        {work.location && (
                          <span className="text-sm text-gray-500 ml-2">
                            • {work.location}
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-600">{work.duration}</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-base">
                  {work.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#CC5500]" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {work.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#CC5500] mt-2.5 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed text-sm">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#CC5500]" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 + idx * 0.03, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-gray-300 text-gray-700 hover:border-[#CC5500] hover:text-[#CC5500] transition-colors duration-200 px-3 py-1.5 text-sm font-medium"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  {/* GitHub Button - Only show for Personal Projects */}
                  {work.tag === "Personal Project" && (
                    <motion.a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 group/btn"
                    >
                      <Github className="w-5 h-5" />
                      <span>View on GitHub</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                  )}

                  {/* Live Demo Button - Show for all projects */}
                  {work.liveUrl && (
                    <motion.a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 px-6 py-3 bg-[#CC5500] text-white rounded-lg font-semibold hover:bg-[#B84C00] transition-colors duration-200 group/btn"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
