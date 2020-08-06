import React, { Component } from "react";
import "../StyleSheets/trivia.scss";
import Button from "../components/Button";
import QuestionBody from "../components/Question";
import { data } from "../API/data";
import { connect } from "react-redux";
import { removeUsedCountry } from "../action";
import { addUsedCountry } from "../action";
import { countScore } from "../action";


export class Trivia2 extends Component {
  state = {
    question: "",
    flash: "",
    selectedIndex: 0,
    isAnswered: false,
    score: 0,
    finalScore: 0,
    isHelp: false,
    image1: "",
  };

  getData = () => {
    this.setState({
      question: data,
      selectedIndex: 0,
    });
  };

  componentDidMount() {
    this.getData();

  }

  handleNextQuestion = () => {
    if (this.state.selectedIndex === this.state.question.length - 1) {
      this.setState({ flash: "game over!" });
    } else {
      this.setState((prevState) => ({
        selectedIndex: prevState.selectedIndex + 1,
      }));
      this.setState({
        isAnswered: false,
        flash: "",
        isHelp: false,
      });
    }
  };

  handleHint = () => {
    const { isHelp } = this.state;
    this.setState({ isHelp: !isHelp });
  };

  handleAnswerInput = (event) => {
    const { selectedIndex } = this.state;

    console.log(event.target.value);
    //to check when a button is clicked
    this.setState({ isAnswered: true });
    //check if value of clicked button is equal to the value of the correct answer
    if (event.target.value === this.state.question[selectedIndex].answer) {
      //adds the value of the correct answer to redux store
      this.props.countScore();

      this.setState({ flash: "CORRECT!" });
    } else {
      this.setState({ flash: "WRONG!" });
    }
  };

  render() {
    let { selectedIndex } = this.state;
    return (
      <div className="main_wrapper">
        <div className="top_wrapper">
          <div className="top_right">
            <h3>Score:{this.props.score}</h3>{" "}
          </div>
          <div className="top_left">
            {" "}
            <h3>
              {selectedIndex + 1}/{this.state.question.length}
            </h3>{" "}
          </div>
        </div>

        <QuestionBody
          onClick={this.handleAnswerInput}
          isAnswered={this.state.isAnswered}
          flash={this.state.flash}
          isHelp={this.state.isHelp}
          {...this.state.question[selectedIndex]}
          onMouseEnter={this.handleHint}
        />

        {this.state.image1 ? (
          <img src={this.state.image1} alt="flag of a country" />
        ) : null}

        <div
          className="next_component"
          style={{
            display: this.state.flash === "game over!" ? "none" : "flex",
          }}
        >
          <Button onClick={this.handleNextQuestion} />
        </div>
        <div
          className="score-board"
          style={{
            display: this.state.flash === "game over!" ? "flex" : "none",
          }}
        >
          <h1 className="score">
            {" "}
            You scored:{" "}
            <span>
              {this.state.finalScore} / {this.state.question.length}{" "}
            </span>
          </h1>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsedCountry: (answer) => {
      dispatch(addUsedCountry(answer));
    },
    removeUsedCountry: () => {
      dispatch(removeUsedCountry());
    },
    countScore: () => {
      dispatch(countScore());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trivia2);
