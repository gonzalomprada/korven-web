import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  return (
    // IMPORTANTE: bg-transparent para dejar ver el Background.jsx
    <section className="relative py-24 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            ¿Por qué elegir Korven?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            No somos otra agencia más. Somos tu socio tecnológico estratégico.
          </p>
        </div>

        {/* Contenedor con efecto cristal (backdrop-blur) sutil */}
        <div className="overflow-x-auto rounded-2xl border border-sky-500/20 bg-slate-900/30 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-sky-500/20">
                <th className="p-6 text-slate-300 font-semibold w-1/3">Criterio</th>
                <th className="p-6 text-slate-400 font-medium w-1/3">Agencias Tradicionales</th>
                {/* Columna Korven destacada */}
                <th className="p-6 text-sky-400 font-bold w-1/3 bg-sky-900/10">
                  Korven
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-500/10">
              {/* Fila 1 */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-medium text-slate-200">Enfoque</td>
                <td className="p-6 text-slate-400">Vender horas / Proyectos aislados</td>
                <td className="p-6 text-white font-semibold bg-sky-900/5 shadow-[inset_0_0_20px_rgba(14,165,233,0.1)]">
                  Consultoría de Valor y Escalabilidad
                </td>
              </tr>
              {/* Fila 2 */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-medium text-slate-200">Tecnología</td>
                <td className="p-6 text-slate-400">Wordpress / Plantillas Genéricas</td>
                <td className="p-6 text-white font-semibold bg-sky-900/5 shadow-[inset_0_0_20px_rgba(14,165,233,0.1)]">
                  Stack Moderno (React, Node, AI)
                </td>
              </tr>
              {/* Fila 3 */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-medium text-slate-200">Soporte</td>
                <td className="p-6 text-slate-400">Tickets lentos y burocracia</td>
                <td className="p-6 text-white font-semibold bg-sky-900/5 shadow-[inset_0_0_20px_rgba(14,165,233,0.1)]">
                  Comunicación directa y ágil
                </td>
              </tr>
              {/* Fila 4 */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-medium text-slate-200">Costo-Beneficio</td>
                <td className="p-6 text-slate-400">Costos ocultos y mantenimiento alto</td>
                <td className="p-6 text-white font-semibold bg-sky-900/5 shadow-[inset_0_0_20px_rgba(14,165,233,0.1)]">
                  Inversión transparente y ROI claro
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
