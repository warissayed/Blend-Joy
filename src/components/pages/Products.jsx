import React from "react";
import "../../Style/Product.css";
import data from "../../data/Data";
import { IoStarSharp } from "react-icons/io5";

const Products = () => {
  return (
    <>
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
      <div className="card_gallery">
        <div className="card_content">
          <img src="" alt="" />
          <h3 className="card_tittle">tittle</h3>
          <p className="card_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            laboriosam delectus cum voluptate earum odio,
          </p>
          <h6 className="card_price">$20.00</h6>
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
            <button className="card_button"> Bye Me</button>
          </ul>
        </div>

        <div className="card_content">
          <img src="" alt="" />
          <h3 className="card_tittle">tittle</h3>
          <p className="card_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            laboriosam delectus cum voluptate earum odio,
          </p>
          <h6 className="card_price">$20.00</h6>
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
          <button className="card_button"> Bye Me</button>
        </div>

        <div className="card_content">
          <img src="" alt="" />
          <h3 className="card_tittle">tittle</h3>
          <p className="card_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            laboriosam delectus cum voluptate earum odio,
          </p>
          <h6 className="card_price">$20.00</h6>
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
          <button className="card_button"> Bye Me</button>
        </div>

        <div className="card_content">
          <img src="" alt="" />
          <h3 className="card_tittle">tittle</h3>
          <p className="card_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            laboriosam delectus cum voluptate earum odio,
          </p>
          <h6 className="card_price">$20.00</h6>
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
          <button className="card_button"> Bye Me</button>
        </div>
      </div>
    </>
  );
};

export default Products;
