import React, {Component} from "react";

 class QuestionCard extends  Component {

  render() {
const {options, quizSvg} = this.props;
  return (
    <>
      <figure className="question_component" data-test="question-component">
  {quizSvg?    <img className="flag" src={quizSvg} alt='country flag' /> : "loading..."}
      </figure>

      <div className="btn_hint">
        <span className="hint-icon">?!</span>
        <p className="hint">Hint coming soon</p>
      </div>

      <div className="answer_component" data-testid="answer-component">
        <h3>{this.props.flash}</h3>
        {options
          ? this.props.options.map((el, index) => (
              <button
                key={index}
                disabled={this.props.disabled}
                className="btn_answer"
                onClick={this.props.onClick}
                type="button"
                value={el}
              >
                {el}
              </button>
            ))
          : "loading..."}
      </div>
    </>
  )
          }
};

export default QuestionCard;
