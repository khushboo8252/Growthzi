import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Client Name",
    },
    {
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "Client Name",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
      name: "Client Name",
    },
    {
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Client Name",
    },
  ];

  return (
    <div className="test-container">
      <h2 className="test-title">Testimonials</h2>
      <p className="test-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="test-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="test-card">
            <span className="quote">“</span>
            <p className="test-text">{item.text}</p>

            <div className="client-info">
              <img src={item.img} alt="profile" />
              <span className="client-name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
