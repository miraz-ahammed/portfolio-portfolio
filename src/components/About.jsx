import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 relative">
          <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#4f46e5] to-[#38bdf8] rounded-2xl rotate-3 absolute inset-0 opacity-20"></div>
          <div className="relative bg-[#111827] border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-5xl font-bold text-[#4f46e5] mb-4">1+</h3>
            <p className="text-zinc-400 uppercase tracking-widest text-sm">Years of Experience</p>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Age:</span>
                <span>19 Years</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Education:</span>
                <span>B.Sc. (Hons) in Chemistry — 1st Year</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Address:</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 border-l-4 border-[#4f46e5] pl-4">About Me</h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            I&apos;m a passionate <span className="text-white font-semibold">Full Stack Developer</span> who loves turning complex problems into simple, beautiful, and intuitive digital experiences — from pixel-perfect interfaces to the logic that powers them behind the scenes.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-6">
            My journey into web development started with a simple curiosity — wondering how the websites I used every day actually worked. That curiosity turned into countless hours of experimenting, breaking things, and rebuilding them, which eventually led me to master modern technologies like React, Next.js, Node.js, and MongoDB. Interestingly, my academic background is actually in <span className="text-[#38bdf8]">Chemistry</span> — but coding quickly grew from a side interest into a genuine passion I now pursue alongside my studies, and I spend most of my free time the same way I spend my study time — building things, learning new tools, and pushing myself to write cleaner and smarter code.
          </p>

          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
              Education
            </h3>
            <div className="space-y-2 text-zinc-400">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>B.Sc. (Hons) in Chemistry — 1st Year</span>
                <span className="text-zinc-500">Habibullah Bahar College</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Higher Secondary Certificate (HSC)</span>
                <span className="text-zinc-500">Passed 2024</span>
              </div>
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-8">
            I enjoy the full journey of building a product — designing a clean, responsive UI on the frontend, then architecting solid APIs and databases on the backend to bring it to life. For me, development isn&apos;t just work; it&apos;s genuinely how I like to spend my time, whether that&apos;s exploring a new framework, contributing to side projects, or improving something I built last month.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111827] p-4 rounded-xl border border-zinc-800">
              <h4 className="font-bold text-[#38bdf8]">Clean Code</h4>
              <p className="text-xs text-zinc-500">Writing maintainable and scalable code.</p>
            </div>
            <div className="bg-[#111827] p-4 rounded-xl border border-zinc-800">
              <h4 className="font-bold text-[#38bdf8]">Modern UI</h4>
              <p className="text-xs text-zinc-500">Crafting beautiful user interfaces.</p>
            </div>
            <div className="bg-[#111827] p-4 rounded-xl border border-zinc-800">
              <h4 className="font-bold text-[#38bdf8]">Full Stack Mindset</h4>
              <p className="text-xs text-zinc-500">Comfortable across frontend and backend.</p>
            </div>
            <div className="bg-[#111827] p-4 rounded-xl border border-zinc-800">
              <h4 className="font-bold text-[#38bdf8]">Always Learning</h4>
              <p className="text-xs text-zinc-500">Exploring new tools in my free time too.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}