import React from "react";
import "../../Style/Shakes.css";
import data from "../../data/Data";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { add } from "../../Slice/cartSlice";

const Shakes = () => {
  const dispatch = useDispatch();
  const addCart = (data) => {
    dispatch(add(data));
  };
  return (
    <>
      <div className="card_gallery">
        {data.map((data) => (
          <div className="card_content" key={data.id}>
            <img src={data.Image} alt="" className="card_img" />
            <h3 className="card_tittle">{data.Title}</h3>
            <p className="card_details">Lorem ipsum dolor sit amet</p>
            <h6 className="card_price">{data.price}</h6>
            <ul className="card_ul">
              <li
                className="card_li
            "
              >
                <IoStarSharp
                  style={{
                    color: "gold",
                  }}
                  className="card_icon"
                />
              </li>
              <li
                className="card_li
            "
              >
                <IoStarSharp
                  style={{
                    color: "gold",
                  }}
                  className="card_icon"
                />
              </li>
              <li
                className="card_li
            "
              >
                <IoStarSharp
                  style={{
                    color: "gold",
                  }}
                  className="card_icon"
                />
              </li>
              <li
                className="card_li
            "
              >
                <IoStarSharp
                  style={{
                    color: "gold",
                  }}
                  className="card_icon"
                />
              </li>
            </ul>
            <p className="card_details">{data.category}</p>
            <button onClick={() => addCart(data)} className="card_button">
              {" "}
              Bye Me
            </button>
          </div>
        ))}
      </div>
      {/* <div className="card_content">
        {data.map((data) => (
          <div className="card_item" key={data.id}>
            <img src={data.Image} alt="img" className="card_img" />
            <div className="card_description">
              <h3 className="card_heading">{data.Title}</h3>
              <p className="card_dis">Lorem ipsum dolor sit abet consectetur</p>
              <h4 className="card_pricing">{data.price}</h4>
              <ul className="star_ul">
                <li className="star_li">
                  <IoStarSharp
                    style={{
                      color: "gold",
                    }}
                    className="card_icon"
                  />
                </li>
                <li className="star_li">
                  <IoStarSharp
                    style={{
                      color: "gold",
                    }}
                    className="card_icon"
                  />
                </li>
                <li className="star_li">
                  <IoStarSharp
                    style={{
                      color: "gold",
                    }}
                    className="card_icon"
                  />
                </li>
                <li className="star_li">
                  <IoStarSharp
                    style={{
                      color: "gold",
                    }}
                    className="card_icon"
                  />
                </li>
              </ul>
              <button className="card_btn">Bye Me</button>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Shakes;
