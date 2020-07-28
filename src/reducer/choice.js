import { ADD_CHOICE_SELECTED, REMOVE_CHOICE } from "../action/types";

const initChoice = [];
export default function choice (state = initChoice, action) {
  switch (action.type) {
    case ADD_CHOICE_SELECTED:
      return [...state, action.number];
    case REMOVE_CHOICE:
      return initChoice
    default:
      return state
  }
};
