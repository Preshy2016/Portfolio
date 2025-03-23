import React from 'react';
import './Other.css';

const About = () => {
  return (
    <section id="about" className="about animate__animated animate__fadeIn">
      <div className="about-content">
        {/* Image on the left */}
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/image.png`} alt="Precious Sesinyi" className="about-photo" />
        </div>

        {/* Text on the right */}
        <div className="about-summary">
          <h2>About Me</h2>
          <p>
            I am a passionate full-stack developer with experience in building scalable web applications using technologies like React, Node.js, PostgreSQL, and more. I enjoy solving complex problems and crafting innovative solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
