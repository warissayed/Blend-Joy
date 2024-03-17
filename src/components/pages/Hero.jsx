import React from "react";
import { NavLink } from "react-router-dom";
import "../../Style/pages/Hero.css";
import Hero_img from "../../img/res-img.png";
import HeadingCol from "./HeadingCol";
import { useEffect } from "react";

const Hero = () => {
  return (
    <>
      <div>
        <main>
          <div class="hero_container">
            <img src={Hero_img} alt="" />
            <div class="hero-text">
              <h1 className="hero_title">Your perfect coffee experience</h1>
              <p className="hero_details">
                Indulge in artisanal coffee delights. Crafted with passion,
                brewed with perfection. Savor the Flavor!
              </p>
              <NavLink to="Shakes">
                <button className="hero_btn">Order Now</button>
              </NavLink>
            </div>
          </div>
        </main>
      </div>
      <HeadingCol />
    </>
  );
};

export default Hero;
