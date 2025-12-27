import React from 'react';
import { 
  Wallet, 
  Truck, 
  ShoppingCart, 
  Stethoscope, 
  UtensilsCrossed, 
  Building2 
} from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { 
    icon: <Wallet className="w-6 h-6" />, 
    title: "Fintech", 
    desc: "Billeteras virtuales, pasarelas de pago y seguridad bancaria." 
  },
  { 
    icon: <Truck className="w-6 h-6" />, 
    title: "Logística", 
    desc: "Sistemas de tracking en tiempo real y optimización de rutas." 
  },
  { 
    icon: <ShoppingCart className="w-6 h-6" />, 
    title: "E-Commerce", 
    desc: "Plataformas escalables para alto tráfico y gestión de catálogos." 
  },
  { 
    icon: <Stethoscope className="w-6 h-6" />, 
    title: "HealthTech", 
    desc: "Historias clínicas digitales y gestión de turnos con privacidad total." 
  },
  { 
    icon: <UtensilsCrossed className="w-6 h-6" />, 
    title: "Gastronomía", 
    desc: "Software para gestión de pedidos, stock de ingredientes y delivery." 
  },
  { 
    icon: <Building2 className="w-6 h-6" />, 
    title: "Proptech", 
    desc: "CRMs inmobiliarios y plataformas de alquiler automatizadas." 
  }
];

const Industries = () => {
  return (
    // CAMBIO IMPORTANTE: Quitamos 'bg-black' para que el fondo Abyss se vea
    <section id="industries" className="py-24 relative"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      <div className="mb-16 border-b border-white/10 pb-8 text-center">
          {/* Agregamos mx-auto aquí para centrar esta caja de ancho limitado */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Sectores Especializados</h2>
            <p className="text-slate-400">
              No hacemos "software genérico". Entendemos las reglas de juego de tu industria.
            </p>
          </div>
        </div>

        {/* Grid con espacio para que se note la separación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // AJUSTE: Fondo semitransparente (bg-black/20) y borde sutil
              className="group relative bg-black/20 backdrop-blur-sm p-8 hover:bg-black/40 transition-colors duration-300 overflow-hidden border border-white/5 rounded-xl"
            >
              {/* Patrón de puntos de fondo (sutil) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500" 
                   style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
              </div>

              {/* Barra lateral Cyan que se enciende */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              {/* Icono */}
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-300 border border-white/5">
                {item.icon}
              </div>

              {/* Textos */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {item.desc}
              </p>

              {/* Flecha decorativa */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span className="text-cyan-500 text-lg">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;