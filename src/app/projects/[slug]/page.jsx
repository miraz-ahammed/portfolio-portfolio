import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import projectList, { getProjectBySlug } from "../../../data/projects";

// Pre-render a page for every project at build time
export function generateStaticParams() {
  return projectList.map((project) => ({ slug: project.slug }));
}

// Dynamic tab title per project
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} — Miraz Ahammed`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-white">
      <Link
        href="/#projects_section"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition mb-10"
      >
        <FiArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="relative h-64 md:h-80 w-full rounded-[2rem] overflow-hidden border border-zinc-800 mb-10 bg-slate-950">
        <Image
          src={project.previewImage}
          alt={`${project.name} screenshot preview`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-zinc-400 text-lg leading-relaxed mb-8">
        {project.longDesc}
      </p>

      {/* Tech stack */}
      <div className="mb-10">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold tracking-wide text-[#38bdf8] border border-[#38bdf8]/30 px-3 py-1 rounded-full uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#4f46e5] text-white rounded-xl font-semibold hover:brightness-105 transition"
        >
          <FaExternalLinkAlt size={14} /> Live Project
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-700 rounded-xl font-semibold hover:border-zinc-500 transition"
        >
          <FaGithub size={16} /> GitHub Repository
        </a>
      </div>

      {/* Challenges */}
      <div className="bg-[#111827] border border-zinc-800 rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-3 text-[#38bdf8]">
          Challenges Faced
        </h2>
        <p className="text-zinc-400 leading-relaxed">{project.challenges}</p>
      </div>

      {/* Future plans */}
      <div className="bg-[#111827] border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3 text-[#38bdf8]">
          Potential Improvements &amp; Future Plans
        </h2>
        <p className="text-zinc-400 leading-relaxed">{project.futurePlans}</p>
      </div>
    </section>
  );
}