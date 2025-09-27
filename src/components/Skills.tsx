
"use client";

import { motion } from "framer-motion";
import { 
  TestTube, 
  Cog, 
  Database, 
  Users, 
  Bug, 
  Smartphone, 
  Globe, 
  FileText,
  CheckCircle,
  Zap
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Testing Expertise",
      skills: [
        { name: "Manual Testing", icon: <TestTube className="w-6 h-6" />, level: 95 },
        { name: "Automation Testing", icon: <Cog className="w-6 h-6" />, level: 90 },
        { name: "API Testing", icon: <Database className="w-6 h-6" />, level: 88 },
        { name: "Mobile Testing", icon: <Smartphone className="w-6 h-6" />, level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Selenium", icon: <Globe className="w-6 h-6" />, level: 90 },
        { name: "Postman", icon: <Zap className="w-6 h-6" />, level: 92 },
        { name: "JIRA", icon: <Bug className="w-6 h-6" />, level: 88 },
        { name: "TestRail", icon: <FileText className="w-6 h-6" />, level: 85 }
      ]
    },
    {
      title: "Leadership & Management",
      skills: [
        { name: "Team Leadership", icon: <Users className="w-6 h-6" />, level: 90 },
        { name: "Test Planning", icon: <FileText className="w-6 h-6" />, level: 88 },
        { name: "Quality Assurance", icon: <CheckCircle className="w-6 h-6" />, level: 95 },
        { name: "Process Improvement", icon: <Cog className="w-6 h-6" />, level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Keahlian Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berikut adalah keahlian dan teknologi yang saya kuasai dalam bidang Quality Assurance.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                      {skill.icon}
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {skill.name}
                    </h4>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
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
