import React from 'react';
import { Briefcase, GraduationCap, School } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-600">
            A passionate software developer and content creator with a focus on building 
            excellent user experiences and telling compelling stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am Probhakar Thapa, a software developer specializing in Python, React Native, and web development. 
              With 5+ years of content creation experience, I combine technical expertise with creative storytelling.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing a B.Tech in IT, I'm actively enhancing my skills in Data Structures, 
              Algorithms, and AI applications like fake news detection. I'm passionate about creating 
              solutions that make a difference.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond coding, I create engaging football content and children's short-form videos, 
              bringing stories to life through digital media.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Education & Experience</h3>
            
            <div className="space-y-0">
              <div className="timeline-item">
                <div className="flex items-start">
                  <div className="ml-2">
                    <h4 className="text-lg font-semibold">B.Tech in Information Technology</h4>
                    <p className="text-gray-600">Maulana Abul Kalam Azad University of Technology</p>
                    <p className="text-sm text-gray-500">2022 - 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="flex items-start">
                  <div className="ml-2">
                    <h4 className="text-lg font-semibold">Diploma in DCE</h4>
                    <p className="text-gray-600">Jalpaiguri Polytechnic Institute</p>
                    <p className="text-sm text-gray-500">2019 - 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="flex items-start">
                  <div className="ml-2">
                    <h4 className="text-lg font-semibold">High School</h4>
                    <p className="text-gray-600">Secondary Education</p>
                    <p className="text-sm text-gray-500">Completed</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="flex items-start">
                  <div className="ml-2">
                    <h4 className="text-lg font-semibold">Internship Experience</h4>
                    <p className="text-gray-600">Software Development</p>
                    <p className="text-sm text-gray-500">Various Projects</p>
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

export default About;