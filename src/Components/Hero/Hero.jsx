import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensuring Enhanced Education for a Brighter World</h1>
        <p>
          In such competitive world, it is must for all to have good education.
          The importance of higher education has become increased in getting
          good job and position. Proper education creates lots of ways to go
          ahead in the future. It makes us strong mentally, socially and
          intellectually by increasing our knowledge level, technical skills and
          good position in the job. Our cutting-edge curriculum id designed to
          empower students with the knowledge, skills , and experiences needed
          to excel in the dynamic field of education.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
