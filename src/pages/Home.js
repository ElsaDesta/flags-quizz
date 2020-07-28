import "../StyleSheets/Home.scss";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addChoice, removeChoice } from "../action";

class Home extends Component {
  state = {
    selectedOption: "",
    disabled: true,
  };

  componentDidMount() {
    this.props.removeChoice();
  }
  handlePlay = (e) => {
    this.state.disabled
      ? e.preventDefault()
      : this.props.addChoice(this.state.selectedOption);
  };

  setOption = (e) => {
    console.log(e.target.value);
    this.setState({
      selectedOption: e.target.value,
      disabled: false,
    });
  };

  render() {
    return (
      <div className="home-game_wrapper">
        <header className="home-header">
          <h1>Flags Trivia</h1>
        </header>
        <section className="options-wrapper">
          <p>Choose number of questions</p>
          <div className="radio-btns" onChange={this.setOption}>
            <label>
              <input type="radio" value="5" name="option" />5
            </label>
            <label>
              <input type="radio" value="10" name="option" />
              10
            </label>
            <label>
              <input type="radio" value="15" name="option" />
              15
            </label>
            <label>
              <input type="radio" value="20" name="option" />
              20
            </label>
          </div>
        </section>

        <div className="play-component">
          <NavLink
            className="play-btn"
            onClick={this.handlePlay}
            to="/triviascreen"
          >
            <button className="play-btn" disabled={this.state.disabled}>
              {" "}
              Play{" "}
            </button>{" "}
          </NavLink>
        </div>
        <div className="rules-component">
          <p>Rules</p>
          {/* <span className="rules">
            Choose the country that matches the flag. Click on the question icon
            to get a hint.
          </span> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    used: state.used,
    choice: state.choice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addChoice: (option) => dispatch(addChoice(option)),
    removeChoice: () => dispatch(removeChoice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
