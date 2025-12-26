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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Modelos de Trabajo</h2>
          <p className="text-slate-400">Flexibilidad para adaptarse a tu etapa actual.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <MagicCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Lógica de clases: Si es highlight, agregamos borde cyan y sombra.
              className={`p-8 flex flex-col h-full ${
                model.highlight 
                  ? 'border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.1)] bg-cyan-900/10' 
                  : ''
              }`}
            >
              {/* CORRECCIÓN AQUÍ: 
                  Cambiamos 'absolute' por un flujo normal (relative por defecto).
                  Usamos 'self-center' para centrarlo y 'mb-4' para empujar el título hacia abajo.
              */}
              {model.highlight ? (
                <div className="self-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg mb-6">
                  Más Popular
                </div>
              ) : (
                // Agregamos un espaciador invisible en las otras tarjetas para que los títulos queden alineados a la misma altura
                <div className="h-10 mb-2"></div> 
              )}

              <h3 className="text-2xl font-bold text-white">{model.title}</h3>
              <p className="text-cyan-400 text-sm font-medium mb-4">{model.subtitle}</p>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">{model.desc}</p>

              <ul className="space-y-4 mb-8 flex-1">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <Check className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`w-full py-3 px-6 rounded-lg text-center font-medium transition-all relative z-20 ${
                model.highlight
                  ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Consultar
              </a>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
