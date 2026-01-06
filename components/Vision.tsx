import React from 'react';

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="py-32 px-6 relative overflow-hidden flex items-center justify-center"
    >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="relative text-center flex flex-col items-center">
            <div className="absolute -top-24 w-64 h-64 bg-neutral-800/10 rounded-full blur-[120px]"></div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
              CRAFTING THE
              <br />
              <span className="text-neutral-500 underline decoration-neutral-800 underline-offset-8">
                UNCONVENTIONAL.
              </span>
            </h2>

            <div className="space-y-6 text-lg text-neutral-400 max-w-2xl leading-relaxed font-light">
              <p>
                We are a collective of thinkers, designers, and developers dedicated to exploring the periphery of digital possibility.
              </p>
              <p>
                At AETHER LAB, we don't just build websites; we engineer immersive digital artifacts. Our process blends artistic intuition with technical precision to solve complex challenges through innovative creative coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
