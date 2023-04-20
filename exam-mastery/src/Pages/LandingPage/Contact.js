import React from "react";
import BackgroundImage from "../../Assets/bg.jpg";

const Contact = () => {
  const bannerImageStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };

  return (
    <div className="contact-page-wrapper" style={bannerImageStyle}>
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
