import React from 'react';

interface SkillsProps {
  skills: {
    category: string;
    items: string[];
  }[];
}

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="section bg-white dark:bg-gray-900 transition-theme">
      <div className="container">
        <h2 className="section-title text-text-light dark:text-text-dark">Technical Skills</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card">
              <h3 className="mb-4 text-xl font-semibold text-primary-light dark:text-primary-dark">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
