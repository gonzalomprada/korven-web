import React from 'react';
import { motion } from 'framer-motion';
import ShinyButton from './ShinyButton'; // Importamos el botón nuevo

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge estilo Glass */}
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-6 backdrop-blur-md">
            <span>🚀 Consultoría & Desarrollo 2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight drop-shadow-2xl">
            Software que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
               supera límites.
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Eliminamos la fricción operativa. Creamos sistemas que escalan contigo, sobre un código robusto y diseño de vanguardia.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Usamos el componente estilo Uiverse */}
            <ShinyButton text="Comenzar Proyecto" href="#contact" />
            
            <a href="#services" className="text-slate-300 hover:text-white font-medium transition-colors hover:underline underline-offset-4">
              Explorar servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;