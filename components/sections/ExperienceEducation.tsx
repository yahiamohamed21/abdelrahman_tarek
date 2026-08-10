import { Section } from "@/components/ui/Section";
import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react";
import * as motion from "framer-motion/client";

const experienceData = [
  {
    title: "Junior Backend Developer",
    company: "Freelance / Self-Employed",
    period: "2023 - Present",
    description: "Developing and maintaining RESTful APIs, implementing Clean Architecture, and designing robust database schemas for various clients.",
    technologies: ["ASP.NET Core", "SQL Server", "EF Core"]
  },
  {
    title: "Backend Development Intern",
    company: "Tech Company",
    period: "2022 - 2023",
    description: "Assisted in building microservices and optimizing database queries. Participated in daily stand-ups and agile development processes.",
    technologies: ["C#", "REST API", "Git"]
  }
];

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    period: "2019 - 2023",
    description: "Graduated with honors. Focused on software engineering, database systems, and data structures.",
    achievements: ["Dean's List", "Graduation Project: Excellence"]
  }
];

export function ExperienceEducation() {
  return (
    <Section id="experience" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <Briefcase className="w-5 h-5 text-primary-400" />
          <span className="text-primary-400 font-medium uppercase tracking-wider text-sm">Journey</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-heading text-white"
        >
          Experience & Education
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8">
        {/* Experience Timeline */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <Briefcase className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-500/50 before:via-white/10 before:to-transparent">
            {experienceData.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center justify-between group is-active"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030712] bg-primary-500 text-white shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] glass p-6 rounded-2xl border border-white/5 group-hover:border-primary-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 font-medium text-sm mb-4">{item.company}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <GraduationCap className="w-6 h-6 text-secondary-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-secondary-500/50 before:via-white/10 before:to-transparent">
            {educationData.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center justify-between group is-active"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030712] bg-secondary-500 text-white shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] glass p-6 rounded-2xl border border-white/5 group-hover:border-secondary-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-secondary-400 text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                  <p className="text-slate-400 font-medium text-sm mb-4">{item.institution}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                        <ChevronRight className="w-3 h-3 text-secondary-500" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
