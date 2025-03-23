import React from "react";
import Slider from "react-slick";
import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJava, FaDocker } from "react-icons/fa";
import { SiPostgresql, SiAngular } from "react-icons/si";
import "./Other.css";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    { name: "Docker", icon: <FaDocker />, color: "#0db7ed" },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 skills at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 2 skills at a time on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 1 skill at a time on small screens
        },
      },
    ],
  };

  return (
    <section id="skills" className="skills animate__animated animate__fadeIn">
      <h2>My Skills</h2>
      <Slider {...settings} className="skills-slider">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <p>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
