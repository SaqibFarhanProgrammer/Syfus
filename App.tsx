
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import ExperimentalBackground from './components/ExperimentalBackground';

const App: React.FC = () => {
  useEffect(() => {
    // Basic smooth scroll implementation (native)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-white selection:text-black">
      <ExperimentalBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Vision />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      
      <footer className="py-12 px-6 border-t border-neutral-800 text-neutral-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2024 AETHER LAB. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
