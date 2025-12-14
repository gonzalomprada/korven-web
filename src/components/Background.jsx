import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full">
      {/* Fondo Base Negro */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* El "Abyss" (Radial Gradient adaptado al Azul Korven) */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #0c4a6e 100%)" 
          // Nota: He movido el foco de luz arriba (10%) para que ilumine el Hero, 
          // y cambiado el violeta por un Cyan/Azul oscuro (#0c4a6e).
        }}
      />
      
      {/* Malla sutil opcional para textura (puedes quitarla si quieres limpieza total) */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

export default Background;