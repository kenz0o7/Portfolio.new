import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2 slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">Probhakar Thapa</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate software developer and content creator specializing in Python, 
              React Native, and web development. I turn ideas into exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://i.postimg.cc/Vkk59Khf/0-B78-BD5-D-D5-BE-4-C42-8-D70-B1-FFCADBE0-BF.jpg" 
                  alt="Probhakar Thapa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md">
                <span className="font-medium">Software Developer</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;