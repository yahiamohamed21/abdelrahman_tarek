"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Server, Database, Globe, Cpu, Lock } from "lucide-react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

export function Hero() {
  const [codeText, setCodeText] = useState("");
  const fullCode = `public async Task<Result> Handle()
{
  await _cache.GetAsync(key);
  await _db.SaveChangesAsync();
  return Result.Success();
}`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullCode.length) {
        currentText += fullCode[currentIndex];
        setCodeText(currentText);
        currentIndex++;
      } else {
        setTimeout(() => {
          currentText = "";
          currentIndex = 0;
          setCodeText("");
        }, 3000);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-500, 500], [10, -10]);
  const rotateY = useTransform(mouseX, [-500, 500], [-10, 10]);

  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
      
      <div 
        className="flex flex-col lg:flex-row items-center gap-16 relative z-10 w-full"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left - rect.width / 2);
          mouseY.set(e.clientY - rect.top - rect.height / 2);
        }}
      >
        {/* Left Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col gap-6 sm:gap-8 text-center lg:text-left z-10"
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-3 sm:px-4 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] whitespace-normal text-left"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for new opportunities
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-4 sm:mb-6 leading-[1.1] break-words">
              <span className="block text-white">Backend Engineer</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 pb-2">
                architecting scale.
              </span>
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light px-2 sm:px-0">
            I build high-performance APIs and robust backend infrastructures that power modern web applications, combining clean code principles with enterprise-level scalability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
            <a href="#projects" className="flex-shrink-0 w-full sm:w-auto">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                Explore Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
              </Button>
            </a>
            <a href="/Abdelrahman_Tarek_CV.pdf" download="Abdelrahman_Tarek_CV.pdf" className="flex-shrink-0 w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                <Download className="w-5 h-5 mr-2 shrink-0" />
                Resume
              </Button>
            </a>
            <a href="#contact" className="flex-shrink-0 w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto whitespace-nowrap bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10">
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Abstract Architecture Visual */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 w-full relative hidden md:block"
          style={{ perspective: 1200 }}
        >
          <motion.div 
            className="relative w-full aspect-square max-w-[650px] mx-auto preserve-3d"
            style={{ rotateX, rotateY }}
          >
            {/* Core glowing orb behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            {/* Main Server Block */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-72 bg-[#0a0a0a]/80 backdrop-blur-2xl border border-primary-500/30 rounded-3xl shadow-[0_0_80px_rgba(99,102,241,0.2)] flex flex-col items-center justify-center gap-6 z-20 overflow-hidden"
              style={{ transform: "translateZ(80px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="relative">
                <Server className="w-20 h-20 text-primary-400" />
                <motion.div 
                  className="absolute inset-0 bg-primary-400 blur-xl opacity-50"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="flex flex-col gap-3 w-3/4 relative z-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-2 bg-slate-800 rounded-full w-full overflow-hidden relative">
                    <motion.div 
                      className={`absolute top-0 bottom-0 left-0 ${i === 1 ? 'bg-primary-500' : i === 2 ? 'bg-secondary-400' : 'bg-accent-500'}`}
                      animate={{ width: ["10%", "90%", "30%"] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Database Block */}
            <motion.div 
              className="absolute top-[15%] right-[5%] w-32 h-36 bg-[#0a0a0a]/90 backdrop-blur-xl border border-secondary-500/30 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-[0_0_40px_rgba(6,182,212,0.2)] z-10"
              style={{ transform: "translateZ(-40px)" }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database className="w-12 h-12 text-secondary-400" />
              <div className="text-[10px] font-mono text-secondary-400/80 uppercase tracking-widest">SQL Server</div>
            </motion.div>

            {/* API Gateway Block */}
            <motion.div 
              className="absolute bottom-[15%] left-[0%] w-36 h-28 bg-[#0a0a0a]/90 backdrop-blur-xl border border-accent-500/30 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-[0_0_40px_rgba(139,92,246,0.2)] z-30"
              style={{ transform: "translateZ(120px)" }}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe className="w-10 h-10 text-accent-400" />
              <div className="text-[10px] font-mono text-accent-400/80 uppercase tracking-widest">API Gateway</div>
            </motion.div>

            {/* Auth Service Block */}
            <motion.div 
              className="absolute top-[25%] left-[5%] w-24 h-24 bg-[#0a0a0a]/90 backdrop-blur-xl border border-pink-500/30 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(236,72,153,0.15)] z-10"
              style={{ transform: "translateZ(40px)" }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Lock className="w-8 h-8 text-pink-400" />
              <div className="text-[9px] font-mono text-pink-400/80 uppercase tracking-widest">Auth</div>
            </motion.div>

            {/* Floating Code Snippet */}
            <motion.div 
              className="absolute top-[5%] left-[20%] p-5 bg-[#050505]/95 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-mono text-slate-300 z-40 shadow-2xl min-w-[280px] min-h-[140px]"
              style={{ transform: "translateZ(150px) rotate(-2deg)" }}
              animate={{ y: [0, -10, 0], rotate: [-2, -1, -2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <pre className="text-xs leading-relaxed whitespace-pre-wrap">
                <span className="text-accent-400">public async</span> <span className="text-slate-300">Task&lt;Result&gt;</span> <span className="text-secondary-400">Handle</span>()<br/>
                &#123;<br/>
                <span className="text-slate-400">  {codeText.split('\n').slice(1).join('\n')}</span>
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary-400 ml-1 align-middle"
                />
              </pre>
            </motion.div>

            {/* Connecting SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: "translateZ(0px)" }}>
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Line: Gateway to Server */}
              <motion.path 
                d="M 150 450 Q 250 400 325 350" 
                fill="none" 
                stroke="url(#lineGrad1)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
              <motion.circle 
                r="4" 
                fill="#6366f1"
                className="filter blur-[1px]"
                animate={{
                  offsetDistance: ["0%", "100%"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: "path('M 150 450 Q 250 400 325 350')" } as any}
              />

              {/* Line: Server to DB */}
              <motion.path 
                d="M 325 350 Q 400 250 500 150" 
                fill="none" 
                stroke="url(#lineGrad2)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
              <motion.circle 
                r="4" 
                fill="#06b6d4"
                className="filter blur-[1px]"
                animate={{
                  offsetDistance: ["0%", "100%"]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                style={{ offsetPath: "path('M 325 350 Q 400 250 500 150')" } as any}
              />
            </svg>
            
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
