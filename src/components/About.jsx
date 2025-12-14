import React from 'react';
import { CheckCircle2, Search, Code, Rocket, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Bloque Superior --- */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 lg:mb-0"
          >
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Más que código, entregamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">soluciones estratégicas</span>.
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              En Korven, entendemos que la tecnología es un medio, no el fin. Nacimos para ser el socio tecnológico que las empresas modernas necesitan: ágiles, transparentes y obsesionados con la calidad.
            </p>
            <div className="space-y-4">
              {[
                'Transparencia total desde el día uno.',
                'Código limpio, escalable y mantenible.',
                'Enfoque en el retorno de inversión (ROI) de tu negocio.'
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="relative"
          >
            {/* Tarjeta Visual Abstracta (Reemplazo de +50 Proyectos) */}
            <div className="aspect-video rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 opacity-50 group-hover:opacity-70 transition-opacity"></div>
               
               {/* Icono animado central */}
               <div className="relative z-10 flex flex-col items-center">
                 <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <Globe2 className="h-10 w-10 text-cyan-400" />
                 </div>
                 <p className="text-2xl font-bold text-white mb-1">Alcance Global</p>
                 <p className="text-sm text-slate-400">Listos para escalar tu visión</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* --- Metodología (Se mantiene igual, añade valor) --- */}
        <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Nuestro Proceso</h3>
            <p className="text-slate-400 mt-3">De la idea a la realidad en 3 pasos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Search, title: "1. Inmersión", desc: "Analizamos tu negocio para entender el 'por qué' antes del 'cómo'." },
                { icon: Code, title: "2. Construcción Ágil", desc: "Sprints cortos con entregables visibles cada semana. Tú tienes el control." },
                { icon: Rocket, title: "3. Despegue", desc: "Lanzamiento, monitoreo y soporte continuo para asegurar el éxito." }
            ].map((step, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-left hover:bg-white/[0.05] transition-colors"
                >
                    <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/20">
                        <step.icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;