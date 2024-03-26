import React from "react";
import "./Hero.css";
// src\components\Hero\icons\css.png
function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building digital experience that inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming ideas into seamless and
          visually stunning web solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <img src="../../assets/images/20230906_143959.jpg" alt="img" />
        </div>
        <div>
          <div className="tech-icon">
            <div className="single">
              <img
                width="160"
                height="160"
                src="https://img.icons8.com/office/160/000000/react.png"
                alt="react"
              />
            </div>

            <img src="" alt="" />
          </div>
          <div className="tech-icon">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/color/96/javascript--v1.png"
              alt="javascript--v1"
            />
          </div>
          <div className="tech-icon">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/plasticine/100/css3.png"
              alt="css3"
            />
          </div>
          <div className="tech-icon">
            <img
              width="144"
              height="144"
              src="https://img.icons8.com/color/144/html-5--v1.png"
              alt="html-5--v1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
// C:\Users\91994\Desktop\InterviewPracticePros\personalportfolio\public\20230906_143959.jpg
