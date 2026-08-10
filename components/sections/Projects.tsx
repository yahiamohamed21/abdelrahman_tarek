"use client";

import { Section } from "@/components/ui/Section";
import { Server, Layers, ShieldCheck, Database, Zap, Sparkles, Activity, Key, Globe, LayoutDashboard } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Valens Supplements E-commerce Backend",
    featured: true,
    description: "An enterprise-level high-performance RESTful API for a health supplements store. Engineered for scale and security.",
    technologies: ["ASP.NET Core", "Clean Architecture", "Entity Framework Core", "SQL Server", "JWT"],
    architecture: [
      { icon: <Layers className="w-4 h-4" />, text: "Clean Architecture Layers" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Secure Authentication" },
      { icon: <Database className="w-4 h-4" />, text: "Product Variants & Localized Catalogs" },
      { icon: <Zap className="w-4 h-4" />, text: "Admin Dashboard & Financial Reporting" }
    ],
    github: "https://github.com",
    mockupColor: "from-primary-500/10 to-secondary-500/10",
    mockupBorder: "border-primary-500/20",
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "<50ms" },
      { label: "Requests", value: "10k/s" }
    ],
    MockupVisual: () => (
      <div className="flex-1 p-6 relative overflow-hidden flex flex-col gap-4 justify-center group-hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 bg-grid mask-image-radial-gradient opacity-30"></div>
        <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col gap-3">
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="flex justify-between items-center px-2 sm:px-4 py-2 sm:py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 sm:gap-3"><Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 shrink-0" /><span className="text-[10px] sm:text-xs text-primary-300 font-mono truncate max-w-[120px] sm:max-w-none">POST /api/v1/auth/login</span></div>
            <span className="text-[8px] sm:text-[10px] bg-green-500/20 text-green-400 px-1.5 sm:px-2 py-0.5 rounded border border-green-500/20 shrink-0">200 OK</span>
          </motion.div>
          <motion.div animate={{ x: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="flex justify-between items-center px-2 sm:px-4 py-2 sm:py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm shadow-xl sm:ml-6">
            <div className="flex items-center gap-2 sm:gap-3"><Database className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-400 shrink-0" /><span className="text-[10px] sm:text-xs text-secondary-300 font-mono truncate max-w-[120px] sm:max-w-none">GET /api/v1/products</span></div>
            <span className="text-[8px] sm:text-[10px] bg-green-500/20 text-green-400 px-1.5 sm:px-2 py-0.5 rounded border border-green-500/20 shrink-0">200 OK</span>
          </motion.div>
          <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="flex justify-between items-center px-2 sm:px-4 py-2 sm:py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm shadow-xl sm:ml-12">
            <div className="flex items-center gap-2 sm:gap-3"><Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent-400 shrink-0" /><span className="text-[10px] sm:text-xs text-accent-300 font-mono truncate max-w-[120px] sm:max-w-none">POST /api/v1/checkout</span></div>
            <span className="text-[8px] sm:text-[10px] bg-yellow-500/20 text-yellow-400 px-1.5 sm:px-2 py-0.5 rounded border border-yellow-500/20 shrink-0">202 ACC</span>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    name: "AthrApp Platform",
    featured: true,
    description: "A complete volunteering platform connecting volunteers with organizations. Built with complex workflows and real-time tracking.",
    technologies: ["ASP.NET Core", "OTP Authentication", "SignalR", "REST API"],
    architecture: [
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Multi-role Authentication & Google Login" },
      { icon: <Server className="w-4 h-4" />, text: "Volunteer Application Workflows" },
      { icon: <Zap className="w-4 h-4" />, text: "Real-time Status Tracking" },
      { icon: <Layers className="w-4 h-4" />, text: "OTP Password Reset System" }
    ],
    github: "https://github.com",
    mockupColor: "from-accent-500/10 to-primary-500/10",
    mockupBorder: "border-accent-500/20",
    stats: [
      { label: "Volunteers", value: "5000+" },
      { label: "Real-time", value: "SignalR" },
      { label: "Auth", value: "OAuth2" }
    ],
    MockupVisual: () => (
      <div className="flex-1 p-6 relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 bg-grid mask-image-radial-gradient opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xs">
           <div className="relative flex justify-center w-full">
             <div className="w-16 h-16 rounded-2xl bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] z-10 backdrop-blur-md">
                <Activity className="w-8 h-8 text-accent-400" />
             </div>
             <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-accent-500/30 rounded-full blur-xl"></motion.div>
           </div>
           
           <div className="flex w-full justify-between gap-4">
             <div className="flex-1 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-slate-300">OTP Auth</span>
             </div>
             <div className="flex-1 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-mono text-slate-300">WebSockets</span>
             </div>
           </div>
           
           <div className="w-full bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Live Stream</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="h-full bg-accent-500"></motion.div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    name: "HR Management System",
    featured: true,
    description: "An open-source HR Management System built using ASP.NET. Provides comprehensive employee and department management operations.",
    technologies: ["ASP.NET", "C#", "Clean Architecture", "REST API"],
    architecture: [
      { icon: <Server className="w-4 h-4" />, text: "Enterprise HR Operations" },
      { icon: <Database className="w-4 h-4" />, text: "Employee & Department Management" },
      { icon: <Layers className="w-4 h-4" />, text: "Scalable API Design" }
    ],
    github: "https://github.com",
    mockupColor: "from-secondary-500/10 to-emerald-500/10",
    mockupBorder: "border-secondary-500/20",
    stats: [
      { label: "Architecture", value: "Clean" },
      { label: "Coverage", value: "85%" },
      { label: "Operations", value: "Full CRUD" }
    ],
    MockupVisual: () => (
      <div className="flex-1 p-6 relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 bg-grid mask-image-radial-gradient opacity-30"></div>
        <div className="relative z-10 w-full max-w-sm grid grid-cols-2 gap-3">
          {[
            { icon: LayoutDashboard, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", text: "Dashboard" },
            { icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", text: "Roles" },
            { icon: Server, color: "text-secondary-400", bg: "bg-secondary-400/10", border: "border-secondary-400/20", text: "Core API" },
            { icon: Database, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", text: "EF Core" }
          ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0.8 }}
               whileHover={{ opacity: 1, scale: 1.05 }}
               className={`p-4 rounded-xl border ${item.border} ${item.bg} backdrop-blur-md flex flex-col items-center justify-center gap-2`}
             >
               <item.icon className={`w-6 h-6 ${item.color}`} />
               <span className="text-[10px] font-mono text-slate-300 uppercase">{item.text}</span>
             </motion.div>
          ))}
        </div>
      </div>
    )
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      
      {/* Visual Preview Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 perspective-1000"
      >
        <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.mockupColor} border ${project.mockupBorder} p-1 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-sm overflow-hidden group transform-gpu`}>
          <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-xl"></div>
          
          {/* Mockup UI Window */}
          <div className="relative h-full w-full bg-[#0a0a0a]/90 rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
            {/* Window Header */}
            <div className="h-8 bg-[#111] border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              <div className="mx-auto text-[10px] text-slate-500 font-mono tracking-widest uppercase opacity-50">API Gateway</div>
            </div>
            
            {/* Dynamic Visual Content */}
            <project.MockupVisual />
            
            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </motion.div>

      {/* Details Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          {project.featured && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-[10px] font-semibold text-primary-400 uppercase tracking-widest shadow-[0_0_10px_rgba(99,102,241,0.1)]">
              <Sparkles className="w-3 h-3" /> Featured
            </div>
          )}
          <div className="flex gap-4">
            {project.stats.map(stat => (
               <div key={stat.label} className="flex flex-col">
                  <span className="text-white font-bold font-mono text-sm">{stat.value}</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest">{stat.label}</span>
               </div>
            ))}
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 leading-tight">
          {project.name}
        </h3>
        
        <div className="glass p-6 rounded-2xl mb-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <p className="text-slate-300 text-base leading-relaxed relative z-10 font-light">
            {project.description}
          </p>
        </div>
        
        <div className="mb-8">
          <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-4">Architecture Highlights</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.architecture.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 p-1 rounded-md bg-white/5 border border-white/10 text-primary-400">{item.icon}</span>
                <span className="leading-snug">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-slate-300 shadow-inner hover:bg-white/10 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        
        <div>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
          >
            <FaGithub className="w-5 h-5" />
            <span>View Architecture</span>
          </a>
        </div>
      </motion.div>
      
    </div>
  );
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <Section id="projects" className="py-32 relative">
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-secondary-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span className="text-slate-300 text-xs font-mono tracking-widest uppercase">Case Studies</span>
          </div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight"
        >
          Premium Backend <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Solutions</span>
        </motion.h2>
      </div>

      <div ref={containerRef} className="space-y-40">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
