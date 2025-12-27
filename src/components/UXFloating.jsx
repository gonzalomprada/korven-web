import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
// Borré 'MessageCircle' porque ya no necesitamos el icono

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

    </>
  );
};

export default UXFloating;