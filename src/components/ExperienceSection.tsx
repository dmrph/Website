import React from 'react';

interface ExperienceProps {
  experiences: {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800 transition-theme">
      <div className="container">
        <h2 className="section-title text-text-light dark:text-text-dark">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card relative pl-8 border-l-4 border-primary-light dark:border-primary-dark">
              <div className="absolute w-4 h-4 bg-primary-light dark:bg-primary-dark rounded-full -left-2 top-6"></div>
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">{exp.title}</h3>
              <div className="mb-2 text-gray-600 dark:text-gray-300">
                {exp.company} | {exp.location} | {exp.period}
              </div>
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-primary-light dark:text-primary-dark">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
