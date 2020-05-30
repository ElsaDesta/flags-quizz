import React from "react";

const Button = (props) => {
  
  return (
    <div  className="next_component">
      <button className="btn_next" onClick={props.onClick}>
        NEXT
      </button>
    </div>
  );
};

export default Button;
