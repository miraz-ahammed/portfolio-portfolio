import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center text-white">
      <h2 className="text-4xl font-bold mb-6 border-b-2 border-[#4f46e5] inline-block pb-2 uppercase">
        Get In Touch
      </h2>
      <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
        I am currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="mailto:tangilapatwaryy@gmail.com" className="p-8 bg-[#111827] border border-zinc-800 rounded-2xl hover:border-[#4f46e5] transition group">
          <FaEnvelope className="text-3xl mx-auto mb-4 text-[#4f46e5] group-hover:scale-110 transition" />
          <h4 className="font-bold">Email</h4>
          <p className="text-zinc-500 text-sm">Send a message</p>
        </a>
        <a href="https://www.linkedin.com/in/miraz-ahammed" target="_blank" rel="noopener noreferrer" className="p-8 bg-[#111827] border border-zinc-800 rounded-2xl hover:border-[#4f46e5] transition group">
          <FaLinkedin className="text-3xl mx-auto mb-4 text-[#38bdf8] group-hover:scale-110 transition" />
          <h4 className="font-bold">LinkedIn</h4>
          <p className="text-zinc-500 text-sm">Let&apos;s connect</p>
        </a>
        <a href="https://github.com/miraz-ahammed" target="_blank" rel="noopener noreferrer" className="p-8 bg-[#111827] border border-zinc-800 rounded-2xl hover:border-[#4f46e5] transition group">
          <FaGithub className="text-3xl mx-auto mb-4 text-white group-hover:scale-110 transition" />
          <h4 className="font-bold">GitHub</h4>
          <p className="text-zinc-500 text-sm">Check my code</p>
        </a>
      </div>
      
      <div className="mt-16 text-zinc-600 text-sm italic">
        Designed & Built by Miraz Ahammed © 2026
      </div>
    </section>
  );
}