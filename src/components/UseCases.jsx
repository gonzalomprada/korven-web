import React from 'react';
import { TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import MagicCard from './MagicCard';

const cases = [
  {
    sector: "Logística & Stock",
    pain: "Mi inventario vive en 15 Excels desactualizados. Perdemos ventas por falta de stock real.",
    solution: "Sistema centralizado en la nube que sincroniza stock en tiempo real y alerta antes de quebrar.",
    metric: "Resultados: -40% errores operativos"
  },
  {
    sector: "Administración",
    pain: "Tardamos 5 días al mes en cerrar la facturación manualmente. Es tedioso y propenso a errores.",
    solution: "Script de automatización que procesa facturas, las envía a AFIP/Hacienda y actualiza el ERP en segundos.",
    metric: "Resultados: 5 días → 30 minutos"
  },
  {
    sector: "Startups",
    pain: "Tengo una idea validadora pero contratar un CTO es carísimo y las agencias tardan meses.",
    solution: "MVP Express. Lanzamos la versión 1.0 funcional en 4 semanas para que puedas levantar capital.",
    metric: "Resultados: Time-to-market récord"
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Problemas Reales, Soluciones Korven</h2>
          <p className="text-slate-400">Así es como transformamos cuellos de botella en ventajas competitivas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <MagicCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 h-full flex flex-col"
            >
              <span className="text-cyan-500 font-bold text-sm tracking-wider uppercase mb-6 block border-b border-white/10 pb-4">
                {item.sector}
              </span>
              
              {/* El Dolor */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 text-red-400/90 font-medium">
                   <AlertCircle className="w-5 h-5" /> El Desafío
                </div>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  "{item.pain}"
                </p>
              </div>

              {/* La Solución */}
              <div className="mb-8 flex-grow">
                <div className="flex items-center gap-2 mb-2 text-cyan-400 font-medium">
                   <CheckCircle2 className="w-5 h-5" /> Nuestra Solución
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>

              {/* Métrica de éxito */}
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2 text-green-400 text-sm font-bold">
                <TrendingUp className="w-4 h-4" />
                {item.metric}
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;