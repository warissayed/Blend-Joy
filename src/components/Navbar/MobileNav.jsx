import React from "react";
import "../../Style/Navbar/MobileNav.css";
import { Link, NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaCoffee } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { HiAnnotation } from "react-icons/hi";

const MobileNav = () => {
  return (
    <nav className="mobileNav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "MobileNav_link MobActive" : "MobileNav_link"}`
        }
      >
        <GoHomeFill />
        Home
      </NavLink>
      <NavLink
        to="Shakes"
        className={({ isActive }) =>
          `${isActive ? "MobileNav_link MobActive" : "MobileNav_link"}`
        }
      >
        <FaCoffee />
        Shakes
      </NavLink>
      <NavLink
        to="Services"
        className={({ isActive }) =>
          `${isActive ? "MobileNav_link MobActive" : "MobileNav_link"}`
        }
      >
        <MdSupportAgent />
        Services
      </NavLink>
      <NavLink
        to="About"
        className={({ isActive }) =>
          `${isActive ? "MobileNav_link MobActive" : "MobileNav_link"}`
        }
      >
        <HiAnnotation />
        About
      </NavLink>
    </nav>
  );
};

export default MobileNav;
