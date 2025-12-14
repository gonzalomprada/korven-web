import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <section className="py-24 relative bg-black/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">¿Por qué elegir Korven?</h2>
          <p className="text-slate-400">La diferencia está en los detalles y el compromiso.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-slate-400 font-medium">Criterio</th>
                <th className="py-4 px-6 text-slate-500 font-medium opacity-50">Freelancers</th>
                <th className="py-4 px-6 text-slate-500 font-medium opacity-50">Agencia Tradicional</th>
                <th className="py-4 px-6 text-cyan-400 font-bold bg-cyan-900/10 rounded-t-xl border-t border-x border-cyan-500/20">Korven</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                { criterion: "Calidad de Código", free: "Variable", agency: "Estandarizado", korven: "Excelencia (Clean Code)" },
                { criterion: "Comunicación", free: "Intermitente", agency: "Burocrática", korven: "Directa y Ágil" },
                { criterion: "Velocidad de Entrega", free: "Lenta", agency: "Media", korven: "Alta (Sprints Semanales)" },
                { criterion: "Soporte Post-Lanzamiento", free: <X className="h-5 w-5 text-red-500" />, agency: "Costo Adicional Alto", korven: <Check className="h-5 w-5 text-cyan-400" /> },
                { criterion: "Visión de Negocio", free: <X className="h-5 w-5 text-red-500" />, agency: <Check className="h-5 w-5 text-slate-500" />, korven: <Check className="h-5 w-5 text-cyan-400" /> },
              ].map((row, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-medium text-white">{row.criterion}</td>
                  <td className="py-4 px-6 text-slate-500">{row.free}</td>
                  <td className="py-4 px-6 text-slate-500">{row.agency}</td>
                  <td className="py-4 px-6 text-white font-semibold bg-cyan-900/10 border-x border-cyan-500/10 shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]">
                    {row.korven}
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