import { ADD_CHOICE_SELECTED, REMOVE_CHOICE } from "../action/types";

const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CHOICE_SELECTED:
      return [...state, action.number];
    case REMOVE_CHOICE:
      return initialState
    default:
      return state
  }
};
