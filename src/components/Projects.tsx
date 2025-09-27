"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TestTube, Smartphone, Globe, BarChart3, Shield, Clock, TrendingUp } from "lucide-react";

export function Projects() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Automation",
      subtitle: "Peningkatan Test Coverage dari 45% ke 85%",
      description: "Implementasi framework otomatisasi end-to-end untuk platform e-commerce dengan 50+ test scenarios.",
      image: "🛒",
      category: "Web Testing",
      icon: <Globe className="w-5 h-5" />,
      
      // Case Study Details
      context: {
        challenge: "Platform e-commerce mengalami 25+ bug kritis per release dengan manual testing yang memakan waktu 3 hari",
        system: "Web Application (React + Node.js)",
        methodology: "Agile/Scrum dengan 2-week sprints"
      },
      
      role: {
        responsibility: "Lead QA Engineer - Merancang test strategy dan memimpin implementasi automation framework",
        testingTypes: ["Functional Testing", "Regression Testing", "Performance Testing", "Cross-browser Testing"]
      },
      
      solution: {
        tools: ["Selenium WebDriver", "Cypress", "Jest", "TestRail", "Jenkins CI/CD"],
        framework: "Page Object Model dengan Cucumber BDD untuk test scenarios yang readable"
      },
      
      results: {
        coverage: "Test Coverage: 45% → 85%",
        bugs: "Bug kritis post-release: 25 → 6 (76% reduction)",
        execution: "Test execution time: 3 hari → 4 jam",
        automation: "90% test cases berhasil diotomatisasi"
      },
      
      technologies: ["Selenium", "Cypress", "Jest", "TestRail", "Jenkins"],
      link: "https://github.com/rapiudinsaputra13",
      github: "https://github.com/rapiudinsaputra13"
    },
    
    {
      id: 2,
      title: "Mobile Banking Security Testing",
      subtitle: "Zero Security Vulnerabilities dalam Production",
      description: "Comprehensive security dan performance testing untuk aplikasi mobile banking dengan 1M+ users.",
      image: "🏦",
      category: "Mobile Testing",
      icon: <Smartphone className="w-5 h-5" />,
      
      context: {
        challenge: "Aplikasi banking membutuhkan security testing ketat dan performance optimization untuk handle traffic tinggi",
        system: "Mobile App (iOS & Android) + API Backend",
        methodology: "DevSecOps dengan continuous security testing"
      },
      
      role: {
        responsibility: "Senior QA Engineer - Security testing lead dan performance optimization specialist",
        testingTypes: ["Security Testing", "Performance Testing", "API Testing", "Device Compatibility"]
      },
      
      solution: {
        tools: ["Appium", "OWASP ZAP", "JMeter", "Postman", "TestComplete"],
        framework: "Security-first testing approach dengan automated vulnerability scanning"
      },
      
      results: {
        security: "Zero critical security vulnerabilities in production",
        performance: "App load time: 8s → 2.5s (69% improvement)",
        coverage: "Device compatibility: 95% across 50+ devices",
        uptime: "99.9% uptime maintained during peak hours"
      },
      
      technologies: ["Appium", "OWASP ZAP", "JMeter", "Postman", "TestComplete"],
      link: "https://github.com/rapiudinsaputra13",
      github: "https://github.com/rapiudinsaputra13"
    },
    
    {
      id: 3,
      title: "API Testing Framework Development",
      subtitle: "Automated API Testing untuk 200+ Endpoints",
      description: "Development comprehensive API testing framework dengan automated reporting dan CI/CD integration.",
      image: "🔌",
      category: "API Testing",
      icon: <TestTube className="w-5 h-5" />,
      
      context: {
        challenge: "Microservices architecture dengan 200+ API endpoints membutuhkan testing strategy yang scalable",
        system: "REST & GraphQL APIs dengan microservices architecture",
        methodology: "API-first development dengan contract testing"
      },
      
      role: {
        responsibility: "QA Automation Engineer - Framework architect dan API testing specialist",
        testingTypes: ["Contract Testing", "Integration Testing", "Load Testing", "Data Validation"]
      },
      
      solution: {
        tools: ["Postman", "Newman", "Jest", "Pact", "K6"],
        framework: "Contract-driven testing dengan automated schema validation"
      },
      
      results: {
        coverage: "API test coverage: 100% untuk critical endpoints",
        execution: "Test execution: Manual 2 hari → Automated 30 menit",
        reliability: "API reliability improved by 40%",
        integration: "Seamless CI/CD integration dengan 0 false positives"
      },
      
      technologies: ["Postman", "Newman", "Jest", "Pact", "K6"],
      link: "https://github.com/rapiudinsaputra13",
      github: "https://github.com/rapiudinsaputra13"
    },
    
    {
      id: 4,
      title: "Healthcare System Compliance Testing",
      subtitle: "100% Compliance dengan Standar HIPAA",
      description: "Quality assurance untuk sistem informasi kesehatan dengan focus pada data privacy dan compliance.",
      image: "🏥",
      category: "System Testing",
      icon: <Shield className="w-5 h-5" />,
      
      context: {
        challenge: "Healthcare system membutuhkan strict compliance testing untuk HIPAA dan data protection regulations",
        system: "Web-based Healthcare Management System",
        methodology: "Waterfall dengan extensive documentation dan audit trails"
      },
      
      role: {
        responsibility: "QA Lead - Compliance testing specialist dan audit coordinator",
        testingTypes: ["Compliance Testing", "Data Validation", "Security Testing", "User Acceptance Testing"]
      },
      
      solution: {
        tools: ["Selenium", "TestNG", "Maven", "Jenkins", "SonarQube"],
        framework: "Compliance-driven testing dengan automated audit reporting"
      },
      
      results: {
        compliance: "100% HIPAA compliance achieved",
        audit: "Zero audit findings dalam external review",
        security: "Data breach risk reduced by 85%",
        documentation: "Complete test documentation untuk regulatory approval"
      },
      
      technologies: ["Selenium", "TestNG", "Maven", "Jenkins", "SonarQube"],
      link: "https://github.com/rapiudinsaputra13",
      github: "https://github.com/rapiudinsaputra13"
    }
  ];

  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "40%", label: "Bug Reduction" },
    { icon: <Clock className="w-6 h-6" />, value: "75%", label: "Faster Testing" },
    { icon: <BarChart3 className="w-6 h-6" />, value: "85%", label: "Test Coverage" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Security Compliance" }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Studi Kasus QA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Berikut adalah studi kasus QA terperinci yang menunjukkan proses, metodologi, dan hasil terukur 
            dari proyek-proyek testing yang telah saya kerjakan.
          </p>
        </motion.div>

        {/* Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-lg">
              <div className="text-blue-600 dark:text-blue-400 flex justify-center mb-3">
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{study.image}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {study.icon}
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-lg opacity-90">{study.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {study.description}
                </p>

                {/* Case Study Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Context */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      I. Konteks Proyek
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                      <p><strong>Tantangan:</strong> {study.context.challenge}</p>
                      <p><strong>Sistem:</strong> {study.context.system}</p>
                      <p><strong>Metodologi:</strong> {study.context.methodology}</p>
                    </div>
                  </div>

                  {/* Role & Methods */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      II. Peran & Metode
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                      <p><strong>Tanggung Jawab:</strong> {study.role.responsibility}</p>
                      <div>
                        <strong>Jenis Testing:</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {study.role.testingTypes.map((type) => (
                            <span key={type} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      III. Solusi Teknis
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                      <div>
                        <strong>Tools:</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {study.solution.tools.map((tool) => (
                            <span key={tool} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p><strong>Framework:</strong> {study.solution.framework}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-[6px] h-[6px] bg-orange-600 rounded-full"></div>
                      IV. Hasil Terukur
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                         <div className="w-[6px] h-[6px] bg-orange-600 rounded-full"></div>
                          <strong>{value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat Repositori
                  </a>
                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Tertarik dengan Metodologi QA Saya?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Mari diskusikan bagaimana saya dapat membantu meningkatkan kualitas produk Anda
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Hubungi Saya
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
