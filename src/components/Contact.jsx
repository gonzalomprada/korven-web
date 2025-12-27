import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Loader2, ArrowRight } from 'lucide-react';

const Contact = () => {
  // Estados para manejar el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'mvp', // Opción por defecto estratégica
    message: ''
  });
  
  // Estado visual (UX)
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulación de envío (Aquí luego conectaremos EmailJS)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'mvp', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      {/* Fondo sutil para dar profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y construyamos algo increíble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Vías de Contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Canales Directos</h3>
            <p className="text-slate-400 leading-relaxed">
              Estamos listos para escalar tu negocio. Completa el formulario para una propuesta formal, o escríbenos por chat para consultas rápidas.
            </p>

            {/* Email Directo */}
            <div className="flex items-center group">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mr-4 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
                <Mail className="h-5 w-5 text-slate-300 group-hover:text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email</p>
                <a href="mailto:hola@gonerus.com.ar" className="text-white hover:text-cyan-400 transition-colors font-medium">
                  hola@gonerus.com.ar
                </a>
              </div>
            </div>

            {/* CAJA DESTACADA: WHATSAPP */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-900/10 to-emerald-900/10 border border-green-500/20 mt-8 relative overflow-hidden group">
              {/* Efecto de brillo hover */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start relative z-10">
                <MessageCircle className="h-7 w-7 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">Chat Rápido</h4>
                  <p className="text-sm text-slate-400 mb-5">
                    ¿Tienes una duda puntual? Escríbenos directamente por WhatsApp.
                  </p>
                  
                  {/* REEMPLAZA EL NÚMERO AQUÍ ABAJO (Sin el +) */}
                  <a 
                    href="https://wa.me/5491112345678?text=Hola%20Gonerus,%20quisiera%20más%20información%20sobre..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-green-500/20"
                  >
                    Abrir WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario Inteligente */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            
            {status === 'success' ? (
              // VISTA DE ÉXITO
              <div className="absolute inset-0 bg-black/90 rounded-3xl z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <div className="h-20 w-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Recibido!</h3>
                <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                  Gracias por contactarnos. Analizaremos tu solicitud y te responderemos en breve.
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : null}

            {/* CAMPOS DEL FORMULARIO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  placeholder="nombre@empresa.com"
                />
              </div>
            </div>

            {/* SELECTOR ESTRATÉGICO */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Interés Principal</label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="mvp">🚀 MVP Express (Startups)</option>
                  <option value="custom">🏢 Software a Medida (Empresas)</option>
                  <option value="staff">👥 Staff Augmentation (Equipos IT)</option>
                  <option value="other">💬 Otra consulta</option>
                </select>
                {/* Flecha custom para el select */}
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mensaje</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-slate-600"
                placeholder="Cuéntanos detalles sobre tu proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-white text-black hover:bg-slate-200 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-2"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Enviando...
                </>
              ) : (
                "Enviar Consulta"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;