import React, { useState, useEffect } from "react";
import "./Recentwork.css";

const RecentWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [workItems, setWorkItems] = useState([
    {
      id: 1,
      title: "Work name here",
      description: "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Work name here",
      description: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Project Four",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]);

  const totalItems = workItems.length;
  const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = workItems.slice(
    currentIndex * itemsPerPage,
    (currentIndex * itemsPerPage) + itemsPerPage
  );

  return (
    <div className="recent-container">
      <h2 className="recent-title">Recent Work</h2>
      <p className="recent-subtitle">
        Solving user & business problems since last 15+ years. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="carousel-container">
        <button 
          className="arrow-btn left" 
          onClick={prevSlide}
          aria-label="Previous"
        >
          ❮
        </button>

        <div className="work-wrapper">
          {visibleItems.map((item) => (
            <div key={item.id} className="work-item">
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="work-img"
                />
                <div className="overlay">
                  <button className="view-btn">View Project</button>
                </div>
              </div>
              <h3 className="work-heading">{item.title}</h3>
              <p className="work-text">
                {item.description}
              </p>
              <button className="know-btn">Know more &gt;</button>
            </div>
          ))}
        </div>

        <button 
          className="arrow-btn right" 
          onClick={nextSlide}
          aria-label="Next"
        >
          ❯
        </button>
      </div>

      <div className="dots">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWork;