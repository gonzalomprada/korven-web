import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import ShinyButton from './ShinyButton'; // Reusamos el botón si quieres, o uno normal

const Contact = () => {
  return (
    // Quitamos bg-slate-900 para que sea transparente
    <footer id="contact" className="pt-24 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Panel de Vidrio para el Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">¿Iniciamos el despegue?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Tu próxima gran mejora tecnológica está a un mensaje de distancia.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <Mail className="h-5 w-5 mr-3 text-cyan-400" /> hola@korven.com
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400" /> Remoto Global
              </div>
            </div>
          </div>

          {/* Formulario Glassmorphism */}
          <div className="p-8 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl">
            <form className="space-y-4">
              <div>
                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-500 outline-none transition-all" placeholder="Nombre" />
              </div>
              <div>
                <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-500 outline-none transition-all" placeholder="Email" />
              </div>
              <div>
                <textarea rows="4" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-500 outline-none transition-all" placeholder="Mensaje"></textarea>
              </div>
              <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-cyan-500/25">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© Korven 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;