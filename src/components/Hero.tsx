"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Youtube } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Halo, saya Rapiudin 👋
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              QA Engineer Berpengalaman 3+ Tahun
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              Spesialis Otomasi End-to-End untuk Peningkatan Test Coverage dan Kecepatan Release
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Berhasil mengurangi bug kritis pasca-rilis hingga 40% melalui implementasi framework otomatisasi baru. 
              Berpengalaman dalam testing web & mobile apps dengan fokus pada kualitas dan efisiensi proses development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Lihat Studi Kasus Otomasi Saya
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a
              href="https://github.com/rapiudinsaputra13"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Akses Repositori GitHub
            </a>

            <a
              href="/Rapiudin_Saputra_CV.pdf"
              download="Rapiudin_Saputra_CV.pdf"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Unduh CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/rapiputra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-600 hover:text-blue-700"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a
              href="https://github.com/rapiudinsaputra13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-800 dark:text-gray-200 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.youtube.com/channel/UCnE5Dw4iZKqCTcuoNJ1yjkA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-red-600 hover:text-red-700"
            >
              <Youtube className="w-6 h-6" />
            </a>
            
            <a
              href="mailto:rapiudinsaputra4@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-green-600 hover:text-green-700"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
