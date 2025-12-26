import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoGonerus from '../assets/logo-gonerus.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menú móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown desktop

  // Links principales
  const mainLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
  ];

  // Links del Dropdown "Explorar"
  const exploreLinks = [
    { name: 'Casos de Uso', href: '#use-cases' },
    { name: 'Industrias', href: '#industries' },
    { name: 'Manifiesto', href: '#manifesto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            {/* Usamos una etiqueta img normal */}
            <img 
              src={logoGonerus} 
              alt="Gonerus Logo" 
              className="h-16 w-auto object-contain" /* Ajusta h-10 (altura) según necesites */
            />
          </div>

          {/* --- Desktop Menu --- */}
          <div className="hidden md:flex space-x-8 items-center">
            {mainLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide">
                {link.name}
              </a>
            ))}

            {/* DROPDOWN INTERACTIVO */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide focus:outline-none">
                Explorar
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
                  >
                    <div className="py-2">
                      {exploreLinks.map((item) => (
                        <a 
                          key={item.name} 
                          href={item.href}
                          className="block px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#contact" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all border border-white/5">
              Contacto
            </a>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Content --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {mainLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              
              {/* Sección Explorar en Móvil (sin dropdown, directo en lista) */}
              <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Explorar
              </div>
              {exploreLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-3 py-2 text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md pl-6" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              
              <a href="#contact" className="block mt-4 px-3 py-3 text-center rounded-lg bg-blue-600 text-white font-bold" onClick={() => setIsOpen(false)}>
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
