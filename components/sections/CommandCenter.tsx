"use client";

import { useState, useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Terminal, Maximize2, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

type Command = {
  cmd: string;
  output: React.ReactNode;
};

const INITIAL_OUTPUT = (
  <div className="space-y-4">
    <div>
      <p className="text-emerald-400 font-bold mb-1">Welcome to AT-OS v2.0.4</p>
      <p className="text-slate-400">Interactive Developer Terminal. Type a command below and press Enter.</p>
    </div>
    <div className="text-slate-300">
      <p className="text-slate-500 uppercase tracking-widest text-xs mb-2">Available commands:</p>
      <ul className="pl-2 space-y-1">
        <li><span className="text-emerald-400 font-bold w-20 inline-block">whoami</span> <span className="text-slate-400">- Display profile info</span></li>
        <li><span className="text-emerald-400 font-bold w-20 inline-block">skills</span> <span className="text-slate-400">- List technical stack</span></li>
        <li><span className="text-emerald-400 font-bold w-20 inline-block">projects</span> <span className="text-slate-400">- View recent work</span></li>
        <li><span className="text-emerald-400 font-bold w-20 inline-block">clear</span> <span className="text-slate-400">- Clear terminal</span></li>
        <li><span className="text-emerald-400 font-bold w-20 inline-block">help</span> <span className="text-slate-400">- Show this menu</span></li>
      </ul>
    </div>
  </div>
);

export function CommandCenter() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([{ cmd: "", output: INITIAL_OUTPUT }]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="text-slate-300">
            <p className="text-slate-500 uppercase tracking-widest text-xs mb-2">Available commands:</p>
            <ul className="pl-2 space-y-1">
              <li><span className="text-emerald-400 font-bold w-20 inline-block">whoami</span> <span className="text-slate-400">- Display profile info</span></li>
              <li><span className="text-emerald-400 font-bold w-20 inline-block">skills</span> <span className="text-slate-400">- List technical stack</span></li>
              <li><span className="text-emerald-400 font-bold w-20 inline-block">projects</span> <span className="text-slate-400">- View recent work</span></li>
              <li><span className="text-emerald-400 font-bold w-20 inline-block">clear</span> <span className="text-slate-400">- Clear terminal</span></li>
              <li><span className="text-emerald-400 font-bold w-20 inline-block">help</span> <span className="text-slate-400">- Show this menu</span></li>
            </ul>
          </div>
        );
        break;
      case "whoami":
        output = (
          <div className="text-slate-300">
            <p>{">"} Abdelrahman Tarek</p>
            <p>{">"} Junior Backend Developer based in Cairo, Egypt</p>
            <p>{">"} Specializing in .NET Core, Clean Architecture, and Scalable APIs</p>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="text-slate-300 grid grid-cols-2 gap-2 mt-1">
            <div className="border border-white/10 p-2 rounded bg-white/5">
              <span className="text-emerald-400">Backend:</span> C#, .NET 8, ASP.NET Core, EF Core
            </div>
            <div className="border border-white/10 p-2 rounded bg-white/5">
              <span className="text-blue-400">Database:</span> SQL Server, Redis, PostgreSQL
            </div>
            <div className="border border-white/10 p-2 rounded bg-white/5">
              <span className="text-accent-400">Architecture:</span> Clean Architecture, CQRS, MediatR
            </div>
            <div className="border border-white/10 p-2 rounded bg-white/5">
              <span className="text-secondary-400">Tools:</span> Docker, Git, Postman, CI/CD
            </div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="text-slate-300 space-y-2 mt-1">
            <p><span className="text-primary-400">[1] E-Commerce API</span> - Microservices, RabbitMQ, Redis Cache</p>
            <p><span className="text-primary-400">[2] Real-time Chat</span> - SignalR, JWT Auth, SQL Server</p>
            <p><span className="text-primary-400">[3] Booking System</span> - Clean Architecture, MediatR, Stripe</p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = <p className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</p>;
    }

    setHistory([...history, { cmd: input, output }]);
    setInput("");
  };

  return (
    <Section id="terminal" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 font-mono tracking-widest text-xs uppercase">Command Center</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-white mb-4"
          >
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Terminal</span>
          </motion.h2>
          <p className="text-slate-400">Interact with my portfolio through the command line.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-white/20 bg-[#0a0a0a]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Header */}
          <div className="h-10 bg-[#111] border-b border-white/10 flex items-center justify-between px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
            </div>
            <div className="text-xs text-slate-500 font-mono">root@abdelrahman-tarek:~</div>
            <div className="flex gap-3 text-slate-500">
              <Minus className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
              <Maximize2 className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
              <X className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm sm:text-base scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {history.map((item, i) => (
              <div key={i} className="mb-4">
                {item.cmd && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-emerald-400">root@abdelrahman-tarek:~$</span>
                    <span className="text-white">{item.cmd}</span>
                  </div>
                )}
                {item.output && <div className="pl-4 border-l-2 border-white/10 animate-fade-in">{item.output}</div>}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
              <span className="text-emerald-400 shrink-0">root@abdelrahman-tarek:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
