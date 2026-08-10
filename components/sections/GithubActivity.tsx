"use client";

import { Section } from "@/components/ui/Section";
import { Activity, GitCommit, GitPullRequest, GitMerge } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import * as motion from "framer-motion/client";

export function GithubActivity() {
  // Generate mock contribution data for the graph
  const weeks = 52;
  const daysPerWeek = 7;
  const contributionData = Array.from({ length: weeks }, () => 
    Array.from({ length: daysPerWeek }, () => Math.floor(Math.random() * 5))
  );

  const getContributionColor = (level: number) => {
    switch(level) {
      case 0: return "bg-slate-800/40";
      case 1: return "bg-primary-900/60";
      case 2: return "bg-primary-700/80";
      case 3: return "bg-primary-500";
      case 4: return "bg-primary-400 shadow-[0_0_10px_rgba(99,102,241,0.6)]";
      default: return "bg-slate-800/40";
    }
  };

  return (
    <Section id="activity" className="py-24 relative">
      <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]"></div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 relative z-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <FaGithub className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold text-white">Open Source Activity</h3>
            </div>
            <p className="text-slate-400">Consistent contributions to backend systems and tooling.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
              <GitCommit className="w-4 h-4 text-primary-400" />
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Commits (YTD)</div>
                <div className="text-lg font-bold text-white">400+</div>
              </div>
            </div>
            <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
              <GitPullRequest className="w-4 h-4 text-secondary-400" />
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">PRs</div>
                <div className="text-lg font-bold text-white">25+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="relative z-10 overflow-x-auto pb-4 custom-scrollbar">
          <div className="min-w-[800px]">
            <div className="flex gap-1.5 mb-2">
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1.5">
                  {week.map((level, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (weekIndex * 0.01) + (dayIndex * 0.01),
                        duration: 0.2
                      }}
                      className={`w-3.5 h-3.5 rounded-[3px] ${getContributionColor(level)}`}
                      title={`Contribution level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 text-xs text-slate-500 mt-6">
              <span>Less</span>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map(level => (
                  <div key={level} className={`w-3.5 h-3.5 rounded-[3px] ${getContributionColor(level)}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
