import React from 'react';

interface ProjectProps {
  projects: {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
  }[];
}

const ProjectsSection: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <section id="projects" className="section bg-white dark:bg-gray-900 transition-theme">
      <div className="container">
        <h2 className="section-title text-text-light dark:text-text-dark">Projects</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl font-bold text-gray-400 dark:text-gray-500">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              
              <h3 className="mb-2 text-xl font-semibold text-text-light dark:text-text-dark">
                {project.title}
              </h3>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300 flex-grow">
                {project.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-primary-light/80 dark:text-primary-dark dark:hover:text-primary-dark/80 flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary-light hover:text-secondary-light/80 dark:text-secondary-dark dark:hover:text-secondary-dark/80 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
