import React from "react";
import ".././Style/Footer.css";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_row">
            <div className="footer-col">
              <h4 className="footer_heading">Company</h4>
              <ul>
                <li>
                  <NavLink className="about_NavLink">Home</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">Shakes</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">services</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">About</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer_heading">Get help</h4>
              <ul>
                <li>
                  <NavLink className="about_NavLink">FAQ</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">Shipping</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">Payment Option</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">orderStatus</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer_heading">Online shop</h4>
              <ul>
                <li>
                  <NavLink className="about_NavLink">MilkShake</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">Fresh Juice</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">Shakes</NavLink>
                </li>
                <li>
                  <NavLink className="about_NavLink">Coffee</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer_heading">Follow Us</h4>
              <ul>
                <div className="social-links">
                  <FaGithub className="about_icon" />

                  <FaLinkedin className="about_icon" />
                  <FaXTwitter className="about_icon" />
                  <AiFillInstagram className="about_icon" />
                </div>
                <p>&copy; 2024 Waris Sayed. All rights reserved.</p>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
