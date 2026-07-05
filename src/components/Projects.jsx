import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectList = [
  {
    name: "Tiles Gallery",
    desc: "Premium tiles showcase with marquee and auth.",
    tech: ["Next.js", "Tailwind", "JSON Server"],
    live: "https://assignment-seven-six.vercel.app/",
    github: "https://github.com/miraz-ahammed/Assignment-seven"
  },
  {
    name: "GitHub Tracker",
    desc: "Real-time issue tracking using GitHub API.",
    tech: ["React", "API", "CSS"],
    live: "https://assignment-eight-project-jbqf.vercel.app/",
    github: "https://github.com/miraz-ahammed/assignment-eight-project"
  },
  {
    name: "SkillSwap",
    desc: "Freelance Micro-Task Marketplace with 3-role system, Stripe payments, and real-time search.",
    tech: ["React", "Node.js", "MongoDB", "BetterAuth", "Stripe"],
    live: "https://skillswap-client-snowy.vercel.app/",
    github: "https://github.com/miraz-ahammed/skillswap-client"
  },
  {
    name: "IdeaVault",
    desc: "Creative Idea Management app for capturing and organizing ideas with robust backend.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://ideavault-frontend-three.vercel.app/",
    github: "https://github.com/miraz-ahammed/ideavault-frontend"
  },
];

export default function Projects() {
  return (
    
    <section id="projects_section" className="py-20 px-6 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-12 border-l-4 border-[#4f46e5] pl-4">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectList.map((p, i) => (
          <div 
            key={i} 
            className="bg-[#111827] p-8 rounded-3xl border border-zinc-800 hover:border-[#4f46e5]/50 transition-all group shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold group-hover:text-[#4f46e5] transition-colors">
                {p.name}
              </h3>
              <div className="flex gap-4 text-zinc-400">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub size={20} /></a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaExternalLinkAlt size={18} /></a>
              </div>
            </div>

            <p className="mt-4 text-zinc-400 leading-relaxed min-h-[50px]">
              {p.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span 
                  key={t} 
                  className="text-[11px] font-semibold uppercase tracking-wider bg-[#1f2937] text-[#38bdf8] px-3 py-1 rounded-full border border-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}