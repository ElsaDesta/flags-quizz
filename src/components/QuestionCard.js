import React from "react";

const QuestionCard = (props) => {
  const options = props.options;

  return (
    <>
      <figure className="question_component" data-test="question-component">
        <img className="flag" src={props.quizSvg} alt={props.quiz} />
      </figure>

      <div className="btn_hint">
        <span className="hint-icon">?!</span>
        <p className="hint">Hint coming soon</p>
      </div>

      <div className="answer_component" data-testid="answer-component">
        <h3>{props.flash}</h3>
        {options
          ? options.map((el) => (
              <button
                key={el}
                disabled={props.disabled}
                className="btn_answer"
                onClick={props.onClick}
                value={el}
                type="button"
              >
                {el}
              </button>
            ))
          : "loading..."}
      </div>
    </>
  );
};

export default QuestionCard;
