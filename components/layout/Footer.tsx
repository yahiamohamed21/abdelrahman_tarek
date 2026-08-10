import { Code2, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030712] pt-16 pb-8 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <Code2 className="w-6 h-6 text-primary-400 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-xl font-bold font-heading tracking-tight text-white">Abdelrahman Tarek</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              Architecting scalable backend systems and robust APIs. Focused on clean code and enterprise-level solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/abdelrahmantarekaboud" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="http://linkedin.com/in/abdelrahman-tarek-aboud" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/201030474666" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-[#25D366] hover:bg-white/10 hover:border-[#25D366]/50 transition-all">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:abdelrahmantarekaboud@gmail.com" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
                  abdelrahmantarekaboud@gmail.com
                </a>
              </li>
              <li>
                <span className="text-slate-400 text-sm">
                  (+20) 1030474666
                </span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">
                  Cairo, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Abdelrahman Tarek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
