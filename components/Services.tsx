
import React from 'react';

const services = [
  {
    title: "EXPERIMENTAL APPLICATIONS",
    description: "Web experiences that push technical boundaries and browser capabilities.",
    icon: "01"
  },
  {
    title: "INTERACTIVE UI/UX",
    description: "Designing interfaces that breathe, move, and respond with human-centricity.",
    icon: "02"
  },
  {
    title: "PERFORMANCE & SCALING",
    description: "High-octane code architecture built for massive load and sub-second delivery.",
    icon: "03"
  },
  {
    title: "AI INTEGRATION",
    description: "Leveraging Large Language Models and Generative AI to automate the extraordinary.",
    icon: "04"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#0E0E11] relative z-20">
      <div className="container mx-auto">
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-600 block mb-4">Core Expertise</span>
          <h2 className="text-5xl md:text-7xl font-bold">OUR SERVICES.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-10 border border-neutral-800 transition-all duration-500 hover:bg-neutral-800/10 ${
                index % 2 === 0 ? 'md:-mt-12 md:mb-12' : ''
              }`}
            >
              <div className="text-6xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors mb-12">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed">{service.description}</p>
              
              <div className="mt-12 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
