import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  summary: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, summary }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-theme">
      <div className="container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-10 text-center md:text-left md:mb-0 md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold text-text-light dark:text-text-dark md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary-light dark:text-primary-dark">{name}</span>
            </h1>
            <h2 className="mb-6 text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
              {title}
            </h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
              {summary}
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#resume" className="btn btn-outline">
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
              <img 
                src="/profile.png" 
                alt="David Murphy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
