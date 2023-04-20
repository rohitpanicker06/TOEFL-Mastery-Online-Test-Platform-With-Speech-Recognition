import React from "react";

import BannerImage from "../../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <p className="primary-text">


          </p>
          
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Challenge your knowledge, play the quiz!
          </h1>
          <p className="primary-text">
          Welcome to our Website! Get ready to put your knowledge to the test and learn new things along the way. With a variety of categories and levels, there's something for everyone. Compete with friends, earn badges, and become a trivia master. Let's get started!
          </p>
          <button className="secondary-button">
            Sign Up Now! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
