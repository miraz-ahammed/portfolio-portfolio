import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0a0f1a]">
      <Hero />
      <div id="projects_section">
        <Projects />
      </div>
      <About />
      <Skills />
      <Contact />
    </main>
  );
}