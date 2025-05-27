import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-[#2A5B87]" />
            <span className="ml-2 text-xl font-bold text-[#2A5B87]">FocusCube</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#3D405B] hover:text-[#2A5B87] transition-colors">
              Características
            </a>
            <a href="#benefits" className="text-[#3D405B] hover:text-[#2A5B87] transition-colors">
              Beneficios
            </a>
            <a href="#pricing" className="text-[#3D405B] hover:text-[#2A5B87] transition-colors">
              Precios
            </a>
            <a href="#testimonials" className="text-[#3D405B] hover:text-[#2A5B87] transition-colors">
              Testimonios
            </a>
            <a href="#faq" className="text-[#3D405B] hover:text-[#2A5B87] transition-colors">
              FAQ
            </a>
            <button className="bg-[#FF6F61] hover:bg-[#ff5a4a] text-white px-5 py-2 rounded-md transition-colors">
              Comprar Ahora
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-[#3D405B]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              <a 
                href="#features" 
                className="text-[#3D405B] py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Características
              </a>
              <a 
                href="#benefits" 
                className="text-[#3D405B] py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Beneficios
              </a>
              <a 
                href="#pricing" 
                className="text-[#3D405B] py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Precios
              </a>
              <a 
                href="#testimonials" 
                className="text-[#3D405B] py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Testimonios
              </a>
              <a 
                href="#faq" 
                className="text-[#3D405B] py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <button 
                className="bg-[#FF6F61] hover:bg-[#ff5a4a] text-white px-5 py-2 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;