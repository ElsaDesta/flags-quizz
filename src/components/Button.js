import React from "react";

const Button = (props) => {
  
  return (
    
      <button className="btn_next" onClick={props.onClick}>
        Next
      </button>
    
  );
};

export default Button;

export const Button2 = (props) => {
  return (
   
      <button className="btn_next" onClick={props.onClick}>
        Hint
      </button>
    
  )
};


