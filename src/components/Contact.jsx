import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle, Send, Loader2, ArrowRight, ChevronDown, Check, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  // Estado del formulario
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    service: 'Software a Medida',
    message: ''
  });

  // Estado del Dropdown
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const serviceOptions = [
    "Software a Medida",
    "MVP Express",
    "Staff Augmentation",
    "Consultoría / Otro"
  ];

  // Estado visual
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // REEMPLAZA ESTOS VALORES CON LOS DE TU CUENTA DE EMAILJS
    const SERVICE_ID = 'service_z4zu272';
    const TEMPLATE_ID = 'template_lts5f6a';
    const PUBLIC_KEY = 'Mbd0WWiB2FRUid0-7';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', service: 'Software a Medida', message: '' });
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectOption = (option) => {
    setFormData({ ...formData, service: option });
    setIsOpen(false);
  };

  return (
    // CAMBIO 1: FONDO UNIFICADO
    // Usamos un gradiente radial superior para imitar la luz del Hero
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Contanos qué necesitás y construyamoslo juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Canales Directos</h3>
            <p className="text-slate-400 leading-relaxed">
              Completa el formulario para recibir una propuesta formal, o escribinos por chat para consultas rápidas.
            </p>

            {/* Lista de Correos */}
            <div className="flex items-start group">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mr-4 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all flex-shrink-0">
                <Mail className="h-5 w-5 text-slate-300 group-hover:text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-2">Correos de Contacto</p>
                <div className="space-y-2">
                  <a href="mailto:gonzalomprada@gmail.com" className="block text-white hover:text-cyan-400 transition-colors font-medium">
                    gonzalomprada@gmail.com
                  </a>
                  <a href="mailto:August.arana.dev@gmail.com" className="block text-white hover:text-cyan-400 transition-colors font-medium">
                    August.arana.dev@gmail.com
                  </a>
                  <a href="mailto:cebagerman@gmail.com" className="block text-white hover:text-cyan-400 transition-colors font-medium">
                    cebagerman@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-900/10 to-emerald-900/10 border border-green-500/20 mt-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start relative z-10">
                <MessageCircle className="h-7 w-7 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp Directo</h4>
                  <p className="text-sm text-slate-400 mb-5">Respuesta inmediata para dudas puntuales.</p>
                  <a 
                    href="https://wa.me/5491140996116" // TU NÚMERO
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-green-500/20"
                  >
                    Abrir Chat <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Seguinos en nuestras redes</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/gonerus/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://instagram.com/gonerus.tech?igsh=bmNqamE5bHoyMmV0&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:border-transparent hover:text-white transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-5 bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            {/* ... (Lógica de éxito/error igual que antes) ... */}
            {status === 'success' && (
              <div className="absolute inset-0 bg-black/95 rounded-3xl z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <div className="h-20 w-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Recibido!</h3>
                <p className="text-slate-400 mb-8">El mensaje se envió correctamente.</p>
                <button type="button" onClick={() => setStatus('idle')} className="text-cyan-400 hover:text-cyan-300 font-medium underline">
                  Enviar otro mensaje
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nombre</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2 relative" ref={dropdownRef}>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Interés Principal</label>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-left flex items-center justify-between transition-all ${isOpen ? 'border-cyan-500 ring-1 ring-cyan-500' : 'border-white/10 hover:border-white/30'}`}
              >
                <span className="text-white font-medium">{formData.service}</span>
                <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-30 animate-in fade-in zoom-in-95 duration-200">
                  {serviceOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => selectOption(option)}
                      className={`px-4 py-3 cursor-pointer flex items-center justify-between transition-colors ${formData.service === option ? 'bg-cyan-900/20 text-cyan-400' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                    >
                      <span>{option}</span>
                      {formData.service === option && <Check className="h-4 w-4" />}
                    </div>
                  ))}
                </div>
              )}
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
                placeholder="Detalles del proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-white text-black hover:bg-slate-200 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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

        {/* CAMBIO 2: FOOTER / COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 mt-12 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Gonerus. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;