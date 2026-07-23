import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "React", icon: <FaReact className="text-[#61dbfb]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#e34f26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572b6]" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#f1502f]" /> },
      { name: "Figma", icon: <FaFigma className="text-[#f24e1e]" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto text-center text-white">
      <h2 className="text-4xl font-bold mb-16 border-b-2 border-[#4f46e5] inline-block pb-2 uppercase tracking-widest">
        My Tech Stack
      </h2>

      <div className="space-y-14 text-left">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold text-zinc-400 uppercase tracking-wide mb-6">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-6 bg-[#111827] border border-zinc-800 rounded-2xl hover:border-[#4f46e5] hover:bg-[#1a2235] transition-all duration-300 flex flex-col items-center justify-center gap-4"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}