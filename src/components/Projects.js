import React from 'react';
import './Other.css';

const Projects = () => {
  return (
    <section id="projects" className="projects animate__animated animate__fadeIn">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on. Click on the images to check out the live demos or repositories!</p>

      <div className="projects-gallery">
        {/* Project 1 */}
        <div className="project-item">
          <img 
            src={`${process.env.PUBLIC_URL}/mastermind.png`} 
            alt="Mastermind" 
            className="project-image"
          />
          <div className="project-info">
            <h3>Mastermind</h3>
            <p className="mastermind-description">
  🟠 <strong>Mastermind Game:</strong> A code-breaking game where the player attempts to guess a secret sequence of colors (or numbers) within a limited number of tries.
    </p>            
<a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <img 
            src={`${process.env.PUBLIC_URL}/hangman.png`} 
            alt="Project 2" 
            className="project-image"
          />
          <div className="project-info">
            <h3>Hangman</h3>
            



            <p>A word-guessing game where the player tries to guess a hidden word letter by letter before running out of attempts. Each incorrect guess brings them closer to losing.</p><p className="project-description">
  🟡 <strong>Hangman Game:</strong> A word-guessing game where the player tries to guess a hidden word letter by letter before running out of attempts.
</p>
            <a href="https://github.com/preshy2016/Hangman" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
