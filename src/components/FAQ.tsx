import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-[#3D405B]">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#2A5B87]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#2A5B87]" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-3 text-[#3D405B] opacity-80">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-[#3D405B] opacity-80">
            Todo lo que necesitas saber sobre nuestros temporizadores
          </p>
        </div>
        
        <div className="space-y-1">
          <FAQItem
            question="¿Qué es el método Pomodoro?"
            answer="El método Pomodoro es una técnica de gestión del tiempo desarrollada por Francesco Cirillo a fines de los años 80. Consiste en dividir el trabajo en intervalos de 25 minutos (llamados 'pomodoros') separados por breves descansos. Después de cuatro pomodoros, se toma un descanso más largo. Esta técnica ayuda a mantener la concentración y evitar la fatiga mental."
          />
          
          <FAQItem
            question="¿Cómo funciona el envío en regiones?"
            answer="Realizamos envíos a todo Chile. Para Santiago, la entrega se realiza en 24-48 horas hábiles. Para regiones, el tiempo de entrega es de 3-5 días hábiles. Todos los envíos incluyen seguimiento online y están asegurados. Para Isla de Pascua y Juan Fernández, consultar tiempos específicos a nuestro equipo de atención al cliente."
          />
          
          <FAQItem
            question="¿Puedo personalizar los tiempos del temporizador?"
            answer="Sí, todos nuestros modelos permiten personalizar los tiempos de trabajo y descanso. El modelo básico permite configurar intervalos entre 5 y 60 minutos. Los modelos Pro y Oficina ofrecen configuraciones más avanzadas, incluyendo la posibilidad de guardar perfiles personalizados para diferentes tipos de tareas o miembros del equipo."
          />
          
          <FAQItem
            question="¿Cuánto dura la batería?"
            answer="La duración de la batería varía según el modelo. El modelo Personal tiene una batería que dura aproximadamente 1 mes con uso diario. El modelo Pro extiende esta duración a 2 meses, mientras que el modelo Oficina alcanza los 3 meses de autonomía. Todos nuestros temporizadores incluyen cable USB-C para recarga y un indicador de nivel de batería."
          />
          
          <FAQItem
            question="¿Ofrecen garantía?"
            answer="Todos nuestros productos cuentan con garantía oficial en Chile. El modelo Personal tiene 6 meses de garantía, el modelo Pro 1 año, y el modelo Oficina 2 años completos. La garantía cubre defectos de fabricación y problemas técnicos. Además, ofrecemos 30 días de garantía de satisfacción: si no estás conforme, te devolvemos el dinero."
          />
          
          <FAQItem
            question="¿Cómo contacto al soporte técnico local?"
            answer="Nuestro equipo de soporte técnico 100% chileno está disponible de lunes a viernes de 9:00 a 18:00 horas. Puedes contactarnos por WhatsApp, correo electrónico o llamada telefónica. Los clientes de los planes Pro y Oficina tienen acceso a atención prioritaria y soporte extendido. Todos los manuales y materiales de soporte están disponibles en español."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;