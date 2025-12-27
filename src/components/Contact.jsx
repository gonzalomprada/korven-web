import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle, Send, Loader2, ArrowRight, ChevronDown, Check } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  // Estado del formulario
  const [formData, setFormData] = useState({
    user_name: '',    // EmailJS suele usar 'user_name' en sus templates por defecto
    user_email: '',   // EmailJS suele usar 'user_email'
    service: 'Software a Medida', // Opción Default solicitada
    message: ''
  });

  // Estado del Dropdown personalizado
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Opciones del servicio con iconos o descripciones cortas si quisieras
  const serviceOptions = [
    "Software a Medida",
    "MVP Express",
    "Staff Augmentation",
    "Consultoría / Otro"
  ];

  // Estado visual
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

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

  // Función para elegir opción del custom dropdown
  const selectOption = (option) => {
    setFormData({ ...formData, service: option });
    setIsOpen(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y construyamos algo increíble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Info + WhatsApp */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Canales Directos</h3>
            <p className="text-slate-400 leading-relaxed">
              Completa el formulario para recibir una propuesta en tu correo <strong>gonzalomprada@gmail.com</strong> (cuando configuremos el forward), o escríbenos por chat.
            </p>

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

            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-900/10 to-emerald-900/10 border border-green-500/20 mt-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start relative z-10">
                <MessageCircle className="h-7 w-7 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp Directo</h4>
                  <p className="text-sm text-slate-400 mb-5">Respuesta inmediata para dudas puntuales.</p>
                  <a 
                    href="https://wa.me/5491112345678?text=Hola%20Gonerus..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-green-500/20"
                  >
                    Abrir Chat <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario con EmailJS */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-5 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            
            {/* Overlay de Éxito */}
            {status === 'success' && (
              <div className="absolute inset-0 bg-black/95 rounded-3xl z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <div className="h-20 w-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Recibido!</h3>
                <p className="text-slate-400 mb-8">El mensaje ha sido enviado correctamente.</p>
                <button type="button" onClick={() => setStatus('idle')} className="text-cyan-400 hover:text-cyan-300 font-medium underline">
                  Enviar otro mensaje
                </button>
              </div>
            )}

             {/* Overlay de Error */}
             {status === 'error' && (
              <div className="absolute inset-0 bg-black/95 rounded-3xl z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <h3 className="text-2xl font-bold text-red-500 mb-2">Ocurrió un error</h3>
                <p className="text-slate-400 mb-8">No pudimos enviar el mensaje. Por favor intenta por WhatsApp.</p>
                <button type="button" onClick={() => setStatus('idle')} className="text-white bg-white/10 px-4 py-2 rounded-lg">
                  Intentar de nuevo
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

            {/* CUSTOM DROPDOWN (Mejorado visualmente) */}
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

              {/* Lista desplegable animada */}
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
      </div>
    </section>
  );
};

export default Contact;