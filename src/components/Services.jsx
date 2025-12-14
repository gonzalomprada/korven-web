import React from 'react';
import { Cpu, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import MagicCard from './MagicCard'; // <--- Importar

const services = [
  // ... (el array services sigue igual) ...
  {
    icon: <Cpu className="h-8 w-8 text-cyan-300" />,
    title: 'Desarrollo a Medida',
    description: 'Arquitectura de software diseñada milimétricamente para tus necesidades específicas.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-300" />,
    title: 'Consultoría IT',
    description: 'Auditoría y optimización de procesos digitales para reducir costos y mejorar la eficiencia.'
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-300" />,
    title: 'Automatización',
    description: 'Bots y scripts inteligentes que trabajan 24/7 en tareas repetitivas para que tú te enfoques en crecer.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Nuestros Pilares</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Soluciones tecnológicas robustas para los desafíos de hoy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            // USAMOS MAGIC CARD AQUÍ
            <MagicCard
              key={index}
              // Pasamos las animaciones de entrada de Framer Motion directo al MagicCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Clases extra si hacen falta (padding, shadow)
              className="p-8 shadow-[0_0_20px_rgba(0,0,0,0.2)] h-full"
            >
              <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;