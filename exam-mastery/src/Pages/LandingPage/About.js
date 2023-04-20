import React from "react";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        TOEFL (Test of English as a Foreign Language) website!
        </h1>
        <p className="primary-text">
        Welcome to our TOEFL website, where we provide valuable resources and support to help you prepare for the Test of English as a Foreign Language (TOEFL). Our website is designed to assist test-takers in achieving their desired scores by offering comprehensive information, tips, and strategies.elcome to our quiz website, where you can test your knowledge, learn new things, and have fun along the way! Our website is designed to provide an enjoyable and educational experience for all users, with a wide variety of categories and levels to suit your interests and skill level.
        </p>
        <p className="primary-text">
        Our team is made up of experienced educators and TOEFL experts who are dedicated to helping test-takers achieve their goals. We are here to support you every step of the way and provide you with the tools and resources you need to succeed on the TOEFL.
        Thank you for choosing our TOEFL website as your source of information and support. We wish you the best of luck on your TOEFL journey!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
