import React from "react";

const QuestionCard = (props) => {
  const flash = props.flash;
  const options = props.options;


  return (
    <div className="game_wrapper">
      <div className="header_component"></div>
      <div className="question_component">
        <img className="flag" src={props.quizSvg} alt="icon-flag-country" />
      </div>

      <div className="btn_hint">
        <span className="hint-icon">?!</span>
        <span className="hint">Hint coming soon</span>
      </div>

      <div className="answer_component">
        <h3
          style={{ visibility: flash ? "visible" : "hidden" }}
          className="flash"
        >
          {flash}
        </h3>
        {options
          ? options.map((el, index) => (
              <button
                key={index}
                disabled={props.disabled}
                className="btn_answer"
                onClick={props.onClick}
                value={el}
              >
                {el}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default QuestionCard;
