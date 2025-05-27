import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#F4F1DE] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#3D405B] mb-4">
              Domina tu tiempo con el{' '}
              <span className="text-[#2A5B87] block">Temporizador Pomodoro</span>{' '}
              <span className="text-[#3CAEA3]">más inteligente</span>
            </h1>
            
            <p className="text-lg text-[#3D405B] mb-6">
              El único temporizador con soporte técnico en Chile, garantía de 2 años y manuales 100% locales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-[#FF6F61] hover:bg-[#ff5a4a] text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center">
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-[#2A5B87] text-[#2A5B87] hover:bg-[#2A5B87] hover:text-white px-6 py-3 rounded-md transition-colors">
                Demostración Gratuita
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#3CAEA3] mr-2" />
                <span className="text-sm text-[#3D405B]">Garantía 2 Años</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#3CAEA3] mr-2" />
                <span className="text-sm text-[#3D405B]">Soporte 100% Chileno</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#3CAEA3] mr-2" />
                <span className="text-sm text-[#3D405B]">Envío Gratis</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#3CAEA3] opacity-20 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#FF6F61] opacity-20 rounded-full"></div>
              <img 
                src="https://images.pexels.com/photos/7256595/pexels-photo-7256595.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Temporizador FocusCube en oficina chilena" 
                className="rounded-lg shadow-xl relative z-10 w-full object-cover"
              />
            </div>
            
            <div className="mt-4 bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto transform -translate-y-10 relative z-20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#3D405B] font-medium">Oferta por tiempo limitado</p>
                  <p className="text-[#FF6F61] font-bold">15% OFF</p>
                </div>
                <div className="bg-[#F4F1DE] px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-[#3D405B]">48:32:17</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;