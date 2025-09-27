import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
