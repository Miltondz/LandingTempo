import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, company, content, rating, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#3CAEA3]">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#3D405B]">{name}</h4>
          <p className="text-sm text-[#3D405B] opacity-70">{role}, {company}</p>
        </div>
      </div>
      
      <p className="text-[#3D405B] mb-4">"{content}"</p>
      
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-[#FF6F61] fill-[#FF6F61]' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#F4F1DE]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-[#3D405B] opacity-80 max-w-2xl mx-auto">
            Más de 10.000 chilenos ya han mejorado su productividad con nuestros temporizadores
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            name="Carolina Pérez"
            role="Diseñadora UX/UI"
            company="Agencia Digital"
            content="Como diseñadora freelance, el temporizador me ha ayudado a mantener el enfoque en proyectos extensos y evitar el agotamiento creativo. El soporte local chileno ha sido impecable cuando tuve consultas."
            rating={5}
            image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          
          <Testimonial
            name="Rodrigo Vega"
            role="Project Manager"
            company="Consultora"
            content="Compré 5 unidades para nuestro equipo y ha mejorado notablemente la gestión del tiempo. Las reuniones son más eficientes y el equipo agradece los descansos estructurados. El precio se amortiza rápidamente."
            rating={4}
            image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          
          <Testimonial
            name="Javiera Soto"
            role="Emprendedora"
            company="E-commerce"
            content="Elegí el modelo Pro por su batería de larga duración y no me ha decepcionado. Lo uso a diario para dividir mi tiempo entre ventas, marketing y logística. La garantía chilena me dio confianza para la inversión."
            rating={5}
            image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#3D405B] text-center mb-6">La comunidad FocusCube sigue creciendo</h3>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[#3D405B]">Satisfacción general</span>
                <span className="text-sm font-medium text-[#3D405B]">98%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-[#3CAEA3] h-2.5 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[#3D405B]">Calidad de materiales</span>
                <span className="text-sm font-medium text-[#3D405B]">95%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-[#3CAEA3] h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[#3D405B]">Soporte técnico</span>
                <span className="text-sm font-medium text-[#3D405B]">97%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-[#3CAEA3] h-2.5 rounded-full" style={{ width: '97%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[#3D405B]">Recomendación a colegas</span>
                <span className="text-sm font-medium text-[#3D405B]">92%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-[#3CAEA3] h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <img 
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Usuario FocusCube" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Usuario FocusCube" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Usuario FocusCube" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Usuario FocusCube" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Usuario FocusCube" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Usuario FocusCube" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="w-12 h-12 rounded-full bg-[#2A5B87] flex items-center justify-center text-white text-sm font-bold">
              +2K
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;