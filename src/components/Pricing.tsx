import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  price: string;
  features: PlanFeature[];
  popular?: boolean;
  image?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, popular = false, image }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 ${popular ? 'border-2 border-[#FF6F61] relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-[#FF6F61] text-white py-1 px-4 text-sm font-bold transform translate-x-8 rotate-45">
          Popular
        </div>
      )}
      
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#3D405B] mb-2">{title}</h3>
        <div className="flex items-end mb-6">
          <span className="text-3xl font-bold text-[#2A5B87]">{price}</span>
          <span className="text-[#3D405B] opacity-70 ml-1">CLP</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="h-5 w-5 text-[#3CAEA3] mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={`text-sm ${feature.included ? 'text-[#3D405B]' : 'text-gray-400'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-2 rounded-md transition-colors ${
            popular 
              ? 'bg-[#FF6F61] hover:bg-[#ff5a4a] text-white' 
              : 'bg-[#2A5B87] hover:bg-[#1e4b70] text-white'
          }`}
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const personalFeatures = [
    { text: "Temporizador básico Pomodoro", included: true },
    { text: "Batería recargable (duración 1 mes)", included: true },
    { text: "Alarma sonora configurable", included: true },
    { text: "Garantía de 6 meses", included: true },
    { text: "Manual digital en español", included: true },
    { text: "Soporte por email", included: true },
    { text: "Personalización de colores", included: false },
  ];
  
  const proFeatures = [
    { text: "Temporizador avanzado Pomodoro", included: true },
    { text: "Batería recargable (duración 2 meses)", included: true },
    { text: "Alarma sonora y vibratoria", included: true },
    { text: "Garantía de 1 año", included: true },
    { text: "Manual físico y digital en español", included: true },
    { text: "Soporte prioritario por email y teléfono", included: true },
    { text: "Personalización de colores", included: true },
    { text: "App móvil complementaria", included: true },
  ];
  
  const teamFeatures = [
    { text: "Pack de 5 temporizadores avanzados", included: true },
    { text: "Batería recargable (duración 3 meses)", included: true },
    { text: "Alarma sonora y vibratoria personalizable", included: true },
    { text: "Garantía de 2 años", included: true },
    { text: "Manual físico y digital personalizado", included: true },
    { text: "Soporte premium 24/7", included: true },
    { text: "Personalización completa (color y logo)", included: true },
    { text: "App móvil complementaria con panel de equipo", included: true },
    { text: "Taller online de productividad", included: true },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">Elige Tu Plan de Productividad</h2>
          <p className="text-lg text-[#3D405B] opacity-80 max-w-2xl mx-auto">
            Opciones flexibles para cada tipo de usuario y equipo de trabajo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan 
            title="Personal" 
            price="$24.990" 
            features={personalFeatures}
            image="https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          
          <PricingPlan 
            title="Pro Pack" 
            price="$39.990" 
            features={proFeatures} 
            popular={true}
            image="https://images.pexels.com/photos/5990235/pexels-photo-5990235.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          
          <PricingPlan 
            title="Pack Oficina" 
            price="$99.990" 
            features={teamFeatures}
            image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        
        <div className="mt-16">
          <div className="bg-[#F4F1DE] rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#3D405B] mb-2">¿Necesitas una solución personalizada?</h3>
                <p className="text-[#3D405B]">Contáctanos para crear un plan a medida para tu empresa</p>
              </div>
              <button className="bg-[#2A5B87] hover:bg-[#1e4b70] text-white px-6 py-3 rounded-md transition-colors">
                Solicitar cotización
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8 text-center">
          <div>
            <div className="w-16 h-16 mx-auto bg-[#F4F1DE] rounded-full flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-[#3CAEA3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                <path d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z"></path>
              </svg>
            </div>
            <h4 className="text-sm font-medium text-[#3D405B]">Entrega en 24-48 horas</h4>
          </div>
          
          <div>
            <div className="w-16 h-16 mx-auto bg-[#F4F1DE] rounded-full flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-[#3CAEA3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418l.639-.34a1 1 0 011.049.098l3.821 3.178a1 1 0 01.124 1.498l-.652.705a1.967 1.967 0 01-2.215.451c-1.63-.716-3.1-1.86-4.31-3.303a14.053 14.053 0 01-2.387-4.024 1.967 1.967 0 01.751-2.088l.826-.55a1 1 0 011.4.183l1.898 2.398a1 1 0 01.071 1.063l-.286.71z"></path>
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
              </svg>
            </div>
            <h4 className="text-sm font-medium text-[#3D405B]">Soporte técnico local</h4>
          </div>
          
          <div>
            <div className="w-16 h-16 mx-auto bg-[#F4F1DE] rounded-full flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-[#3CAEA3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                <path d="M10 9a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm0-4a1 1 0 100 2 1 1 0 000-2z"></path>
              </svg>
            </div>
            <h4 className="text-sm font-medium text-[#3D405B]">Garantía de devolución</h4>
          </div>
          
          <div>
            <div className="w-16 h-16 mx-auto bg-[#F4F1DE] rounded-full flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-[#3CAEA3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
              </svg>
            </div>
            <h4 className="text-sm font-medium text-[#3D405B]">Personalización disponible</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;