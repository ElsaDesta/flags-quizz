import {COUNT_SCORE, REMOVE_SCORE} from "../action/types";

const initScore = 0;
export default function score(state= initScore, action) {
 switch (action.type) {
     case COUNT_SCORE:
         return state + 1
    case REMOVE_SCORE:
        return initScore
     default:
         return state
 }
}