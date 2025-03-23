import React from 'react';
import './Other.css';

const Contact = () => {
  return (
    <section id="contact" className="contact animate__animated animate__fadeIn">
      <h2>Get in Touch</h2>
      <p>I'd love to hear from you! Whether you have questions, want to collaborate, or just want to say hello, feel free to reach out. I'll get back to you as soon as possible.</p>
      
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
