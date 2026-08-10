"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, Home, User, Lightbulb, Briefcase, Activity, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Lightbulb },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: Activity },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 300)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-6xl rounded-full transition-all duration-500",
          isScrolled
            ? "px-4 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            : "px-2 py-4 bg-transparent border-transparent"
        )}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 pl-2 group relative z-10">
          <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Code2 className="w-7 h-7 text-primary-400 relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          <span className="text-lg font-bold font-heading tracking-tight text-white hidden sm:block relative z-10">
            Abdelrahman Tarek
          </span>
          <span className="text-lg font-bold font-heading tracking-tight text-white sm:hidden relative z-10">
            AT
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-2 group",
                activeSection === link.href.substring(1)
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Hire Me Button */}
        <div className="hidden md:flex items-center pr-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-300 hover:text-white p-2 rounded-full bg-white/5 border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[80px] left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-2 shadow-2xl pointer-events-auto"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                href={link.href}
                className={cn(
                  "flex items-center gap-4 text-lg font-medium transition-colors px-4 py-3 rounded-xl",
                  activeSection === link.href.substring(1)
                    ? "bg-white/10 text-white border border-white/5"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </motion.a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href="#contact"
                className="flex items-center justify-center w-full py-3 rounded-xl bg-white text-black font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
