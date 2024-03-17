import React from "react";
import about from "../../data/about";
import "../../Style/pages/About.css";
import HeadingCol from "./HeadingCol";
const About = () => {
  return (
    <>
      <HeadingCol />
      <h1 className="about_title">Meet our team</h1>
      <div className="About_gallery">
        {about.map((about) => (
          <div className="about_container" key={about.id}>
            <img src={about.Image} alt="chef image" className="about_img" />
            <h2 className="about_name">Chef: {about.name}</h2>
            <h4 className="about_position">Position:{about.position}</h4>
            <h5 className="about_age">Age :{about.age}</h5>
            <p className="about_description">
              Lorem ipsum dolor sit amet consectetur <br /> elit. Quaerat
              laboriosam, repellat aliquid,
            </p>
            <p className="about_esperance">Esperance :{about.experience}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
