import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaBehance, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'case-studies', 'testimonials', 'recent-work', 'get-in-touch'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Recent Work', id: 'recent-work' },
    { name: 'Get In Touch', id: 'get-in-touch' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
          Portfolio
        </a>
      </div>
      
      <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <FaBehance />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      <button 
        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;