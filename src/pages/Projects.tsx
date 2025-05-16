import React from 'react';
import ProjectsSection from '../components/ProjectsSection';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TurtleBot Swarm Intelligence",
      description: "Contributed to a real-time swarm system using TurtleBots and Raspberry Pi for military-style search and rescue operations.",
      technologies: ["Python", "ROS 2 Jazzy", "LiDAR", "YOLOv8", "Redis", "MongoDB", "Gazebo"],
      githubUrl: "https://github.com/dmrph/TurtleBot-Swarm",
      image: ""
    },
    {
      title: "DecibelDetect",
      description: "Designed a web platform that visualizes urban noise pollution using user-submitted decibel data with interactive noise heatmap and real-time data visualization.",
      technologies: ["React", "Google Maps API", "FastAPI", "Python"],
      githubUrl: "https://github.com/dmrph/DecibelDetect",
      image: ""
    },
    {
      title: "T5Summarize",
      description: "Fine-tuned and deployed a T5 model for summarizing news and long-form text, with a Streamlit demo allowing users to input text and receive AI-generated summaries.",
      technologies: ["Python", "Hugging Face", "PyTorch", "Streamlit", "NLP"],
      githubUrl: "https://github.com/dmrph/T5Summarize",
      image: ""
    },
    {
      title: "File-Processing-System",
      description: "CMPSC 472 - Operating Systems - File Processing System. Program is meant to count frequency of a given word.",
      technologies: ["C"],
      githubUrl: "https://github.com/dmrph/File-Processing-System",
      image: ""
    },
    {
      title: "RoutePlanner",
      description: "Route planner for data structures class at Penn State University. Spring of 2024.",
      technologies: ["HTML"],
      githubUrl: "https://github.com/dmrph/RoutePlanner-CMPSC-Final",
      image: ""
    }
  ];

  return (
    <div className="container py-16">
      <h1 className="mb-8 text-3xl font-bold text-center text-text-light dark:text-text-dark">
        Projects
      </h1>
      <ProjectsSection projects={projects} />
    </div>
  );
};

export default Projects;
