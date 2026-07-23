"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    const prefersReduced = isClient && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = isClient && window.innerWidth < 768;

    const ctx = gsap.context(() => {
      if (!prefersReduced && !isMobile) {
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
      } else {
        // Reduced or mobile: minimal animation
        gsap.from(".hero-content > *", {
          y: 10,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power1.out"
        });
      }
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
          <a href="#main-content" className="px-4 py-1 bg-[#4f46e5] text-white rounded-full">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects_section" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden rounded-xl border border-zinc-700 bg-[#0f172a] p-3 text-zinc-300 shadow-sm transition hover:bg-zinc-800"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        <a href="/my-cv.pdf" download className="hidden md:inline-block">
          <button className="px-4 py-2 border border-zinc-700 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition text-sm">
            Download CV <span className="ml-1">↓</span>
          </button>
        </a>
        {open && (
          <>
            <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />
            <div className="fixed right-0 top-0 z-50 h-full w-72 bg-[#071126] p-6 shadow-2xl md:hidden">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button type="button" aria-label="Close menu" className="text-zinc-300" onClick={() => setOpen(false)}>✕</button>
              </div>
              <nav className="space-y-4">
                <a href="#main-content" onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg text-white hover:bg-zinc-900 transition">Home</a>
                <a href="#about" onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg text-white hover:bg-zinc-900 transition">About</a>
                <a href="#skills" onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg text-white hover:bg-zinc-900 transition">Skills</a>
                <a href="#projects_section" onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg text-white hover:bg-zinc-900 transition">Projects</a>
                <a href="#contact" onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg text-white hover:bg-zinc-900 transition">Contact</a>
              </nav>
              <div className="mt-6">
                <a href="/my-cv.pdf" download onClick={() => setOpen(false)} className="block w-full text-center px-4 py-3 bg-[#4f46e5] text-white rounded-2xl font-semibold shadow hover:brightness-105 transition">Download CV ↓</a>
              </div>
            </div>
          </>
        )}
      </nav>

      <div className="grow flex flex-col md:flex-row items-center justify-around mt-10">
        <div className="max-w-xl text-center md:text-left hero-content">
          <p className="text-zinc-400 text-lg tracking-wider">HI, I&apos;M</p>
          <h1 className="text-6xl md:text-7xl font-bold my-2">Miraz Ahammed</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Full Stack <span className="text-[#2563eb]">Next.js</span> Developer
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
              <a href="https://github.com/miraz-ahammed" target="_blank" rel="noopener noreferrer" className="hover:text-[#4f46e5] transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/miraz-ahammed" target="_blank" rel="noopener noreferrer" className="hover:text-[#4f46e5] transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div ref={imgRef} className="relative mt-16 md:mt-0">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-4 border-[#4f46e5] p-3 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
            <Image
              src="/parvez.jpg"
              alt="Md Miraz"
              width={450}
              height={450}
              className="w-full h-full object-cover rounded-full bg-slate-800"
              priority
            />
          </div>

          <div className="absolute -top-5 -right-5 w-6 h-6 bg-[#4f46e5] rounded-full blur-md animate-pulse"></div>
          <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-[#38bdf8] rounded-full blur-lg opacity-50"></div>
        </div>
      </div>
    </section>
  );
}