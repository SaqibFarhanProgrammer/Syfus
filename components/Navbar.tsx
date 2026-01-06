import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/70 backdrop-blur-sm' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          Syfus.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-widest uppercase text-white">
          <a href="#vision" className="hover:text-neutral-400 transition-colors">
            Vision
          </a>
          <a href="#services" className="hover:text-neutral-400 transition-colors">
            Expertise
          </a>
          <a href="#portfolio" className="hover:text-neutral-400 transition-colors">
            Work
          </a>
          <a href="#process" className="hover:text-neutral-400 transition-colors">
            Workflow
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-all"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white uppercase text-xs tracking-widest font-bold"
          onClick={() => setMobileMenuOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-md text-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6 z-20">
          <button
            className="text-white text-xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-10 uppercase font-medium">
          <a
            href="#vision"
            className="hover:text-neutral-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vision
          </a>
          <a
            href="#services"
            className="hover:text-neutral-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Expertise
          </a>
          <a
            href="#portfolio"
            className="hover:text-neutral-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#process"
            className="hover:text-neutral-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Workflow
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Project
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1]"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
