import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Brain,
  Anchor,
  Award,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 50 },
        { name: "TypeScript", level: 60 },
        { name: "Java", level: 70 },
        { name: "C++", level: 20 },
        { name: "PHP", level: 40 },
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Frontend Frameworks",
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 40 },
        { name: "Angular", level: 40 },
        { name: "Next.js", level: 70 },
        { name: "Svelte", level: 35 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 70 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 50 },
        { name: "Photoshop", level: 60 },
        { name: "Illustrator", level: 30 },
        { name: "InVision", level: 30 },
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Flutter", level: 60 },
        { name: "Ionic", level: 25 },
        { name: "Swift", level: 20 },
        { name: "Kotlin", level: 40 },
        { name: "Xamarin", level: 15 },
      ],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Leadership", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Adaptability", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Critical Thinking", level: 90 },
      ],
    },
  ];

  const marineCourses = [
    "Power Plant (Diesel & Gas) Engineering",
    "Internal Combustion Engines (ICE) & Mechanical Systems",
    "Computer-Aided Design & Manufacturing (SolidWorks, ANSYS)",
    "Ship Construction & Welding Technology",
    "Marine Safety & Regulations (SOLAS, MARPOL, IMO Standards)",
    "Marine Electrical & Automation Systems",
    "Marine Propulsion Systems",
    "Marine Transportation & Logistics",
    "Engineering Ethics & Management",
  ];

  const certifications = [
    "Marine Logistics and Transportation",
    "Health, Safety and Environment (HSE)",
    "Jobberman Soft Skills Training",
    "ACT security eLearning certificate (Red)",
    "ACT awareness eLearning certificate (Blue)",
    "SIA Door Supervision - Level 2",
    "First Aid Training",
  ];

  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical, design, and engineering
            capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-400 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12 flex items-center justify-center gap-4">
            <Anchor className="h-8 w-8" /> Marine Engineering Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marineCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Anchor className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{course}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12 flex items-center justify-center gap-4">
            <Award className="h-8 w-8" /> Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" />
                </div>
                <h3 className="text-white font-semibold">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
