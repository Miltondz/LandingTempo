import React from 'react';
import { Clock, BatteryFull, Bell, RotateCw, CircleSlash, Zap } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#3D405B] mb-2">{title}</h3>
      <p className="text-[#3D405B] opacity-80">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">Características Revolucionarias</h2>
          <p className="text-lg text-[#3D405B] opacity-80 max-w-2xl mx-auto">
            Diseñado para optimizar tu flujo de trabajo con funciones exclusivas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Clock className="h-6 w-6 text-white" />}
            title="Control de Descanso"
            description="Temporizadores automáticos que siguen la técnica Pomodoro, optimizados para aumentar la productividad sin provocar fatiga mental."
            color="bg-[#2A5B87]"
          />
          
          <Feature
            icon={<BatteryFull className="h-6 w-6 text-white" />}
            title="Batería Inteligente"
            description="Hasta 3 meses de duración de la batería con una sola carga. Indicador LED integrado que muestra el estado de carga."
            color="bg-[#3CAEA3]"
          />
          
          <Feature
            icon={<Bell className="h-6 w-6 text-white" />}
            title="Alarma Silenciosa"
            description="Sistema de vibración discreto ideal para entornos compartidos como oficinas. Configurable según intensidad y duración."
            color="bg-[#FF6F61]"
          />
          
          <Feature
            icon={<RotateCw className="h-6 w-6 text-white" />}
            title="Ciclos Matemáticos"
            description="Algoritmos optimizados por expertos en productividad para maximizar tu rendimiento cognitivo durante cada sesión de trabajo."
            color="bg-[#3CAEA3]"
          />
          
          <Feature
            icon={<CircleSlash className="h-6 w-6 text-white" />}
            title="Personalizable"
            description="Configura los intervalos de trabajo y descanso según tus necesidades. Múltiples perfiles para diferentes tipos de tareas."
            color="bg-[#2A5B87]"
          />
          
          <Feature
            icon={<Zap className="h-6 w-6 text-white" />}
            title="Formato LED Claro"
            description="Pantalla visible desde cualquier ángulo con brillo autoajustable según la luz ambiental para mejor visibilidad en cualquier entorno."
            color="bg-[#FF6F61]"
          />
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#2A5B87] hover:bg-[#1e4b70] text-white px-8 py-3 rounded-md transition-colors">
            Descubre Todas las Características
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;