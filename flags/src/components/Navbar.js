import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/navbar.scss";
import home from "../images/home.png";
import linkedin from "../images/linkedin-sign.png";
import menu from "../images/menu-icon.png";
import play from "../images/play.png";

const Navbar = (props) => {
  return (
    <div className="top-nav">
      <Link className="home-nav" to="/home">
        <img src={home} alt="home-icon" />
      </Link>

      <Link to="/trivia">
        <div
          style={{ display: props.opened === true ? "block" : "none" }}
          className="play-nav"
        >
          <img src={play} alt="play-icon" />
        </div>
      </Link>

     
      <a
        style={{ display: props.opened === true ? "block" : "none" }}
        className="link-nav"
        href="https://www.linkedin.com/in/elsabethdesta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linedin-icon" />
      </a>

      <button
        className="menu-icon"
        onClick={props.onClick}
        value={props.opened}
      >
        <img src={menu} alt="menu-icon" />
      </button>
    </div>
  );
};

export default Navbar;
