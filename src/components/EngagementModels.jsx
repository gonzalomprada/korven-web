import React from 'react';
import { Check } from 'lucide-react';
import MagicCard from './MagicCard';

const models = [
  {
    title: "MVP Express",
    subtitle: "Para Startups",
    desc: "Valida tu idea en tiempo récord con un producto funcional.",
    features: ["Alcance definido", "Diseño UX/UI Esencial", "Entrega en 4-6 semanas", "Código escalable"],
    highlight: false
  },
  {
    title: "Software a Medida",
    subtitle: "Para Empresas",
    desc: "Soluciones robustas para digitalizar y automatizar procesos.",
    features: ["Arquitectura compleja", "Integraciones API", "Panel de administración", "Soporte prioritario"],
    highlight: true 
  },
  {
    title: "Staff Augmentation",
    subtitle: "Para Equipos IT",
    desc: "Sumamos desarrolladores senior a tu equipo actual.",
    features: ["Dedicatoria full-time", "Sin cargas sociales", "Onboarding inmediato", "Gestión simplificada"],
    highlight: false
  }
];

const EngagementModels = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">Modelos de Trabajo</h2>
          <p className="text-slate-400">Flexibilidad para adaptarse a tu etapa actual.</p>
        </div>

        {/* CAMBIO CLAVE: 'items-center' para que se alineen al centro verticalmente. 
            La tarjeta del medio será naturalmente más alta y sobresaldrá. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {models.map((model, index) => (
            <MagicCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col relative transition-all duration-300 ${
                model.highlight 
                  ? 'p-8 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.15)] bg-cyan-900/10 z-10 scale-105' // scale-105 la hace un pelín más grande en general
                  : 'p-6 border-white/10 hover:border-white/20 bg-white/5 scale-100'
              }`}
            >
              {/* Lógica del Cartel y Espaciado */}
              {model.highlight ? (
                // CAMBIO: 'w-max mx-auto' hace que el ancho se ajuste al texto y se centre.
                <div className="absolute -top-4 left-0 right-0 w-max mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Más Popular
                </div>
              ) : null}

              {/* Ajuste de margen superior para compensar visualmente si es necesario */}
              <div className={model.highlight ? "mt-4" : ""}>
                <h3 className="text-2xl font-bold text-white text-center">{model.title}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4 text-center">{model.subtitle}</p>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed text-center">{model.desc}</p>

                <ul className="space-y-4 mb-8">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <Check className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`block w-full py-3 px-6 rounded-lg text-center font-medium transition-all ${
                  model.highlight
                    ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/30'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}>
                  Consultar
                </a>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
