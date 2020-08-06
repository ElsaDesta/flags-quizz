import {COUNT_SCORE, REMOVE_SCORE} from "../action/types";

const initialState = 0;
export default function (state= initialState, action) {
 switch (action.type) {
     case COUNT_SCORE:
         return state + 1
    case REMOVE_SCORE:
        return initialState
     default:
         return state
 }
}