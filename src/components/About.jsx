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
                <span>Habibullah Bahar College</span>
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
            I&apos;m a passionate <span className="text-white font-semibold">Frontend Next.js Developer</span> who loves turning complex problems into simple, beautiful, and intuitive designs. 
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Currently, I am a student at <span className="text-[#38bdf8]">Habibullah Bahar College</span>. My journey in web development started with a curiosity about how things work on the internet, which led me to master modern technologies like React and Next.js. I focus on building fast, responsive, and user-centric web applications.
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
          </div>
        </div>

      </div>
    </section>
  );
}