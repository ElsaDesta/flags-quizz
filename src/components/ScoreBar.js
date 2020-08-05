import React from "react";

 const ScoreBar = (props) => {
  return (
    <header className="top_wrapper">
      <div className="top_right">
        <h3>Score:{props.score}</h3>{" "}
      </div>
      <div className="top_left">
        {" "}
        <h3>
          Question:{props.currentQuestion}/{props.choice}
        </h3>{" "}
      </div>
    </header>
  );
};

export default ScoreBar