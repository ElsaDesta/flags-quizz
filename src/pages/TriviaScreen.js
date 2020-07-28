import React, { Component } from "react";
import "../StyleSheets/trivia.scss";
import QuestionCard from "../components/QuestionCard";
import { connect } from "react-redux";
import {
  removeUsedCountry,
  addUsedCountry,
  countScore,
  addChoice,
} from "../action";
import getRandomCountry from "../helpers/getRandomCountry";
import getMultiCountries from "../helpers/getMultiCountries";
import shuffle from "../helpers/shuffle";
import getSvg from "../helpers/getSvgCountryFlag";
import getCountryios from "../helpers/getCountryios";
import allCountries from "../API/countries.json";

export class TriviaScreen extends Component {
  state = {
    quiz: "",
    quizSvg: "",
    flash: "",
    selected: "",
    currentQuestion: "",
    disabled: false
  };

  buildQuiz = () => {
    const { used } = this.props;
    let randomCountry = getRandomCountry(allCountries, used);
    console.log(randomCountry);
    let randomChoices = getMultiCountries(allCountries);
    let allOptions = shuffle([randomCountry, ...randomChoices]);
    let ios = getCountryios(allCountries, randomCountry);
    let image = getSvg(ios);
    this.setState({ quiz: randomCountry, quizSvg: image, options: allOptions });
    this.props.addUsedCountry(randomCountry);
  };

  componentDidMount() {
    this.buildQuiz();
    this.setState({ currentQuestion: 1 });
  }

  handleNextQuestion = (e) => {
    if (this.state.currentQuestion >= this.props.choice) {
      this.setState({ flash: "game over!", disabled: true });
    } else {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
      this.buildQuiz();
      this.setState({ flash: "" , disabled: false});
    }
  };

  handleAnswerInput = (event) => {
    if (event.target.value === this.state.quiz) {
      this.props.countScore();
      this.setState({ flash: "CORRECT!", disabled: true });
    } else {
      this.setState({ flash: "WRONG!", disabled: true });
    }
  };

  handleOption = (e) => {
    this.props.addChoice(e.target.value);
    this.setState({ selected: e.target.value });
  };

  render() {
    const { options, quizSvg, flash } = this.state;
    return (
      <div className="main_wrapper">
        <div className="top_wrapper">
          <div className="top_right">
            <h3>Score:{this.props.score}</h3>{" "}
          </div>
          <div className="top_left">
            {" "}
            <h3>
             Question:{this.state.currentQuestion}/{this.props.choice}
            </h3>{" "}
          </div>
        </div>

        <QuestionCard
          onClick={this.handleAnswerInput}
          options={options}
          quizSvg={quizSvg}
          flash={flash}
          disabled={this.state.disabled}
        />

        <div
          className="next_component"
          style={{
            visibility: flash === "game over!" ? false : true,
          }}
        >
          <button className="btn_next" onClick={this.handleNextQuestion}>
            {" "}
            next question
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answer: state.answer,
    used: state.used,
    score: state.score,
    choice: state.choice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsedCountry: (country) => {
      dispatch(addUsedCountry(country));
    },
    removeUsedCountry: () => {
      dispatch(removeUsedCountry());
    },
    countScore: () => {
      dispatch(countScore());
    },
    addChoice: (number) => {
      dispatch(addChoice(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TriviaScreen);
