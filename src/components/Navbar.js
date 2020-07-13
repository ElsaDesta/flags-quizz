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
      <div className="home-nav">
        {" "}
        <Link to="/">
          <img src={home} alt="home-icon" />
        </Link>{" "}
      </div>

      <div className="play-nav">
        <Link to="/trivia">
          <img src={play} alt="play-icon" />
        </Link>
      </div>
      <div className="link-nav">
        {" "}
        <a
          href="https://www.linkedin.com/in/elsabethdesta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linedin-icon" />
        </a>{" "}
      </div>
    </div>
  );
};

export default Navbar;
