import React, { Component } from "react";
import "../StyleSheets/trivia.scss";
import QuestionCard from "../components/QuestionCard";
import { connect } from "react-redux";
import {
  removeUsedCountry,
  addUsedCountry,
  countScore,
  addChoice,
  removeScore,
} from "../action";
import getRandomCountry from "../helpers/getRandomCountry";
import getMultiCountries from "../helpers/getMultiCountries";
import shuffle from "../helpers/shuffle";
import getSvg from "../helpers/getSvgCountryFlag";
import getCountryios from "../helpers/getCountryios";
import allCountries from "../API/countries.json";
import ScoreBar from "../components/ScoreBar";

export class TriviaScreen extends Component {
  state = {
    quiz: "",
    quizSvg: "",
    flash: "",
    currentQuestion: "",
    disabled: false,
  };

  buildQuiz = async () => {
    try {
      const { used } = this.props;
      const randomCountry = await getRandomCountry(allCountries, used);
      this.setState({ quiz: randomCountry });
      this.props.addUsedCountry(randomCountry);
const ios = getCountryios(allCountries, randomCountry);
      const image =  await getSvg(ios);
      this.setState({ quizSvg: image });
      const randomChoices =  getMultiCountries(allCountries);

      const allOptions = shuffle([randomCountry, ...randomChoices]);
      this.setState({ options: allOptions });


    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.buildQuiz();
    this.setState({ currentQuestion: 1 });
    this.props.removeScore();
  }

  handleNextQuestion = (e) => {
    if (this.state.currentQuestion >= this.props.choice) {
      this.setState({ flash: "game over!", disabled: true });
    } else {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
      this.buildQuiz();
      this.setState({ flash: "", disabled: false });
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


  render() {
    const { options, quizSvg, flash, quiz, currentQuestion } = this.state;
    return (
      <div className="main_wrapper">
        <ScoreBar
          currentQuestion={currentQuestion}
          score={this.props.score}
          choice={this.props.choice}
        />

        <QuestionCard
          onClick={this.handleAnswerInput}
          options={options}
          quizSvg={quizSvg}
          flash={flash}
          disabled={this.state.disabled}
          quiz={quiz}
        />

        <button className="btn_next" onClick={this.handleNextQuestion}>
          {" "}
          next question
        </button>
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
    removeScore: () => {
      dispatch(removeScore());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TriviaScreen,
  ScoreBar
);
