import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Projects />
        <CaseStudy />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
