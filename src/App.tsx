import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // Update the document title
  React.useEffect(() => {
    document.title = 'FocusCube | Temporizador Pomodoro con Soporte Chileno';
    
    // Update meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'El único temporizador Pomodoro con soporte técnico en Chile, garantía de 2 años y manuales 100% locales. ¡Únete al grupo beta con 15% OFF!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'El único temporizador Pomodoro con soporte técnico en Chile, garantía de 2 años y manuales 100% locales. ¡Únete al grupo beta con 15% OFF!';
      document.head.appendChild(meta);
    }
    
    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'temporizador pomodoro Chile, garantía chilena, productividad oficina santiago';
    document.head.appendChild(metaKeywords);
    
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;