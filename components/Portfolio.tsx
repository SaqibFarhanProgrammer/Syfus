import React, { useState } from 'react';
const projects = [
  {
    title: "STEELFRAMEAI",
    category: "AI Solutions",
    description: "Showcasing cutting-edge AI solutions for businesses and developers.",
    img: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    size: "small",
    link: "https://steelframeai-client.vercel.app/"
  },
  {
    title: "NOVA ZEN",
    category: "Wellness",
    description: "Promoting calm, balance, and wellness through a minimalist digital experience.",
    img: "https://images.unsplash.com/photo-1620121692029-d088224ddc74",
    size: "large",
    link: "https://nova-zen-client.vercel.app/"
  },
  {
    title: "LUMENSTUDIO",
    category: "Creative Studio",
    description: "Creative studio portfolio displaying innovative design and branding projects.",
    img: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5",
    size: "small",
    link: "https://lumenstudio-client.vercel.app/"
  },
  {
    title: "ATLAS PROPERTY CO.",
    category: "Real Estate",
    description: "Professional property portal helping clients find and invest in real estate.",
    img: "https://i.pinimg.com/1200x/53/70/f3/5370f3d1d051204e4be54678de2c11ef.jpg",
    size: "large",
    link: "https://atlas-property-co-client.vercel.app/"
  }
];


const Portfolio: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 italic tracking-tighter">
              PROJECTS.
            </h2>
            <p className="text-neutral-500 text-base">
              A selection of experimental works and conceptual explorations from the lab.
            </p>
          </div>
          <div className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-600 mb-2">
            Showcasing Innovation
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden bg-neutral-900 block rounded-xl ${
                project.size === 'large' ? 'aspect-[4/5]' : 'aspect-square'
              }`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl grayscale brightness-75"
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent rounded-xl">
                <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-neutral-300 text-sm md:text-base max-w-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold uppercase tracking-wider rounded"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
