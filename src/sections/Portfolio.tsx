import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Railway Commodity Reservation System",
      description: "A comprehensive system for railway commodity bookings with improved performance, security, and user experience.",
      image: "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "Imaging Spectral for Food Assessment",
      description: "Computer vision application using OpenCV and Machine Learning for food quality assessment.",
      image: "https://images.pexels.com/photos/6942022/pexels-photo-6942022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      github: "#",
      featured: true
    },
    {
      id: 3,
      title: "Content Management System",
      description: "A customizable CMS for managing digital content efficiently.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "SQL"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-featured online store with cart, checkout, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Express", "MongoDB"],
      github: "#",
      featured: false
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects;

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">My Portfolio</h2>
          <p className="text-lg text-gray-600">
            Check out some of my recent projects and work
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeFilter === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              }`}
              onClick={() => setActiveFilter('featured')}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card group hover:translate-y-[-5px]"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-end space-x-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full text-gray-800 hover:text-blue-600 transition-colors duration-300"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full text-gray-800 hover:text-blue-600 transition-colors duration-300"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;