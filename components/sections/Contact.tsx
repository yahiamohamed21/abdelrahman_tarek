"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Send, Phone, Mail, MapPin, Copy, CheckCircle2, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute inset-0 bg-grid mask-image-radial-gradient opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <MessageSquare className="w-4 h-4 text-primary-400" />
            <span className="text-slate-300 font-mono tracking-widest text-xs uppercase">Get in touch</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white tracking-tight mb-6"
          >
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 animate-gradient-x">extraordinary.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Contact Details</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "abdelrahmantarekaboud@gmail.com", color: "text-primary-400", bg: "bg-primary-500/10", border: "border-primary-500/20" },
                  { icon: Phone, label: "Phone", value: "(+20) 1030474666", color: "text-secondary-400", bg: "bg-secondary-500/10", border: "border-secondary-500/20" },
                  { icon: MapPin, label: "Location", value: "Cairo, Egypt", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", copyable: false }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group/item">
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className={`p-3 rounded-xl ${item.bg} ${item.border} border ${item.color} shrink-0`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-1">{item.label}</p>
                        <p className="text-slate-300 text-sm font-medium truncate">{item.value}</p>
                      </div>
                    </div>
                    
                    {item.copyable !== false && (
                      <button 
                        onClick={() => handleCopy(item.value, item.label)}
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedField === item.label ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Minimal Map or Globe abstract representation could go here */}
            <div className="p-8 rounded-3xl bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl h-48 relative overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
               <div className="w-full h-full relative flex items-center justify-center perspective-1000">
                 <motion.div 
                   animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-48 h-48 rounded-full border border-primary-500/30 border-dashed relative"
                 >
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-secondary-500/30 border-dashed"></div>
                   {/* Location Pin */}
                   <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] animate-pulse"></div>
                 </motion.div>
               </div>
               <div className="absolute bottom-4 left-0 w-full text-center">
                 <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Available Worldwide</span>
               </div>
            </div>
          </motion.div>
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 rounded-3xl bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-50"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="peer w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary-500 transition-colors placeholder-transparent"
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-0 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-400 font-medium uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="peer w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-secondary-500 transition-colors placeholder-transparent"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-0 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-secondary-400 font-medium uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              
              <div className="relative group mb-12">
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="peer w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent-500 transition-colors resize-none placeholder-transparent"
                  placeholder="Message"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-0 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-400 font-medium uppercase tracking-wider"
                >
                  Project Details / Message
                </label>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  size="lg"
                  variant="gradient"
                  className="w-full sm:w-auto px-12 group relative overflow-hidden"
                  disabled={isSubmitting || isSubmitted}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div key="submitting" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                         <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                         Sending...
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div key="submitted" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                         <CheckCircle2 className="w-5 h-5" />
                         Message Sent!
                      </motion.div>
                    ) : (
                      <motion.div key="default" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                         Send Message
                         <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
}
