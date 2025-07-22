"use client";

import { GradientText } from "@/components/ui/animated-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "Jan 2022",
    endDate: "Present",
    description:
      "Leading development of scalable microservices architecture serving 1M+ users. Mentoring junior developers and driving technical decisions for the core platform.",
    achievements: [
      "Architected and implemented microservices that improved system performance by 40%",
      "Led a team of 5 developers in delivering critical features ahead of schedule",
      "Reduced deployment time from 2 hours to 15 minutes through CI/CD optimization",
      "Mentored 3 junior developers, with 2 receiving promotions within 6 months",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    location: "Austin, TX",
    type: "Full-time",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description:
      "Built and maintained web applications from scratch in a fast-paced startup environment. Collaborated closely with product and design teams to deliver user-centric solutions.",
    achievements: [
      "Developed the company's main product from MVP to production serving 50K+ users",
      "Implemented real-time features using WebSocket that increased user engagement by 60%",
      "Optimized database queries resulting in 50% faster page load times",
      "Built responsive designs that improved mobile user retention by 35%",
    ],
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    location: "Remote",
    type: "Contract",
    startDate: "Jan 2020",
    endDate: "May 2020",
    description:
      "Developed custom web solutions for various clients, focusing on performance optimization and user experience. Worked directly with clients to understand requirements and deliver solutions.",
    achievements: [
      "Delivered 8 client projects with 100% on-time completion rate",
      "Improved client website performance scores by average of 45%",
      "Implemented SEO best practices that increased organic traffic by 80%",
      "Built reusable component library used across multiple projects",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: 4,
    company: "University Research Lab",
    position: "Software Development Intern",
    location: "Stanford, CA",
    type: "Internship",
    startDate: "Jun 2019",
    endDate: "Aug 2019",
    description:
      "Developed research tools and data visualization applications for academic research projects. Collaborated with researchers to translate complex requirements into software solutions.",
    achievements: [
      "Built data visualization tools used by 15+ research projects",
      "Developed automated data processing pipeline that saved 20 hours/week",
      "Created documentation that became standard for future interns",
      "Presented research findings at university symposium",
    ],
    technologies: ["Python", "D3.js", "Flask", "MongoDB", "Jupyter"],
  },
];

export default function Experience() {
  return (
    <div className="relative">
      <GridPattern />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <GradientText>Experience</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional growth and achievements
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute left-0 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="absolute left-2 top-10 w-0.5 h-full bg-border -z-10"></div>
                  <div className="ml-8">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <CardTitle className="text-lg">
                              {exp.position}
                            </CardTitle>
                            <p className="text-primary font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col items-end text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.startDate} - {exp.endDate}
                            </div>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>

                        <div>
                          <h4 className="font-medium mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start text-sm text-muted-foreground"
                              >
                                <span className="text-primary mr-2 mt-1">
                                  •
                                </span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
