"use client";

import { Section } from "@/components/ui/Section";
import { Server, Database, Globe, Network, Shield, Cpu, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Architecture() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const layers = [
    {
      id: "client",
      title: "Frontend Clients",
      icon: <Globe className="w-6 h-6" />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      delay: 0,
      description: "Web & Mobile Applications"
    },
    {
      id: "gateway",
      title: "API Gateway",
      icon: <Network className="w-6 h-6" />,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/30",
      delay: 0.2,
      description: "Routing, Rate Limiting, Auth"
    },
    {
      id: "application",
      title: "ASP.NET Core API",
      icon: <Cpu className="w-6 h-6" />,
      color: "text-primary-400",
      bg: "bg-primary-500/10",
      border: "border-primary-500/30",
      delay: 0.4,
      description: "Controllers, Middleware, SignalR"
    },
    {
      id: "infrastructure",
      title: "Clean Architecture Core",
      icon: <Shield className="w-6 h-6" />,
      color: "text-accent-400",
      bg: "bg-accent-500/10",
      border: "border-accent-500/30",
      delay: 0.6,
      description: "Domain Entities, Use Cases, CQRS"
    },
    {
      id: "database",
      title: "SQL Server & Redis",
      icon: <Database className="w-6 h-6" />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      delay: 0.8,
      description: "EF Core, Distributed Caching"
    }
  ];

  if (!mounted) return null;

  return (
    <Section id="architecture" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid mask-image-radial-gradient opacity-10 pointer-events-none"></div>

      <div className="text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
        >
          <Server className="w-4 h-4 text-primary-400" />
          <span className="text-slate-300 font-mono tracking-widest text-xs uppercase">System Design</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6"
        >
          Clean <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Architecture</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg font-light"
        >
          Building enterprise-grade backend systems based on domain-driven design, ensuring separation of concerns, scalability, and maintainability.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 px-4">
        {/* Animated Data Flow Line behind the blocks */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 z-0 hidden sm:block">
           <motion.div 
             className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-primary-500 to-transparent blur-[2px]"
             animate={{ top: ["-10%", "110%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           />
        </div>

        <div className="flex flex-col gap-8 sm:gap-16">
          {layers.map((layer, index) => (
            <div key={layer.id} className="relative group">
              {/* Mobile connecting line */}
              {index !== layers.length - 1 && (
                <div className="absolute left-8 top-full h-8 w-px bg-white/10 sm:hidden"></div>
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: layer.delay, duration: 0.6, ease: "easeOut" }}
                className={`
                  relative z-10 p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl 
                  flex flex-col sm:flex-row items-center gap-6 sm:gap-8 
                  hover:-translate-y-1 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.5)]
                  hover:shadow-[0_10px_50px_rgba(99,102,241,0.15)] hover:border-white/20 hover:bg-[#111111]/90
                `}
              >
                {/* Node Indicator */}
                <div className="hidden sm:block absolute top-1/2 left-[-2rem] w-8 h-px bg-white/10 -translate-y-1/2 z-0 group-hover:bg-primary-500/50 transition-colors"></div>
                
                <div className={`p-5 rounded-2xl ${layer.bg} ${layer.color} border ${layer.border} shadow-inner shrink-0 relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {layer.icon}
                </div>
                
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{layer.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base font-light">{layer.description}</p>
                </div>
                
                {/* Visual tech dots */}
                <div className="hidden sm:flex flex-col gap-2 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-secondary-400"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
