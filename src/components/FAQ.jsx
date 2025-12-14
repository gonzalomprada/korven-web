import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo es el proceso de presupuesto?",
    answer: "Analizamos tus requerimientos en una reunión inicial gratuita de 30 minutos. Luego, te entregamos una propuesta detallada con tiempos y costos fijos. Sin sorpresas."
  },
  {
    question: "¿Trabajan con empresas internacionales?",
    answer: "Sí, Korven es una empresa remota global. Trabajamos con clientes de Latinoamérica, Europa y Estados Unidos, adaptándonos a tu zona horaria."
  },
  {
    question: "¿Qué pasa después de terminar el desarrollo?",
    answer: "No te dejamos solo. Ofrecemos planes de mantenimiento y soporte mensual para asegurar que tu software siga funcionando perfecto y actualizado."
  },
  {
    question: "¿Pueden mejorar un software que ya tengo?",
    answer: "Absolutamente. Realizamos auditorías de código y refactorización para modernizar sistemas legados (Legacy) y mejorar su rendimiento."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-cyan-400' : 'text-slate-200 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? <Plus className="h-6 w-6 text-cyan-400" /> : <Plus className="h-6 w-6 text-slate-500" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-slate-400">Resolvemos tus dudas antes de empezar.</p>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;