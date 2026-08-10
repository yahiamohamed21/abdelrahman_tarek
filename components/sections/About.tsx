import { Section } from "@/components/ui/Section";
import { Code, Database, Globe, Terminal, Server, Cpu } from "lucide-react";
import * as motion from "framer-motion/client";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Coffee Consumed", value: "∞" },
  ];

  const highlights = [
    {
      icon: <Server className="w-5 h-5 text-primary-400" />,
      title: "Clean Architecture",
      desc: "Domain-Driven Design"
    },
    {
      icon: <Database className="w-5 h-5 text-secondary-400" />,
      title: "Database Design",
      desc: "SQL & NoSQL"
    },
    {
      icon: <Globe className="w-5 h-5 text-accent-400" />,
      title: "RESTful APIs",
      desc: "High-performance endpoints"
    }
  ];

  return (
    <Section id="about" className="relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Premium Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 relative"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#030712] rounded-[22px] overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-primary-900/40 to-secondary-900/40 relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')]"></div>
              </div>
              <div className="px-8 pb-8 relative -mt-16 text-center">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1 mb-6 shadow-xl shadow-primary-500/20">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden relative">
                    <Terminal className="w-12 h-12 text-slate-400 opacity-50" />
                    {/* Placeholder for real image */}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Abdelrahman Tarek</h3>
                <p className="text-primary-400 font-medium mb-6">Backend Engineer</p>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-white/5">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-lg sm:text-xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text & Highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary-500"></span>
            <span className="text-primary-400 font-medium uppercase tracking-wider text-sm">About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-8">
            Engineering robust systems from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">ground up.</span>
          </h2>
          
          <div className="text-lg text-slate-400 space-y-6 font-light leading-relaxed mb-10">
            <p>
              I am an aspiring <strong className="text-slate-200 font-medium">Backend Developer</strong> specializing in <strong className="text-slate-200 font-medium">.NET technologies</strong>. My passion lies in designing and building scalable, maintainable, and high-performance backend systems that solve complex business problems.
            </p>
            <p>
              With extensive experience in Clean Architecture, RESTful APIs, and complex database management, I thrive in environments where I can optimize system performance and implement secure, enterprise-level solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="glass p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5">
                <div className="mb-3 p-2 bg-white/5 rounded-lg inline-block">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">{item.title}</h4>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
