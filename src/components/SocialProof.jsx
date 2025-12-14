import React from 'react';

// Lista ampliada con todas las tecnologías nuevas para dar máxima autoridad visual
const techStack = [
  "React", 
  "Next.js", 
  "TypeScript",
  "Node.js", 
  "Express",
  "Python", 
  "Docker", 
  "Kubernetes", 
  "OCI", 
  "AWS", 
  "Jenkins", 
  "Grafana", 
  "Prometheus",
  "CI/CD"
];

const SocialProof = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
          Potenciado por tecnologías de vanguardia
        </p>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* Truco visual: Duplicamos el contenido lo suficiente para asegurar que no haya huecos
           en pantallas ultra-anchas.
        */}
        <div className="animate-marquee whitespace-nowrap flex space-x-12 sm:space-x-24">
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <span 
              key={index} 
              className="text-xl sm:text-2xl font-bold text-slate-700 hover:text-cyan-400 transition-colors cursor-default select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Estilos de animación embebidos */}
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Un poco más lento para que se lean bien tantas tecnologías */
        }
        
        /* Pausar la animación cuando pasas el mouse por encima para que el usuario pueda leer tranquilo */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;