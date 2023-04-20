import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../../Assets/home-banner-image1.png";
import BackgroundImage from "../../Assets/bg.jpg";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/login'; 
    navigate(path);
  }
  const bannerImageStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "800px",
  };
  return (
    
    <div className="home-container">
      <div className="home-banner-container" style={bannerImageStyle}>
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
          <button className="secondary-button" onClick={routeChange}>
            Login Now! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section" style={{ position: "absolute", bottom: 250, right: 0 }}>
        <img src={BannerImage} alt="" />
        </div>

      </div>
    </div>
    
  );
};

export default Home;
