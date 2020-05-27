import React, { Component } from "react";
import "../StyleSheets/Home.scss";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-game_wrapper">
        <div className="home-header_component">
          <h2 className="home-starter_h">HEY THERE!</h2>
        </div>

        <h2 className="home-question">
          Let's have fun with<span>FLAGS</span>
        </h2>
        <div className="home-answer_component">
          <h3 className="intro">
            <span className="play-icon">▶</span>
            <span className="play-icon">1</span> Flag
          </h3>
          <h3 className="intro">
            <span className="play-icon">▶</span>
            <span className="play-icon">4</span> Choices
          </h3>
          <h3 className="intro">
            <span className="play-icon">ONE</span> right answer
          </h3>
        </div>

        <div className="home-next_component">
          <NavLink to="/trivia">
            {" "}
            <button className="home-btn_next">PLAY </button>{" "}
          </NavLink>
        </div>
      </div>
    );
  }
}