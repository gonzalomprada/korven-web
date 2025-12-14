import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const UXFloating = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* 1. Barra de Progreso Superior */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* 2. Botón WhatsApp Flotante */}
      <a
        href="https://wa.me/1234567890" // ¡Recuerda poner tu número real aquí!
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-lg shadow-green-900/20 transition-transform hover:scale-110 flex items-center justify-center"
        title="Contáctanos por WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-current" />
        {/* Notificación (puntito rojo) opcional para llamar la atención */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </a>
    </>
  );
};

export default UXFloating;