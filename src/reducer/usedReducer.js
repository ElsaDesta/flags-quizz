import { ADD_USED_COUNTRY, REMOVE_USED_COUNTRY } from "../action/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USED_COUNTRY:
      return [...state, action.used];
    case REMOVE_USED_COUNTRY:
      return initialState;
    default:
      return state;
  }
}
