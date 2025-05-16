import React from 'react';

interface ResumeProps {
  resumeUrl: string;
  downloadUrl: string;
}

const ResumeSection: React.FC<ResumeProps> = ({ resumeUrl, downloadUrl }) => {
  return (
    <section id="resume" className="section bg-gray-50 dark:bg-gray-800 transition-theme">
      <div className="container">
        <h2 className="section-title text-text-light dark:text-text-dark">Resume</h2>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl mb-8 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                David Murphy - Resume
              </h3>
              <a 
                href={downloadUrl} 
                download
                className="btn btn-primary flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
            <div className="p-6">
              <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <iframe 
                  src={resumeUrl} 
                  title="Resume Preview" 
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
