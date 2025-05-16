import React, { useEffect } from 'react';

// Add smooth scrolling functionality
const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Get all anchor links that point to sections
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Click handler function with proper typing
    const handleClick = (e: Event) => {
      e.preventDefault();
      
      // Get the target section
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      // Smooth scroll to the target section
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
      });
    };
    
    // Add click event listener to each anchor link
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    return () => {
      // Clean up event listeners
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
  
  return null;
};

export default SmoothScroll;
