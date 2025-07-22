"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  EnhancedSkillsGrid,
  SoftSkillsSection,
} from "@/components/ui/enhanced-skills";
import { GradientBackground } from "@/components/ui/gradient-background";
import { motion } from "framer-motion";
import { Award, Brain, Calendar, Clock, Star, TrendingUp } from "lucide-react";
const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    status: "Active",
    emoji: "☁️",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2022",
    status: "Active",
    emoji: "⚓",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2021",
    status: "Active",
    emoji: "🌐",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    year: "2023",
    status: "Active",
    emoji: "🔷",
    color: "from-blue-400 to-cyan-500",
  },
];
const learningGoals = [
  {
    skill: "Web3 Development",
    progress: 40,
    emoji: "🔗",
    timeframe: "2024",
    color: "from-purple-500 to-pink-500",
  },
  {
    skill: "Rust Programming",
    progress: 25,
    emoji: "🦀",
    timeframe: "2024",
    color: "from-orange-500 to-red-500",
  },
  {
    skill: "Advanced AI/ML",
    progress: 60,
    emoji: "🤖",
    timeframe: "2024",
    color: "from-cyan-500 to-blue-500",
  },
  {
    skill: "System Design",
    progress: 75,
    emoji: "🏗️",
    timeframe: "2024",
    color: "from-green-500 to-teal-500",
  },
];
export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      {" "}
      <GradientBackground />{" "}
      <div className="relative z-10">
        {" "}
        {/* Header Section */}{" "}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-7xl mx-auto text-center">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {" "}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                {" "}
                <Brain className="w-5 h-5 text-purple-600" />{" "}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {" "}
                  Technical Expertise{" "}
                </span>{" "}
              </div>{" "}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {" "}
                💻 My{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Skills & Expertise{" "}
                </span>{" "}
              </h1>{" "}
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {" "}
                A comprehensive overview of my technical skills, certifications,
                and continuous learning journey in software development.{" "}
              </p>{" "}
            </motion.div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Skills Grid */}{" "}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-7xl mx-auto">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {" "}
                🚀{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Technical Skills{" "}
                </span>{" "}
              </h2>{" "}
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {" "}
                From frontend frameworks to cloud infrastructure, here's my
                technical toolkit{" "}
              </p>{" "}
            </motion.div>{" "}
            <EnhancedSkillsGrid />{" "}
          </div>{" "}
        </section>{" "}
        {/* Soft Skills */}{" "}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
          {" "}
          <div className="max-w-7xl mx-auto">
            {" "}
            <SoftSkillsSection />{" "}
          </div>{" "}
        </section>{" "}
        {/* Certifications */}{" "}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-7xl mx-auto">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                {" "}
                <Award className="w-5 h-5 text-yellow-600" />{" "}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {" "}
                  Professional Recognition{" "}
                </span>{" "}
              </div>{" "}
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {" "}
                🏆{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Certifications & Awards{" "}
                </span>{" "}
              </h2>{" "}
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {" "}
                Industry-recognized certifications that validate my expertise{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  {" "}
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                    {" "}
                    <CardHeader className="text-center pb-4">
                      {" "}
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {" "}
                        {cert.emoji}{" "}
                      </div>{" "}
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                        {" "}
                        {cert.name}{" "}
                      </CardTitle>{" "}
                    </CardHeader>{" "}
                    <CardContent className="text-center pt-0">
                      {" "}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {" "}
                        {cert.issuer}{" "}
                      </p>{" "}
                      <div className="flex items-center justify-center gap-2 mb-3">
                        {" "}
                        <Calendar className="w-4 h-4 text-gray-500" />{" "}
                        <span className="text-sm text-gray-500">
                          {cert.year}
                        </span>{" "}
                      </div>{" "}
                      <Badge
                        variant={
                          cert.status === "Active" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {" "}
                        <Star className="w-3 h-3 mr-1" /> {cert.status}{" "}
                      </Badge>{" "}
                    </CardContent>{" "}
                  </Card>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Learning Goals */}{" "}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
          {" "}
          <div className="max-w-7xl mx-auto">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                {" "}
                <TrendingUp className="w-5 h-5 text-green-600" />{" "}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {" "}
                  Continuous Learning{" "}
                </span>{" "}
              </div>{" "}
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {" "}
                🎯{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}
                  Current Learning Goals{" "}
                </span>{" "}
              </h2>{" "}
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {" "}
                Always pushing boundaries and exploring new technologies{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              {learningGoals.map((goal, index) => (
                <motion.div
                  key={goal.skill}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  {" "}
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                    {" "}
                    <CardContent className="p-6 text-center">
                      {" "}
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {" "}
                        {goal.emoji}{" "}
                      </div>{" "}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        {" "}
                        {goal.skill}{" "}
                      </h3>{" "}
                      <div className="mb-4">
                        {" "}
                        <div className="flex justify-between items-center mb-2">
                          {" "}
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Progress
                          </span>{" "}
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {goal.progress}%
                          </span>{" "}
                        </div>{" "}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          {" "}
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${goal.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${goal.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex items-center justify-center gap-2">
                        {" "}
                        <Clock className="w-4 h-4 text-gray-500" />{" "}
                        <span className="text-sm text-gray-500">
                          {goal.timeframe}
                        </span>{" "}
                      </div>{" "}
                    </CardContent>{" "}
                  </Card>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </div>
  );
}
