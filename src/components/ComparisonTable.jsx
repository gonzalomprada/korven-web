import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <section className="relative py-24 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- NUEVO CABEZAL TIPO 'INDUSTRIES' (CENTRADO) --- */}
        <div className="mb-16 border-b border-white/10 pb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Por qué elegir <span className="text-cyan-400">Gonerus</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dejamos atrás el modelo obsoleto de las agencias tradicionales. 
            Somos tu socio tecnológico estratégico.
          </p>
        </div>
        {/* -------------------------------------------------- */}

        {/* TABLA CON EFECTO GLASS (Mismo diseño interno) */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl relative">
          
          {/* Brillo superior sutil */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-8 text-slate-400 font-medium text-sm uppercase tracking-widest w-1/4">Criterio</th>
                  <th className="p-8 text-slate-500 font-medium text-sm uppercase tracking-widest w-1/3">Agencias Tradicionales</th>
                  {/* Columna Gonerus Destacada */}
                  <th className="relative p-8 w-1/3">
                    <div className="absolute inset-0 bg-cyan-500/10 border-b border-cyan-500/20"></div>
                    <span className="relative z-10 text-cyan-400 font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                      Gonerus <ArrowRight size={16} />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                
                {/* Fila 1: Enfoque */}
                <tr className="group hover:bg-white/5 transition-colors duration-300">
                  <td className="p-8 font-semibold text-white">Enfoque</td>
                  <td className="p-8 text-slate-400 flex items-start gap-3">
                    <X className="text-red-500/50 mt-1 shrink-0" size={18} />
                    <span>Vender horas / Proyectos aislados</span>
                  </td>
                  <td className="p-8 relative bg-cyan-900/5 group-hover:bg-cyan-900/10 transition-colors">
                    <div className="flex items-start gap-3 relative z-10">
                      <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-1">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-white font-medium">Consultoría de Valor y Escalabilidad</span>
                    </div>
                  </td>
                </tr>

                {/* Fila 2: Tecnología */}
                <tr className="group hover:bg-white/5 transition-colors duration-300">
                  <td className="p-8 font-semibold text-white">Tecnología</td>
                  <td className="p-8 text-slate-400 flex items-start gap-3">
                    <X className="text-red-500/50 mt-1 shrink-0" size={18} />
                    <span>Wordpress / Plantillas Genéricas</span>
                  </td>
                  <td className="p-8 relative bg-cyan-900/5 group-hover:bg-cyan-900/10 transition-colors">
                     <div className="flex items-start gap-3 relative z-10">
                      <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-1">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-white font-medium">Stack Moderno (React, Node, AI)</span>
                    </div>
                  </td>
                </tr>

                {/* Fila 3: Soporte */}
                <tr className="group hover:bg-white/5 transition-colors duration-300">
                  <td className="p-8 font-semibold text-white">Soporte</td>
                  <td className="p-8 text-slate-400 flex items-start gap-3">
                    <X className="text-red-500/50 mt-1 shrink-0" size={18} />
                    <span>Tickets lentos y burocracia</span>
                  </td>
                  <td className="p-8 relative bg-cyan-900/5 group-hover:bg-cyan-900/10 transition-colors">
                     <div className="flex items-start gap-3 relative z-10">
                      <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-1">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-white font-medium">Comunicación directa y ágil</span>
                    </div>
                  </td>
                </tr>

                {/* Fila 4: Costo */}
                <tr className="group hover:bg-white/5 transition-colors duration-300">
                  <td className="p-8 font-semibold text-white">Costo-Beneficio</td>
                  <td className="p-8 text-slate-400 flex items-start gap-3">
                    <X className="text-red-500/50 mt-1 shrink-0" size={18} />
                    <span>Costos ocultos y mantenimiento alto</span>
                  </td>
                  <td className="p-8 relative bg-cyan-900/5 group-hover:bg-cyan-900/10 transition-colors">
                     <div className="flex items-start gap-3 relative z-10">
                      <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-1">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-white font-medium">Inversión transparente y ROI claro</span>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
