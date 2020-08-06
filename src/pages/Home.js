import "../StyleSheets/Home.scss";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addChoice, removeChoice } from "../action";
import Options from "../components/Options";



export class Home extends Component {
  state = {
    selectedOption: "",
    disabled: true,
  };



  /* prevent play button if no option has been selected*/
  handlePlay = (e) => {
    this.state.disabled
      ? e.preventDefault()
      : this.props.addChoice(this.state.selectedOption);
  };

  selectOption = (e) => {
    console.log(e.target.value);
    this.setState({
      selectedOption: e.target.value,
      disabled: false,
    });
    this.props.removeChoice()
  };

  render() {
    return (
      <div data-test="home-component">
        <header className="home-header">
          <h1>Flags Trivia</h1>
        </header>
        <main>
          <Options onChange={this.selectOption} data-test="option-component" />
          <Link
            onClick={this.handlePlay}
            className="play-btn"
            disabled={this.state.disabled}
            to="/triviascreen"
          >
            {" "}
            Play
          </Link>{" "}
        </main>

        <div className="rules-component">
          <p>Rules</p>
          <span className="rules">
            Select the country that matches the flag. Click on the question icon
            to get a hint.
          </span>
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
