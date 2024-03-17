import React from "react";
import "../../Style/pages/HeadingCol.css";
import cafeImg from "../../img/cafe.jpg";
import cafeImg1 from "../../img/cafe1.jpg";
import { NavLink } from "react-router-dom";

const HeadingCol = () => {
  return (
    <div className="Heading_col">
      <h1>Taste of Tranquility Café </h1>
      <div className="Heading_container">
        <div className="Heading_card">
          <img src={cafeImg1} alt="" className="Heading_img" />
          <h2 className="Card_heading">Nerul's Oasis Café</h2>
          <h5 className="Card_title">
            Where Every Sip is a Serenade to Serenity
          </h5>
          <p>
            Step into a haven of flavors at our Nerul café, where every sip and
            bite is a journey of tranquility. Nestled amidst the bustling
            streets, our café offers a serene retreat for coffee aficionados and
            food enthusiasts alike.{" "}
          </p>

          <NavLink to="Shakes">
            <button>Order Now</button>
          </NavLink>
        </div>
        <div className="Heading_card">
          <img src={cafeImg} alt="" className="Heading_img" />
          <h2 className="Card_heading">Vashi's Vibrant Café</h2>
          <h5 className="Card_title">Sip, Savor, Celebrate the Vibrancy</h5>
          <p>
            Discover a vibrant culinary hub at our Vashi café, where flavors
            dance and aromas entice. Located in the heart of Vashi, our café
            beckons with its lively ambiance and irresistible menu offerings.
          </p>
          <NavLink to="Shakes">
            <button>Order Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeadingCol;
