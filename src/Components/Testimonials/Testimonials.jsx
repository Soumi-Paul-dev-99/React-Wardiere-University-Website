import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackword}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
              </div>
              <div>
                <h3>Rosalind Franklin</h3>
                <span>Wardiere, UK</span>
              </div>
            </div>
            <p>
              I applied to Wardiere University as I was looking to complete a
              librarianship qualification. Wardiere has a great reputation in
              this field, so I came onto the course with high expectations. They
              have been thoroughly met. The departmental staff are fantastic,
              and I find myself constantly excited for my next module. The
              flexibility is the best part of my course. I am able to study
              whenever I want, which I am truly thankful for.
            </p>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
              </div>
              <div>
                <h3>William Jackson</h3>
                <span>Wardiere, UK</span>
              </div>
            </div>
            <p>
              I am a distance learner, which I am very happy about. It would
              like to be able to spend more time in Wardiere but my work
              commitments take up my week. I enjoy online learning, and it is an
              area I would like to work in after graduation. My tutors are
              always on-hand to support me if I need assistance. I find the
              databases and systems very easy to use. And I actually love
              reading 90% of the titles on my reading list. My course is
              structured so I can complete my degree in five years, so I can
              relax knowing that if real life gets in the way (as it often does)
              I can take time away from my studies to focus on it.
            </p>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
              </div>
              <div>
                <h3>Neha Narkhede</h3>
                <span>Wardiere, UK</span>
              </div>
            </div>
            <p>
              Top companies like Amazon, Microsoft, Gupshup Technology, Goldman
              Sachs, DE Shaw, GAIL, etc., visit our college for placements. The
              placement cell is quite efficient as numerous companies visited
              and took students from Wardiere University
            </p>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
              </div>
              <div>
                <h3>Jayshree Ullal</h3>
                <span>Wardiere, UK</span>
              </div>
            </div>
            <p>
              Great place to be challenged, learn, and grow. A safe environment
              to fall and fail. Lots of support and resources available but you
              need to take the initiative to reach out about them.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
