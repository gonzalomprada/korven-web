import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Services from './components/Services';
import EngagementModels from './components/EngagementModels';
import ComparisonTable from './components/ComparisonTable';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Background from './components/Background';
import UXFloating from './components/UXFloating';
// Importa el nuevo componente
import SmoothScrolling from './components/SmoothScrolling';

function App() {
  return (
    // Envuelve TODO dentro de SmoothScrolling
    <SmoothScrolling>
      <div className="font-sans antialiased text-slate-200 selection:bg-cyan-500 selection:text-white relative">
        <UXFloating />
        <Background />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <SocialProof />
          <About />
          <Services />
          <EngagementModels />
          <ComparisonTable />
          <TechStack />
          <FAQ />
        </main>
        
        <Contact />
      </div>
    </SmoothScrolling>
  );
}

export default App;