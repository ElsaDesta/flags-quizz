import React from "react";

export default function Options(props) {
  return (
    <fieldset className="radio-btns" onChange={props.onChange}>
      <legend>Choose number of questions</legend>
      <label>
        <input type="radio" value="5" name="option" />
        5
      </label>
      <label>
        <input type="radio" value="10" name="option" />
        10
      </label>
      <label>
        <input type="radio" value="15" name="option" />
        15
      </label>
      <label>
        <input type="radio" value="20" name="option" />
        20
      </label>
    </fieldset>
  );
}
