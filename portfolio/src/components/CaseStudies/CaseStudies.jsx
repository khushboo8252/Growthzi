import React from "react";
import "./CaseStudies.css";
import case1 from "../../assets/images/case1.png";
import case2 from "../../assets/images/case2.png";
import case3 from "../../assets/images/case3.png";

const CaseStudies = () => {
  const data = [
    {
      tag: "Fintech",
      title: "Work name here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      img: case1,
      btnColor: "btn-orange",
      reverse: false,
    },
    {
      tag: "EdTech",
      title: "Work name here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      img: case2,
      btnColor: "btn-blue",
      reverse: true,
    },
    {
      tag: "Pharma",
      title: "Work name here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      img: case3,
      btnColor: "btn-green",
      reverse: false,
    },
  ];

  return (
    <div className="container">
    <div className="case-container">
      <h2 className="title">Case Studies</h2>
      <p className="subtitle">
        Solving user & business problems since last 15+ years.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {data.map((item, index) => (
        <div
          key={index}
          className={`case-row ${item.reverse ? "reverse" : ""}`}
        >
          <div className="case-text">
            <span className="tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className={`view-btn ${item.btnColor}`}>View Case Study</button>
          </div>

          <div className="case-img">
            <img src={item.img} alt="case" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CaseStudies;
