"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Target } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "2+ Tahun Pengalaman",
      description: "Berpengalaman dalam QA testing untuk berbagai platform"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "QA Lead Position",
      description: "Memimpin tim QA dan mengembangkan strategi testing"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Mengelola dan membimbing tim QA untuk hasil optimal"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Focus",
      description: "Fokus pada kualitas produk dan kepuasan pengguna"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hai! Saya adalah seorang <strong className="text-blue-600 dark:text-blue-400">QA Lead</strong> dengan 
              pengalaman lebih dari 2 tahun dalam industri teknologi. Saya memiliki passion yang kuat 
              dalam memastikan kualitas produk digital melalui testing yang komprehensif.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Saya terbiasa menyusun <em>test case</em>, melakukan <em>regression testing</em>, 
              automation testing, serta memimpin tim QA untuk berbagai platform seperti 
              <strong className="text-blue-600 dark:text-blue-400"> web dan mobile</strong>. 
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Saya mahir menggunakan tools seperti <strong>JIRA</strong>, <strong>Postman</strong>, 
              <strong> Selenium</strong>, dan <strong>TestRail</strong> untuk mengoptimalkan 
              proses testing dan memastikan delivery produk berkualitas tinggi.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["JIRA", "Postman", "Selenium", "TestRail", "Cypress", "Jest"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
