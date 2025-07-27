import React from 'react';
import './Projects.css';

const projects = [
    {
        title: "CyberSeurityVault",
        description: "Built a full-stack password manager using React.js, Node.js, MySQL, and JWT. The application features secure user authentication, encrypted credential storage, and a clean, responsive frontend. Developed RESTful APIs for backend operations and managed user data efficiently with a MySQL database.",
        link: "https://github.com/Agent9777/CyberSecureVault"
    },
    {
        title: "Syncwatchy",
        description: "Developed a synchronized media streaming feature allowing multiple users to watch videos together in real time, ensuring playback is in sync across devices. Integrated live chat and user presence features to replicate a shared viewing experience remotely.",
        link: "https://github.com/Agent9777/video-sync-project"
    },
    {
        title: "Youtube Video Downloader",
        description: "Built a YouTube video downloader that allows users to search videos by title and download them directly without watching ads. Implemented a clean UI for input and results, and integrated backend APIs to fetch and convert videos in desired formats.",
        link: "https://github.com/Agent9777/YT_VideoDownloader"
    },
    {
      title: "Smart Delivery Robot",
      description: "An autonomous robot using ROS, LiDAR, and SLAM to enable indoor mapping, navigation, and item delivery. Currently working on real-time mapping and localization, with plans to implement waypoint-based path planning and obstacle avoidance.",
      link: "#"
    },
    {
      title: "AI Meeting Summarizer",
      description: "An intelligent system designed to automatically summarize meetings and analyze individual contributions. It processes audio or text transcripts to generate clear summaries, highlighting key discussion points, decisions, and action items. Additionally, it tracks and quantifies each participant’s input, offering insights into engagement and collaboration levels. Ideal for teams aiming to streamline meeting follow-ups and boost productivity.",
      link: "#"
    },
    
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3 className="project-name">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        {project.link && project.link !== "#" ? (
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                View Project →
                            </a>
                        ) : (
                            <span className="project-upcoming">Upcoming</span>
                        )}          </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
