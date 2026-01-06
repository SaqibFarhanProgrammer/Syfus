
import React from 'react';

const steps = [
  {
    num: "01",
    title: "DISCOVERY",
    desc: "We analyze the constraints, the possibilities, and the core purpose of your vision."
  },
  {
    num: "02",
    title: "IDEATION",
    desc: "Conceptual mapping and prototyping that prioritizes bold, unique directions."
  },
  {
    num: "03",
    title: "PROTOTYPING",
    desc: "Bringing concepts to life through rapid iterative development cycles."
  },
  {
    num: "04",
    title: "LAUNCH",
    desc: "Deploying high-performance digital experiences that command attention."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6 border-t border-neutral-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center">THE WORKFLOW.</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for the timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-24 md:space-y-48">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-8 md:p-12 border border-neutral-800 rounded-lg relative overflow-hidden group hover:bg-neutral-800/10 transition-colors ${idx % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-8xl font-black text-neutral-900/40 absolute -top-8 left-4 group-hover:text-neutral-800/40 transition-colors">{step.num}</div>
                    <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-widest">{step.title}</h3>
                    <p className="text-neutral-500 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-neutral-800 bg-[#0E0E11] relative z-10 flex items-center justify-center hidden md:flex">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
