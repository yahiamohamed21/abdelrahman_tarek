"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, Wrench, Layers, Terminal } from "lucide-react";

const skillCategories = [
  {
    id: "backend",
    category: "Backend Architecture",
    icon: <Server className="w-5 h-5" />,
    description: "Designing scalable, high-performance systems and APIs.",
    skills: [
      { name: "C#", level: 90, size: "lg" },
      { name: "ASP.NET Core", level: 95, size: "xl" },
      { name: "Entity Framework", level: 85, size: "lg" },
      { name: "Clean Architecture", level: 90, size: "xl" },
      { name: "Microservices", level: 75, size: "md" },
      { name: "REST API", level: 95, size: "lg" },
    ],
    color: "text-primary-400",
    bg: "bg-primary-500/10",
    border: "border-primary-500/30",
  },
  {
    id: "database",
    category: "Data Engineering",
    icon: <Database className="w-5 h-5" />,
    description: "Architecting reliable and optimized data storage solutions.",
    skills: [
      { name: "SQL Server", level: 90, size: "xl" },
      { name: "Database Design", level: 85, size: "lg" },
      { name: "Query Optimization", level: 80, size: "lg" },
      { name: "Redis", level: 70, size: "md" },
      { name: "NoSQL", level: 65, size: "md" },
    ],
    color: "text-secondary-400",
    bg: "bg-secondary-500/10",
    border: "border-secondary-500/30",
  },
  {
    id: "tools",
    category: "DevOps & Tooling",
    icon: <Wrench className="w-5 h-5" />,
    description: "Streamlining deployment and development workflows.",
    skills: [
      { name: "Git", level: 90, size: "lg" },
      { name: "Docker", level: 75, size: "lg" },
      { name: "CI/CD", level: 70, size: "md" },
      { name: "Linux", level: 80, size: "lg" },
      { name: "Swagger", level: 95, size: "md" },
    ],
    color: "text-accent-400",
    bg: "bg-accent-500/10",
    border: "border-accent-500/30",
  }
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const activeData = skillCategories.find(c => c.id === activeCategory)!;

  return (
    <Section id="skills" className="relative py-32">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
        >
          <Terminal className="w-4 h-4 text-primary-400" />
          <span className="text-slate-300 font-mono tracking-widest text-xs uppercase">Tech Stack</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight"
        >
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Capabilities</span>
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start max-w-6xl mx-auto">
        
        {/* Category Selector */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative p-6 rounded-2xl text-left transition-all duration-300 border ${isActive ? 'bg-white/10 border-white/20 shadow-xl' : 'bg-transparent border-transparent hover:bg-white/5'}`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-[#111111] rounded-2xl border border-white/10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10 flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg ${isActive ? category.bg : 'bg-white/5'} ${isActive ? category.color : 'text-slate-400'} transition-colors`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>{category.category}</h3>
                </div>
                <p className={`relative z-10 text-sm ${isActive ? 'text-slate-300' : 'text-slate-500'} ml-14`}>
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Floating Bubbles Canvas */}
        <div className="w-full lg:w-2/3 aspect-square lg:aspect-auto lg:h-[500px] relative bg-[#0a0a0a]/50 rounded-3xl border border-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl">
           <div className="absolute inset-0 bg-grid mask-image-radial-gradient opacity-20"></div>
           
           {/* Center Node */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
             <div className={`w-32 h-32 rounded-full ${activeData.bg} blur-3xl opacity-50`}></div>
           </div>

           <AnimatePresence mode="wait">
             <motion.div
               key={activeCategory}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               className="relative w-full h-full flex flex-wrap content-center justify-center gap-6 p-8 z-10"
             >
               {activeData.skills.map((skill, index) => {
                 const sizeClasses = {
                   md: "px-5 py-3 text-sm",
                   lg: "px-6 py-4 text-base",
                   xl: "px-8 py-5 text-lg font-bold"
                 };
                 
                 return (
                   <motion.div
                     key={skill.name}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ 
                       opacity: 1, 
                       y: [0, -10, 0],
                     }}
                     transition={{ 
                       opacity: { duration: 0.4, delay: index * 0.1 },
                       y: { duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                     }}
                     className={`
                       relative rounded-2xl bg-[#111111] border border-white/10 shadow-lg
                       backdrop-blur-xl flex items-center justify-center cursor-default
                       hover:border-white/30 hover:bg-[#1a1a1a] transition-colors
                       ${sizeClasses[skill.size as keyof typeof sizeClasses]}
                     `}
                   >
                     <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${activeData.bg} opacity-20 pointer-events-none`}></div>
                     <span className="text-white relative z-10">{skill.name}</span>
                     
                     {/* Circular Progress Ring Background */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 rotate-[-90deg]">
                        <rect x="1" y="1" width="100%" height="100%" rx="16" fill="none" stroke="currentColor" className={activeData.color} strokeWidth="2" strokeDasharray="4 4" />
                     </svg>
                   </motion.div>
                 );
               })}
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </Section>
  );
}

