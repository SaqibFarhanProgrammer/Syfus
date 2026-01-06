
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.85] tracking-tight mb-12">
            WHERE IDEAS<br />
            <span className="text-neutral-500">TURN INTO</span><br />
            CODE.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <a 
              href="#portfolio" 
              className="group relative px-10 py-5 bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 text-lg font-medium tracking-tight group-hover:text-black transition-colors duration-500 uppercase">View Work</span>
            </a>
            
            <a 
              href="#contact" 
              className="text-lg font-medium tracking-tight border-b-2 border-neutral-700 hover:border-white transition-all py-1 uppercase"
            >
              Collaborate With Us
            </a>
          </div>
        </div>
      </div>

      {/* Floating UI Elements Decoration */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block w-96 h-96 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border border-neutral-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-10 left-10 w-full h-full border border-neutral-800 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-20 left-20 w-3/4 h-3/4 bg-gradient-to-br from-neutral-800/20 to-transparent blur-3xl rounded-full"></div>
      </div>
      
      
    </section>
  );
};

export default Hero;
