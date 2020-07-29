import "../StyleSheets/Home.scss";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addChoice, removeChoice } from "../action";
import Options from "../components/Options";

class Home extends Component {
  state = {
    selectedOption: "",
    disabled: true,
  };

  componentDidMount() {
    this.props.removeChoice();
  }

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
  };

  render() {
    return (
      <>

        <header className="home-header">
          <h1>Flags Trivia</h1>
        </header>
        <section className="options-wrapper" name="select option" role="main" >
          <p role="contentinfo">Choose number of questions</p>
          <Options onChange={this.selectOption} />
        </section>
            <nav> <Link
          onClick={this.handlePlay}
          className="play-btn"
          disabled={this.state.disabled}
          to="/triviascreen"
        >
          {" "}
          Play
                  </Link>{" "}</nav>

        <div className="rules-component">
          <p>Rules</p>
          {/* <span className="rules">
            Choose the country that matches the flag. Click on the question icon
            to get a hint.
          </span> */}
        </div>
     </>
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
