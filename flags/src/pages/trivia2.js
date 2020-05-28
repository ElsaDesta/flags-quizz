import React, { Component } from "react";
import "../StyleSheets/trivia.scss";
import Button from "../components/Button";
import QuestionBody from "../components/Question";
import { data } from "../API/data";
import { addAnswer } from "../action";
import { connect } from "react-redux";
import { resetStore } from "../action";

export class Trivia2 extends Component {
  state = {
    question: "",
    flash: "",
    selectedIndex: 0,
    isAnswered: false,
    score: this.props.answer,
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
      this.setState({ flash: "game over!", score: this.props.answer.length });
      this.props.resetStore();
    } else {
      this.setState((prevState) => ({
        selectedIndex: prevState.selectedIndex + 1,
      }));
      this.setState({ isAnswered: false, flash: "" });
    }
  };

  handleAnswerInput = (event) => {
    const { selectedIndex } = this.state;

    console.log(event.target.value);
    //to check when a button is clicked
    this.setState({ isAnswered: true });
    //check if value of clicked button is equal to the value of the correct answer
    if (event.target.value === this.state.question[selectedIndex].answer) {
      //this is a redux action - adds the value of the correct answer to store
      this.props.addAnswer(event.target.value);

      this.setState({ flash: "CORRECT!" });
    } else {
      this.setState({ flash: "WRONG!" });
    }
  };

  render() {
    let { selectedIndex } = this.state;
    return (
      <div className="main_wrapper">
        {this.state.question ? (
          <QuestionBody
            onClick={this.handleAnswerInput}
            isAnswered={this.state.isAnswered}
            flash={this.state.flash}
            {...this.state.question[selectedIndex]}
          />
        ) : (
          <QuestionBody
            onClick={this.handleAnswerInput}
            flash={this.state.flash}
            {...this.state.question[selectedIndex]}
          />
        )}
        <div
          style={{
            display: this.state.flash === "game over!" ? "none" : "block",
          }}
        >
          {" "}
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
              {this.state.score} / {this.state.question.length}{" "}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnswer: (answer) => {
      dispatch(addAnswer(answer));
    },
    resetStore: () => {
      dispatch(resetStore());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trivia2);
