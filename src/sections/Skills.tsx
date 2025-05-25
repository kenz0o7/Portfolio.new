import React, { useState } from 'react';
import { 
  Code, Database, Brush, Monitor, Terminal, 
  BookOpen, Paintbrush, Layers
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  
  const skillCategories: SkillCategory[] = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'SQL', level: 75 },
      ]
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 75 },
        { name: 'Firebase', level: 70 },
      ]
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Jupyter', level: 90 },
        { name: 'IntelliJ IDEA', level: 80 },
        { name: 'Xcode', level: 70 },
        { name: 'Git/GitHub', level: 85 },
      ]
    },
    {
      id: 'design',
      title: 'Design & UI/UX',
      icon: <Brush size={24} />,
      skills: [
        { name: 'UI Design', level: 80 },
        { name: 'Web Design', level: 85 },
        { name: 'UX Research', level: 75 },
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: <Layers size={24} />,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Bootstrap', level: 90 },
      ]
    },
    {
      id: 'content',
      title: 'Content Creation',
      icon: <Paintbrush size={24} />,
      skills: [
        { name: 'Video Editing', level: 90 },
        { name: 'Storytelling', level: 95 },
        { name: 'Scriptwriting', level: 85 },
      ]
    },
  ];
  
  const activeSkills = skillCategories.find(category => category.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">
            My technical toolkit and areas of specialization
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="mb-2">{category.icon}</div>
              <span className="text-sm font-medium">{category.title}</span>
            </button>
          ))}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-6">
            {skillCategories.find(category => category.id === activeCategory)?.title}
          </h3>
          
          <div className="space-y-6">
            {activeSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;