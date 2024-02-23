import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import FunProjects from '@/components/fun-projects';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <FunProjects />
      <Contact />
    </main>
  );
}
