import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const fullName = "Hi, I am Precious Sesinyi"; // Your full name
  const [text, setText] = useState(""); // Stores the typed text
  const [index, setIndex] = useState(0); // Stores the current character index

  useEffect(() => {
    if (index < fullName.length) {
      const interval = setTimeout(() => {
        setText(fullName.substring(0, index + 1)); // Add the next letter
        setIndex(index + 1);
      }, 150); // Typing speed

      return () => clearTimeout(interval); // Cleanup
    }
  }, [index, fullName]); // Dependency array includes index to update properly

  return (
    <section id="home" className="home">
      {/* Bubbles Background */}
      <div className="bubbles-container">
        <div className="bubbles"></div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Image */}
        <motion.img
          src="/image.png" // Ensure the image is in the "public" folder
          alt="Precious Sesinyi"
          className="profile-photo"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text Content */}
        <div className="text-content">
          <motion.h1
            className="headline"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {text}
          </motion.h1>

          <motion.h2
            className="sub-headline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Crafting Code, Creating Solutions.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
