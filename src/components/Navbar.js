import React from "react";
import {Link } from "react-router-dom";
import "../StyleSheets/navbar.scss";
import homesvg from "../images/home.svg";

const Navbar = (props) => {
  return (

    <nav className="top-nav">
      <ul>
        <li className="nav-home-icon">
<Link to="/"> <img src={homesvg} alt="home icon" /></Link>
        </li>
      </ul>
    </nav>

//     <div className="top-nav">
//       <div className="home-nav">
//         {" "}
//         <Link to="/">
//           <img src={homesvg} alt="home-icon" />
//         </Link>{" "}
//       </div>

//       <div className="play-nav">
//         <Link to="/trivia">
//           <img src={play} alt="play-icon" />
//         </Link>
//       </div>
//       <div className="link-nav">
//         {" "}
//         <a
//           href="https://www.linkedin.com/in/elsabethdesta"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={linkedin} alt="linedin-icon" />
//         </a>{" "}
//       </div>
//     </div>
 );
};

export default Navbar;
