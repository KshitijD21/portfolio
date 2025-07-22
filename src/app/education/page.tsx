"use client";

import { GradientText } from "@/components/ui/animated-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  MapPin,
  Trophy,
} from "lucide-react";

const education = [
  {
    id: 1,
    institution: "Stanford University",
    degree: "Bachelor of Science in Computer Science",
    location: "Stanford, CA",
    startDate: "2017",
    endDate: "2021",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List for 6 consecutive semesters",
      "President of Computer Science Student Association",
      "Published research paper on machine learning algorithms",
      "Graduated Cum Laude",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Artificial Intelligence",
      "Operating Systems",
      "Computer Graphics",
    ],
    projects: [
      {
        title: "Distributed Chat Application",
        description:
          "Built a real-time chat application using microservices architecture",
        technologies: ["Java", "Spring Boot", "WebSocket", "Docker"],
      },
      {
        title: "Machine Learning Recommendation Engine",
        description:
          "Developed a collaborative filtering system for movie recommendations",
        technologies: ["Python", "TensorFlow", "Pandas", "Flask"],
      },
    ],
  },
  {
    id: 2,
    institution: "Jefferson High School",
    degree: "High School Diploma",
    location: "Palo Alto, CA",
    startDate: "2013",
    endDate: "2017",
    gpa: "4.0/4.0",
    achievements: [
      "Valedictorian - Graduated #1 in class of 450",
      "National Merit Scholar",
      "AP Scholar with Distinction (5s on 8 AP exams)",
      "Captain of Programming Club",
      "Winner of Regional Science Fair - Computer Science Division",
    ],
    coursework: [
      "AP Computer Science A",
      "AP Calculus BC",
      "AP Physics C",
      "AP Chemistry",
      "AP Statistics",
    ],
    projects: [
      {
        title: "School Management System",
        description:
          "Developed a web application for managing student records and grades",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      },
    ],
  },
];

const certifications = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issueDate: "2023",
    credentialId: "AWS-SAA-2023-001234",
    validUntil: "2026",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    issueDate: "2022",
    credentialId: "GCP-PD-2022-567890",
    validUntil: "2025",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "2022",
    credentialId: "CKA-2022-112233",
    validUntil: "2025",
  },
];

const onlineCourses = [
  {
    title: "Advanced React Patterns",
    provider: "Frontend Masters",
    completionDate: "2023",
    instructor: "Kent C. Dodds",
  },
  {
    title: "System Design Interview Course",
    provider: "Educative",
    completionDate: "2023",
    instructor: "Grokking Team",
  },
  {
    title: "Machine Learning Specialization",
    provider: "Coursera",
    completionDate: "2022",
    instructor: "Andrew Ng",
  },
];

export default function Education() {
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
              My <GradientText>Education</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic journey, certifications, and continuous learning
            </p>
          </motion.div>

          {/* Formal Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Formal Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
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
                              {edu.degree}
                            </CardTitle>
                            <p className="text-primary font-medium">
                              {edu.institution}
                            </p>
                          </div>
                          <div className="flex flex-col items-end text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.startDate} - {edu.endDate}
                            </div>
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          GPA: {edu.gpa}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3 flex items-center">
                            <Trophy className="h-4 w-4 mr-2 text-primary" />
                            Achievements
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
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
                          <h4 className="font-medium mb-3 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary" />
                            Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <Badge
                                key={course}
                                variant="outline"
                                className="text-xs"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {edu.projects && (
                          <div>
                            <h4 className="font-medium mb-3">
                              Notable Academic Projects
                            </h4>
                            <div className="space-y-3">
                              {edu.projects.map((project, i) => (
                                <div key={i} className="border rounded-lg p-3">
                                  <h5 className="font-medium text-sm">
                                    {project.title}
                                  </h5>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech) => (
                                      <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" />
              Professional Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Issued:</span>
                          <span>{cert.issueDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Valid Until:</span>
                          <span>{cert.validUntil}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Credential ID:</span>
                          <span className="font-mono text-xs">
                            {cert.credentialId}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Online Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-primary" />
              Continuous Learning
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {onlineCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">
                        {course.title}
                      </CardTitle>
                      <p className="text-primary font-medium">
                        {course.provider}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Instructor:</span>
                          <span>{course.instructor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Completed:</span>
                          <span>{course.completionDate}</span>
                        </div>
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
