import React from 'react';
import { CheckCircle2, Clock, BrainCircuit, Target, Sparkles, Palette } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, color }) => {
  return (
    <div className="flex items-start space-x-4 mb-8">
      <div className={`p-2 rounded-full ${color} flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#3D405B] mb-1">{title}</h3>
        <p className="text-[#3D405B] opacity-80">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-[#F4F1DE]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">Transforma Tu Productividad</h2>
          <p className="text-lg text-[#3D405B] opacity-80 max-w-2xl mx-auto">
            Lo ideal para un uso optimizado que transforme tu forma de trabajar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          <div>
            <Benefit
              icon={<Clock className="h-5 w-5 text-white" />}
              title="Mejora Comprobada"
              description="Estudios demuestran un aumento de hasta 25% en rendimiento mediante el uso consistente de la técnica Pomodoro."
              color="bg-[#2A5B87]"
            />
            
            <Benefit
              icon={<BrainCircuit className="h-5 w-5 text-white" />}
              title="Precisión sin Fatiga"
              description="Reduce los errores de concentración hasta en un 40% con los intervalos científicamente comprobados de nuestro temporizador."
              color="bg-[#3CAEA3]"
            />
            
            <Benefit
              icon={<Target className="h-5 w-5 text-white" />}
              title="Objetivos Alcanzables"
              description="Establecer ciclos de trabajo definidos aumenta la probabilidad de completar tus metas en un 78% según estudios."
              color="bg-[#FF6F61]"
            />
          </div>
          
          <div>
            <Benefit
              icon={<CheckCircle2 className="h-5 w-5 text-white" />}
              title="Hábitos Saludables"
              description="Fomenta los descansos regulares, fundamentales para prevenir el burnout y mantener la creatividad a largo plazo."
              color="bg-[#3CAEA3]"
            />
            
            <Benefit
              icon={<Sparkles className="h-5 w-5 text-white" />}
              title="Entornos Productivos"
              description="Establece una cultura de eficiencia en tu equipo de trabajo con una herramienta visible que todos pueden seguir."
              color="bg-[#2A5B87]"
            />
            
            <Benefit
              icon={<Palette className="h-5 w-5 text-white" />}
              title="Diseño Inspirador"
              description="Su atractivo diseño no solo es funcional sino que eleva la estética de tu espacio de trabajo fomentando un ambiente profesional."
              color="bg-[#FF6F61]"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Equipo de trabajo usando temporizador FocusCube" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-[#3D405B] mb-4">¿Sabías que el método Pomodoro aumenta la eficiencia en un 70%?</h3>
                <p className="text-[#3D405B] mb-6">
                  Un estudio de la Universidad de Santiago demostró que los profesionales que utilizan métodos de gestión de tiempo estructurados como Pomodoro aumentan su productividad significativamente.
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-[#3D405B]">Satisfacción de usuarios</span>
                    <span className="text-sm font-medium text-[#3D405B]">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#3CAEA3] h-2.5 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;