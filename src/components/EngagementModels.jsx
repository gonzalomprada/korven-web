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
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-4">Modelos de Trabajo</h2>
          <p className="text-slate-400">Flexibilidad para adaptarse a tu etapa actual.</p>
        </div>

        {/* items-center es clave para que crezca hacia arriba y abajo por igual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {models.map((model, index) => (
            <MagicCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col relative transition-all duration-500 ${
                model.highlight 
                  // DESTACADA: Escala 115%, Sombra fuerte, Fondo más visible, Z-index alto
                  ? 'p-8 border-cyan-500 shadow-[0_0_60px_rgba(6,182,212,0.3)] bg-cyan-950/30 z-20 md:scale-110 lg:scale-115' 
                  // NORMALES: Un poco más tenues para que contraste la del medio
                  : 'p-6 border-white/5 bg-white/[0.02] hover:bg-white/5 md:scale-95 opacity-80 hover:opacity-100 z-0'
              }`}
            >
              {/* CARTEL: Posición absoluta centrada arriba */}
              {model.highlight ? (
                <div className="absolute -top-5 left-0 right-0 w-max mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  Más Popular
                </div>
              ) : null}

              {/* Contenido */}
              <div className={model.highlight ? "mt-10" : ""}>
                <h3 className={`font-bold text-white text-center mb-1 ${model.highlight ? "text-3xl" : "text-2xl"}`}>
                  {model.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-6 text-center tracking-wide uppercase opacity-90">
                  {model.subtitle}
                </p>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed text-center min-h-[60px]">
                  {model.desc}
                </p>

                <ul className="space-y-4 mb-8">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${model.highlight ? "text-cyan-400" : "text-slate-500"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`block w-full py-4 rounded-xl text-center font-bold text-sm tracking-wide transition-all ${
                  model.highlight
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
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
