import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume: React.FC = () => {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-text-light dark:text-text-dark">
          Resume
        </h1>
        
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
              David Murphy - Resume
            </h2>
            <a 
              href="/DavidMurphy_Resume.pdf" 
              download
              className="btn btn-primary flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
          
          <div className="flex justify-center">
            <Document
              file="/DavidMurphy_Resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              className="border border-gray-200 dark:border-gray-700"
            >
              <Page 
                pageNumber={pageNumber} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-md"
              />
            </Document>
          </div>
          
          {numPages && (
            <div className="flex justify-center mt-4">
              <p className="text-text-light dark:text-text-dark">
                Page {pageNumber} of {numPages}
              </p>
            </div>
          )}
          
          {numPages && numPages > 1 && (
            <div className="flex justify-center mt-4 space-x-4">
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
                className="btn btn-outline disabled:opacity-50"
              >
                Previous
              </button>
              <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
                className="btn btn-outline disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
