import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
