import React from 'react';
import MagicCard from './MagicCard';

const technologies = [
  { 
    category: "Frontend Moderno", 
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"] 
  },
  { 
    category: "Backend & Core", 
    stack: ["Node.js", "Express", "Python", "Go"] 
  },
  { 
    category: "Infraestructura & Cloud", 
    stack: ["OCI (Oracle Cloud)", "Kubernetes", "Docker", "AWS"] 
  },
  { 
    category: "DevOps & Observabilidad", 
    stack: ["Jenkins", "CI/CD", "Prometheus", "Grafana"] 
  }
];

const TechStack = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Nuestro Arsenal Tecnológico</h2>
          <p className="text-slate-400">
            Stack robusto enfocado en escalabilidad, monitoreo y despliegue continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <MagicCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 h-full" // Padding interno para que el contenido no pegue al borde
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-white/10 pb-2 flex justify-between items-center">
                {tech.category}
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.stack.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;