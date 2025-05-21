import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  // Data from resume
  const summary = "Software Developer with expertise in Python, Java, and C++. Passionate about building innovative solutions and solving complex problems.";
  
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C#"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "FastAPI", "ROS2", "Redis", "MongoDB"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "Neovim", "Linux", "Visual Studio", "VS Code", "PyCharm", "SQL Server Management Studio"]
    }
  ];
  
  const experiences = [
    {
      title: "Contracted Software Engineer",
      company: "Chestnut Hill College",
      location: "Philadelphia, PA",
      period: "January 2022 – February 2023",
      responsibilities: [
        "Collaborated on process automation initiatives to improve data accuracy and quality assurance, directly contributing to stronger data integrity across systems.",
        "Performed regular data audits and implemented data-cleaning scripts to identify and resolve duplicates, anomalies, and inconsistencies, enhancing system reliability.",
        "Leveraged Microsoft Excel, along with scripting tools (Python, VBA, PowerShell), to extract, transform, and load (ETL) large datasets with a focus on efficiency and scalability."
      ]
    },
    {
      title: "Integration Services Engineer Intern",
      company: "IT Solutions Consulting Inc.",
      location: "Fort Washington, PA",
      period: "May 2022 – January 2023",
      responsibilities: [
        "Built and configured DataVaults (DVs) to support secure, high-performance data storage solutions for diverse client needs.",
        "Authored clear and actionable Standard Operating Procedures (SOPs) for tasks such as firewall software upgrades, switch configurations, and DV assembly, enhancing consistency and compliance.",
        "Configured and optimized network switches (Layer 2/3) to ensure efficient data flow and minimal downtime across client environments.",
        "Utilized ConnectWise and Kaseya for endpoint management, remote monitoring, and service ticketing, streamlining operations and improving incident response times."
      ]
    }
  ];
  
  const projects = [
    {
      title: "TurtleBot Swarm Intelligence",
      description: "Contributed to a real-time swarm system using TurtleBots and Raspberry Pi for military-style search and rescue operations.",
      technologies: ["Python", "ROS 2 Jazzy", "LiDAR", "Vex Ultrasonic", "YOLOv8", "Redis", "MongoDB", "Gazebo"],
      githubUrl: "https://github.com/dmrph/TurtleBot-Swarm-AI",
      image: "/images/turtlebot.png"
    },
    {
      title: "Global Internet Usage 3D Demo",
      description: "An interactive 3D globe visualization to explore global internet usage statistics by country and continent. Built with Three.js and GSAP, featuring real-time data from the World Bank. https://vizinternetusage.com",
      technologies: ["Three.js", "GSAP", "World Bank API", "HTML", "CSS"],
      githubUrl: "https://github.com/dmrph/global-internet-usage-viz",
      image: "/images/globe.png"
    },
    {
      title: "DecibelDetect",
      description: "Designed a web platform that visualizes urban noise pollution using user-submitted decibel data with interactive noise heatmap and real-time data visualization.",
      technologies: ["React", "Google Maps API", "FastAPI", "Python"],
      githubUrl: "https://github.com/dmrph/DecibelDetect",
      image: "/images/decibel.jpg"
    },
    {
      title: "T5Summarize",
      description: "Fine-tuned and deployed a T5 model for summarizing news and long-form text, with a Streamlit demo allowing users to input text and receive AI-generated summaries.",
      technologies: ["Python", "Hugging Face", "PyTorch", "Streamlit", "NLP"],
      githubUrl: "https://github.com/dmrph/T5Summarize",
      image: "/images/t5summarize.png"
    },
    {
      title: "File-Processing-System",
      description: "CMPSC 472 - Operating Systems - File Processing System. Program is meant to count frequency of a given word.",
      technologies: ["C"],
      githubUrl: "https://github.com/dmrph/File-Processing-System",
      image: "/images/file-processing.jpg"
    },
    {
      title: "RoutePlanner",
      description: "Route planner for data structures class at Penn State University. Spring of 2024.",
      technologies: ["HTML"],
      githubUrl: "https://github.com/dmrph/RoutePlanner-CMPSC-Final",
      image: "/images/route-planner.png"
    }
  ];
  
  // Resume URLs
  const resumeUrl = "/DavidMurphy_Resume.pdf"; // Will be copied to public folder
  const downloadUrl = "/DavidMurphy_Resume.pdf";
  
  return (
    <div>
      <HeroSection 
        name="David Murphy" 
        title="Software Developer" 
        summary={summary} 
      />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <ResumeSection resumeUrl={resumeUrl} downloadUrl={downloadUrl} />
      <ContactSection />
    </div>
  );
};

export default Home;
