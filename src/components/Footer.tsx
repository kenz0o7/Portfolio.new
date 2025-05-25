import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold">
              Probhakar<span className="text-teal-500">.</span>
            </h2>
            <p className="mt-2 text-gray-300">
              Software Developer & Content Creator
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:mangarprabhakar40@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Probhakar Thapa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;