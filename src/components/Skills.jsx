import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaDocker, FaWindows, FaLinux, FaCode, FaRobot, FaDatabase, FaNetworkWired, FaBrain, FaTools, FaUsers, FaComments
} from 'react-icons/fa';
import './Skills.css';

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
};

const Skills = () => {
  const skillSections = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C", icon: "🅒" },
        { name: "C++", icon: "➕➕" },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "SQL", icon: <FaDatabase /> },
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "VS Code", icon: <FaCode /> },
      ]
    },
    {
      title: "Platforms & Environments",
      skills: [
        { name: "Windows", icon: <FaWindows /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "ROS 2", icon: <FaRobot /> },
      ]
    },
    {
      title: "Systems & Domains",
      skills: [
        { name: "Embedded Systems", icon: <FaRobot /> },
        { name: "Robot Simulation", icon: <FaRobot /> },
        { name: "Computer Networks", icon: <FaNetworkWired /> },
        { name: "Operating Systems", icon: <FaCode /> },
        { name: "Data Structures", icon: "🧱" },
        { name: "OOP", icon: "🔁" },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Debugging", icon: <FaTools /> },
        { name: "Team Collaboration", icon: <FaUsers /> },
        { name: "Problem Solving", icon: <FaBrain /> },
        { name: "Communication", icon: <FaComments /> },
      ]
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      {skillSections.map((section, idx) => (
        <motion.div
          className="skills-category"
          key={idx}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={slideIn}
        >
          <h3>{section.title}</h3>
          <ul className="skills-list">
            {section.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;
