import React from "react";

const QuestionBody = (props) => {
  const isAnswered = props.isAnswered;
  const flash = props.flash;
  const isHelp = props.isHelp;
  
 
  
  return (
    <div className="game_wrapper">
      <div className="header_component">
        <h2 className="starter_h">LETS PLAY!</h2>
      </div>
      <div className="question_component">
        <img className="flag" src={props.question} alt="icon-flag-country" />
      </div>
       <p className="hint" style={{ display: isHelp === false || isAnswered === true ? "none" : "flex" }} > {props.hint1} </p>
          
      <div className="answer_component_wrapp">
        <div className="answer_component">
         
          <h3 className="flash">{props.flash}</h3>
          <div
            style={{
              display: isAnswered || flash === "game over!" ? "none" : "block",
            }}
            className="btn_component"
          >
            <button
              className="btn_answer"
              onClick={props.onClick}
              value={props.A}
            >
              {props.A}
            </button>
          </div>
          <div
            style={{
              display: isAnswered || flash === "game over!" ? "none" : "block",
            }}
            className="btn_component"
          >
            <button
              className="btn_answer"
              onClick={props.onClick}
              value={props.B}
            >
              {props.B}
            </button>
          </div>
          <div
            style={{
              display: isAnswered || flash === "game over!" ? "none" : "block",
            }}
            className="btn_component"
          >
            <button
              className="btn_answer"
              onClick={props.onClick}
              value={props.C}
            >
              {props.C}
            </button>
          </div>
          <div
            style={{
              display: isAnswered || flash === "game over!" ? "none" : "block",
            }}
            className="btn_component"
          >
            <button
              className="btn_answer"
              onClick={props.onClick}
              value={props.D}
            >
              {props.D}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBody;
