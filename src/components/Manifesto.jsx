import React from 'react';
import { motion } from 'framer-motion';
import MagicCard from './MagicCard';

const principles = [
  {
    title: "No somos 'Sí a todo'",
    desc: "Si una funcionalidad no aporta valor real a tu negocio o pone en riesgo el proyecto, te lo diremos. Preferimos ser honestos a facturar horas inútiles."
  },
  {
    title: "Código es Arte",
    desc: "Lo que no se ve, importa. Escribimos software limpio y documentado para que, si mañana no estamos, cualquier desarrollador pueda continuarlo sin dolores de cabeza."
  },
  {
    title: "Habla Humana",
    desc: "Odiamos la tecnofarlopa. Te explicaremos cada decisión en español claro, enfocándonos en cómo impacta en tu facturación y operativa."
  }
];

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-24 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              El Manifiesto <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Gonerus.</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Nacimos como respuesta a las agencias tradicionales lentas y burocráticas. Creemos en una ingeniería de software que sea ágil, transparente y, sobre todo, rentable para quien la contrata.
            </p>
            <div className="mt-8 h-1 w-20 bg-cyan-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {principles.map((item, index) => (
              <MagicCard
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-6 border-l-4 border-l-cyan-500" // Borde izquierdo acentuado
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </MagicCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;
