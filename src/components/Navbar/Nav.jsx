import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Style/Navbar/Nav.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="Nav">
        <div className="left_nav">
          <div className="navbar_faBars">
            <FaBarsStaggered size={20} onClick={showSidebar} />
          </div>
          <h1 className="nav_title">Blend&Joy</h1>
          <ul>
            <li className="nav_li">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "nav_a isActive" : "nav_a"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink
                to="Shakes"
                className={({ isActive }) =>
                  `${isActive ? "nav_a isActive" : "nav_a"}`
                }
              >
                Shakes
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink
                to="Services"
                className={({ isActive }) =>
                  `${isActive ? " isActive nav_a" : "nav_a"}`
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink
                to="About"
                className={({ isActive }) =>
                  `${isActive ? " isActive nav_a" : "nav_a"}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="search_input">
          <AiOutlineSearch size={20} />
          <input
            className="nav_inputBox"
            type="text"
            placeholder="Search Food"
            id=""
          />
        </div>
        <div>
          <button className="nav_button">
            <NavLink
              to="Cart"
              className={({ isActive }) =>
                `${isActive ? " isActive Nav_cart" : "Nav_cart"}`
              }
            >
              <BsFillCartFill size={20} className="cart_icon" />
              Cart
            </NavLink>
          </button>
        </div>
      </div>
      {/* this is side nav */}
      <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
        <ul className="nav_menu_items">
          <li className="nav_text">
            <IoClose size={30} onClick={showSidebar} />
          </li>
          <h1 className="nav_title">Blend&Joy</h1>
          <li className="nav_text">
            <span className="nav_a">MilkShake</span>
          </li>
          <li className="nav_text">
            <span className="nav_a">Fresh Juice</span>
          </li>
          <li className="nav_text">
            <span className="nav_a">Shakes</span>
          </li>
          <li className="nav_text">
            <span className="nav_a">Coffee</span>
          </li>
        </ul>
      </nav>
      {/* end of side nav */}
    </>
  );
};

export default Nav;
