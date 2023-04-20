import React from "react";
import Logo from "../../Assets/home-banner-bg.png";


const Footer = () => {
  
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one" >
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Contact Us: 617-238-4831</span>
        </div>
        <div className="footer-section-columns">
          <span>support@toeflmastery.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
        </div>
        <div className="footer-section-columns">
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
