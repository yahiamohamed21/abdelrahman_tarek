"use client";

import { Section } from "@/components/ui/Section";
import { GitBranch, TestTube, Rocket, MonitorPlay, CheckCircle2 } from "lucide-react";
import * as motion from "framer-motion/client";

export function Workflow() {
  const steps = [
    {
      title: "Plan & Design",
      description: "Requirements analysis, DB schema design, and API contract definition (Swagger).",
      icon: <MonitorPlay className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Development",
      description: "Clean Architecture implementation with Domain-Driven Design principles.",
      icon: <GitBranch className="w-6 h-6" />,
      color: "text-primary-400"
    },
    {
      title: "Testing",
      description: "Unit testing, integration testing, and performance profiling.",
      icon: <TestTube className="w-6 h-6" />,
      color: "text-secondary-400"
    },
    {
      title: "Deployment",
      description: "CI/CD pipelines, Docker containerization, and cloud hosting.",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-emerald-400"
    }
  ];

  return (
    <Section id="workflow" className="py-24 relative">
      <div className="text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <CheckCircle2 className="w-5 h-5 text-secondary-400" />
          <span className="text-secondary-400 font-medium uppercase tracking-wider text-sm">Process</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
        >
          Engineering Workflow
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Connecting Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0">
                  <motion.div 
                    className="h-full w-full bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  />
                </div>
              )}
              
              <div className="glass p-8 rounded-2xl border border-white/5 h-full relative z-10 hover:bg-white/5 transition-colors duration-500 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 shadow-inner flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.03] select-none pointer-events-none">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
