import React from "react";

export default function Options(props) {
  return (
    <fieldset className="radio-btns" aria-label="select options" onChange={props.onChange}>
      <legend id="radio-label" >Choose number of questions</legend>


      <label >
        <input
          type="radio"
          id="option5"
          value="5"
name="option"
          aria-checked="false"
        />
        5
        </label>

      <label>
        <input type="radio" name="option" value="10" id="option-10" aria-checked="false" />
        10
      </label>
      <label>
        <input type="radio" value="15" name="option" id="option-15" aria-checked="false" />
        15
      </label>
      <label>
        <input type="radio" value="20" name="option" id="option-20" aria-checked="true" />
        20
      </label>

    </fieldset>
  );
}
