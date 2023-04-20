import React from "react";
import BackgroundImage from "../../Assets/bg.jpg";

const Work = () => {
  const workInfoData = [
    {
      
      image: "../../assets/file1.png",
      text: "Use our free IELTS practice tests to study. Improve your listening, reading, writing and speaking. 2022 updated!",
    },
    {
      
      image: "../../assets/file2.jpg",
      text: "Saving your time by doing a short test in our website everyday to track your progress.",
    },
    {
    
      image: "../../assets/file3.jpg",
      text: "Learn from the best and most effective IELTS practice test material for all sections without worrying about your pockets.",
    },
  ];

  const bannerImageStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1000px",
  };
  return (
    <div className="work-section-wrapper" style={bannerImageStyle}>
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        With TOEFL Master, there is no traditional “core curriculum” that you work through like other courses, with each lesson building on the last. Rather, Magoosh gives you everything you need to study for the exam, but in more of a library type format.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
