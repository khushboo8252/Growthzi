import React from "react";
import "./GetInTouch.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <form className="contact-form">
        <label>Email</label>
        <input type="email" placeholder="Please enter your email" required />

        <label>Mobile</label>
        <input type="text" placeholder="Enter mobile" required />

        <label>Message</label>
        <textarea placeholder="Enter your message" required></textarea>

        <button type="submit" className="submit-button">
          Submit <span className="arrow">➤</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
