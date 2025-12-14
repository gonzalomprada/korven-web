import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScrolling = ({ children }) => {
  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2, // Velocidad (más alto = más lento/suave)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de física
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Loop de animación (necesario para que funcione)
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpieza cuando se desmonta el componente
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;