import React from "react";


const AnswerButton = (props) => {
    return (
     
        <button className="btn_answer" onClick={props.onClick} >
          {props.A}
        </button>
      
    )
  };
  export default AnswerButton;
