import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Workflow } from "@/components/sections/Workflow";
import { CommandCenter } from "@/components/sections/CommandCenter";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { ExperienceEducation } from "@/components/sections/ExperienceEducation";
import { Contact } from "@/components/sections/Contact";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <Workflow />
        <CommandCenter />
        <GithubActivity />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
