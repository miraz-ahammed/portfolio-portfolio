"use client";
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
      gsap.to(imgRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen bg-[#0a0f1a] text-white p-6 lg:p-12 flex flex-col overflow-hidden">

      <nav className="flex justify-between items-center py-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="text-[#38bdf8] text-2xl font-black">Miraz</span>
          <h1 className="text-xl font-semibold">Ahammed</h1>
        </div>
        <div className="hidden md:flex items-center gap-8 text-zinc-300">
          <a href="#" className="px-4 py-1 bg-[#4f46e5] text-white rounded-full">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects_section" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="/my-cv.pdf" download>
          <button className="px-5 py-2 border border-zinc-700 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition">
            Download CV <span>↓</span>
          </button>
        </a>
      </nav>

      <div className="flex-grow flex flex-col md:flex-row items-center justify-around mt-10">
        <div className="max-w-xl text-center md:text-left hero-content">
          <p className="text-zinc-400 text-lg tracking-wider">HI, I'M</p>
          <h1 className="text-6xl md:text-7xl font-bold my-2">Miraz Ahammed</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Frontend <span className="text-[#2563eb]">Next.js</span> Developer
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            I build modern, responsive and user-friendly web applications with Next.js.
            I specialize in creating high-performance digital experiences.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mb-12">
            <a href="#projects_section">
              <button className="px-8 py-3 bg-[#4f46e5] rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                View Projects →
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-3 border border-zinc-700 rounded-full font-bold hover:bg-zinc-800 transition-all">
                Contact Me →
              </button>
            </a>
          </div>

          <div>
            <p className="text-zinc-500 mb-4 uppercase text-xs tracking-[3px]">Follow me on</p>
            <div className="flex gap-5 text-xl justify-center md:justify-start">
              <a href="https://github.com/miraz-ahammed" target="_blank" className="hover:text-[#4f46e5] transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/miraz-ahammed
              " target="_blank" className="hover:text-[#4f46e5] transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div ref={imgRef} className="relative mt-16 md:mt-0">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-4 border-[#4f46e5] p-3 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
            <img
              src="/parvez.jpg"
              alt="Md Miraz"
              className="w-full h-full object-cover rounded-full bg-slate-800"
            />
          </div>

          <div className="absolute -top-5 -right-5 w-6 h-6 bg-[#4f46e5] rounded-full blur-md animate-pulse"></div>
          <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-[#38bdf8] rounded-full blur-lg opacity-50"></div>
        </div>
      </div>
    </section>
  );
}