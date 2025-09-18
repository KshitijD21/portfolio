"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

const personalInfo = {
  name: "John Doe",
  title: "Software Development Engineer",
  location: "San Francisco, CA",
  experience: "5+ Years",
  education: "Computer Science, Stanford University",
  bio: `Passionate Software Development Engineer with over 5 years of experience in building scalable web applications and distributed systems. I specialize in modern JavaScript frameworks, cloud architecture, and creating efficient, maintainable code that solves real-world problems.

I thrive in collaborative environments and enjoy mentoring junior developers while continuously learning new technologies. My approach combines technical excellence with a deep understanding of user needs and business objectives.`,
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
  },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Jest"] },
];

const certifications = [
  { name: "AWS Certified Solutions Architect", year: "2023" },
  { name: "Certified Kubernetes Administrator", year: "2022" },
  { name: "Google Cloud Professional Developer", year: "2021" },
];

export default function About() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4"></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          {/* Personal Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Personal Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{personalInfo.experience} Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>{personalInfo.education}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="text-sm">{cert.name}</span>
                      </div>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-4 text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
