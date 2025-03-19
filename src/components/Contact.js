import React from 'react';
import './Other.css';

const Contact = () => {
  return (
    <section id="contact" className="contact animate__animated animate__fadeIn">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;