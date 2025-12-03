import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
    <section className="hero-container">
      <div className="hero-content">
        <div className="left-content">
          <h1>Your Name Here</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit,
            sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua.
          </p>

          <button className="cta-btn">Let's get started →</button>
        </div>

        <div className="right-content">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400"
            alt="profile"
            className="profile-img"
          />
        </div>
      </div>
      
      <div className="worked-section">
        <p className="worked">Worked with</p>
        <div className="companies">
          <div className="company-box">ClickUp</div>
          <div className="company-box">Dropbox</div>
          <div className="company-box">PAYCHEX</div>
          <div className="company-box">elastic</div>
          <div className="company-box">strip</div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Header;
