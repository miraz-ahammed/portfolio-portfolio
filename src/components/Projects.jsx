import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import projectList from '../data/projects';

export default function Projects() {
  return (

    <section id="projects_section" className="py-20 px-6 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-12 border-l-4 border-[#4f46e5] pl-4">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectList.map((p) => (
          <div
            key={p.slug}
            className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#111827] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4f46e5]/50"
          >
            <div className="relative h-64 overflow-hidden rounded-t-[2rem] bg-slate-950">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
              <Image
                src={p.previewImage}
                alt={`${p.name} screenshot preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 top-4 mx-6 flex items-center justify-between text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">{p.name.toLowerCase().replace(/ /g, '-')}.vercel.app</span>
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-[1.75rem] border border-white/10 bg-black/40 p-5 shadow-xl shadow-black/40 backdrop-blur-sm">
                <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                <div className="mb-3 h-3 w-20 rounded-full bg-white/15" />
                <div className="mb-3 h-12 rounded-2xl bg-white/20" />
                <div className="flex gap-2 mt-4">
                  <span className="h-3 flex-1 rounded-full bg-white/15" />
                  <span className="h-3 flex-1 rounded-full bg-white/10" />
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

              <p className="text-zinc-400 leading-relaxed mb-6 min-h-[60px]">{p.desc}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-2xl border border-zinc-700 bg-[#111827] px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8]">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${p.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4f46e5] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105"
              >
                View Details <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}