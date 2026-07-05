import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectList = [
  {
    name: "Tiles Gallery",
    desc: "Premium tiles showcase with marquee and auth.",
    tech: ["Next.js", "Tailwind", "JSON Server"],
    live: "https://assignment-eight-project-jbqf.vercel.app/",
    github: "https://github.com/miraz-ahammed/assignment-eight-project",
    accent: "from-fuchsia-500/20 via-violet-500/10 to-slate-900"
  },
  {
    name: "Keenkeeper",
    desc: "Personal relationship tracker with attention status cards.",
    tech: ["React", "API", "CSS"],
    live: "https://assignment-seven-six.vercel.app/",
    github: "https://github.com/miraz-ahammed/Assignment-seven",
    accent: "from-emerald-500/20 via-emerald-400/10 to-slate-900"
  },
  {
    name: "SkillSwap",
    desc: "Freelance marketplace with auth, Stripe payments, and real-time search.",
    tech: ["React", "Node.js", "MongoDB", "BetterAuth", "Stripe"],
    live: "https://skillswap-client-snowy.vercel.app/",
    github: "https://github.com/miraz-ahammed/skillswap-client",
    accent: "from-cyan-500/20 via-sky-500/10 to-slate-900"
  },
  {
    name: "IdeaVault",
    desc: "Creative idea manager with secure notes and filterable categories.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://ideavault-frontend-three.vercel.app/",
    github: "https://github.com/miraz-ahammed/ideavault-frontend",
    accent: "from-indigo-500/20 via-violet-500/10 to-slate-900"
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
            className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#111827] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4f46e5]/50"
          >
            <div className={`relative h-64 bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.45),_transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.25),_transparent_30%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="max-w-xs rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Live preview</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
                <div className="flex gap-3 text-zinc-400">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub size={20} /></a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaExternalLinkAlt size={18} /></a>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8 min-h-[60px]">{p.desc}</p>

              <div className="grid grid-cols-2 gap-3">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-2xl border border-zinc-700 bg-[#111827] px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}