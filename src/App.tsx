import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;