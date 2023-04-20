import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          THIS IS WHY WE DO, WHAT WE DO !
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "TOEFL Master seemed to be by far the best option: a program I could use whenever I liked, following my own schedule."
        </p>
        <div className="testimonials-stars-container" >
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Sarthak Khanna</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={`../../assets/girl.png`} alt="" />
        <p>
        "TOEFL Master is what you need if studying for the exam. Will give you a better understanding of the overall feel of the test which is very important. It has useful practice tests."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Manvi Kummar</h2>
      </div>
    </div>
  );
};

export default Testimonial;
