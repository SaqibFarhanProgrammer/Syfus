
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-glass -neutral-900' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">Syfus.</a>
        
        <div className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-widest uppercase">
          <a href="#vision" className="hover:text-neutral-400 transition-colors">Vision</a>
          <a href="#services" className="hover:text-neutral-400 transition-colors">Expertise</a>
          <a href="#portfolio" className="hover:text-neutral-400 transition-colors">Work</a>
          <a href="#process" className="hover:text-neutral-400 transition-colors">Workflow</a>
          <a href="#contact" className="px-6 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-all">Start Project</a>
        </div>

        <button className="md:hidden text-white uppercase text-xs tracking-widest font-bold">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
