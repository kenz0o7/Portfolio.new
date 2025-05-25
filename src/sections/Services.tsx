import React from 'react';
import { Code, Palette, VideoIcon, BarChart } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code size={32} className="text-blue-600" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies focusing on performance and user experience."
    },
    {
      icon: <Palette size={32} className="text-blue-600" />,
      title: "UI/UX Design",
      description: "User-centered design with a focus on creating intuitive, accessible, and visually appealing interfaces."
    },
    {
      icon: <VideoIcon size={32} className="text-blue-600" />,
      title: "Content Creation",
      description: "Engaging short-form video content specializing in football storytelling and children's content."
    },
    {
      icon: <BarChart size={32} className="text-blue-600" />,
      title: "Data Analysis",
      description: "Extracting meaningful insights from data using Python and various data analysis tools."
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Services I Offer</h2>
          <p className="text-lg text-gray-600">
            High-quality solutions tailored to your specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card p-8 hover:border-l-4 hover:border-blue-600 transition-all duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 text-white rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with technical excellence and creative vision.
          </p>
          <a href="#contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;