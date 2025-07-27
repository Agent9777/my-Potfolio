import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Home = () => {

  return (
    <section className="home-container">
      <h1 className="home-title">
        Hi, I'm <span className="highlight">Shourya Deep</span>
      </h1>

      <h2 className="home-subtitle">Curious Mind & Creative Problem Solver</h2>

      <p className="home-tagline">
        I'm driven by a passion for learning and exploring new ideas — from tech to design, I thrive in versatile, ever-evolving environments.
      </p>

      <div className="home-buttons">
        <Link to="/about" className="btn primary">About Me</Link>

        <Link to="/Projects" className="btn ghost">Projects</Link>

        <Link to="/Skills" className="btn ghost">Skills</Link>

        <Link to="/contacts" className="btn ghost">Contact</Link>

      </div>

      <div className="home-socials">
        <a href="https://github.com/Agent9777" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shourya-deep/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Home;
