import React from 'react';
import './About.css';
import myPhoto from './my-photo.jpeg'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-box">
        <div className="about-container">

          <div className="about-photo">
            <img
              src={myPhoto}
              alt="Profile"
              className="about-img"
            />
          </div>

          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-paragraph">
              Hi, I'm Shourya Deep, a 3rd year B.Tech student in Computer Science Engineering with a specialization in Artificial Intelligence and Robotics. I’m someone who finds genuine excitement in learning, building, and exploring — not just within the scope of my major, but across a wide spectrum of technologies and creative disciplines. I don't confine myself to a single field because I believe growth comes from curiosity and versatility. Over the years, I’ve developed a passion for understanding how systems work, how software interacts with hardware, and how design plays a crucial role in usability. Whether I’m working on smart robotics systems, designing clean and intuitive interfaces, writing efficient code, or diving into a new concept just out of interest, I always give it my all. I enjoy challenging myself, adapting quickly, and contributing meaningfully wherever I can. For me, learning is a lifelong process — and I’m just getting started.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
