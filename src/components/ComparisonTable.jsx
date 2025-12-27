import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonTable = () => {
  return (
    // CAMBIO: Usamos el fondo unificado y agregamos el efecto de luz
    <section className="py-24 relative bg-[#0a0a0a] overflow-hidden">
      
      {/* Efecto de luz de fondo (Glow Azul) para unificar el estilo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's talk about the project</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">La diferencia está en los detalles y el compromiso.</p>
        </div>

        {/* Agregamos un fondo sutil a la tabla para que destaque sobre el nuevo background */}
        <div className="overflow-x-auto rounded-2xl bg-white/5 border border-white/10 p-2 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-slate-400 font-medium">Criterio</th>
                <th className="py-4 px-6 text-slate-500 font-medium opacity-70">Freelancers</th>
                <th className="py-4 px-6 text-slate-500 font-medium opacity-70">Agencia Tradicional</th>
                {/* Ajuste visual en la cabecera de Gonerus para que coincida con la nueva estética */}
                <th className="py-4 px-6 text-cyan-400 font-bold bg-cyan-950/30 rounded-t-xl border-t border-x border-cyan-500/20 shadow-[inset_0_4px_20px_rgba(6,182,212,0.1)]">Gonerus</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                { criterion: "Calidad de Código", free: "Variable", agency: "Estandarizado", Gonerus: "Excelencia (Clean Code)" },
                { criterion: "Comunicación", free: "Intermitente", agency: "Burocrática", Gonerus: "Directa y Ágil" },
                { criterion: "Velocidad de Entrega", free: "Lenta", agency: "Media", Gonerus: "Alta (Sprints Semanales)" },
                { criterion: "Soporte Post-Lanzamiento", free: <X className="h-5 w-5 text-red-500" />, agency: "Costo Adicional Alto", Gonerus: <Check className="h-5 w-5 text-cyan-400" /> },
                { criterion: "Visión de Negocio", free: <X className="h-5 w-5 text-red-500" />, agency: <Check className="h-5 w-5 text-slate-500" />, Gonerus: <Check className="h-5 w-5 text-cyan-400" /> },
              ].map((row, index) => (
                // Ajuste en el hover para que sea más sutil sobre el fondo oscuro
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">{row.criterion}</td>
                  <td className="py-4 px-6 text-slate-500">{row.free}</td>
                  <td className="py-4 px-6 text-slate-500">{row.agency}</td>
                  {/* Ajuste en la columna de Gonerus para que resalte más */}
                  <td className="py-4 px-6 text-white font-semibold bg-cyan-950/20 border-x border-cyan-500/10 shadow-[inset_0_0_20px_rgba(6,182,212,0.05)] relative group">
                    {/* Pequeño efecto de brillo al pasar el mouse sobre la celda de Gonerus */}
                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    {row.Gonerus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
