import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>We have come a long way since 1824…</p>
        <p>
          Delve into two centuries of remarkable history, from inspirational
          people to life-changing discoveries and world firsts. Engage with some
          of the biggest names in the arts, engineering, science, health, social
          and environmental impact today. And meet the next generation of
          students set to make the world a greener, fairer and healthier place
          for all.
        </p>
        <p>
          What better time to celebrate what we do here at Manchester than our
          200th anniversary, with four days of totally unique events? Come and
          join us at this free, family-friendly festival.
        </p>
        <p>
          We are teaming up with brilliant partners including BBC Philharmonic,
          Factory International, The Guardian, In Place of War, Manchester
          Histories Festival, Pop Up Market Co, and many more.
        </p>
      </div>
    </div>
  );
};

export default About;
