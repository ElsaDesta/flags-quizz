import {combineReducers} from "redux";
import answerReducer from "./answerReducer";

export default combineReducers({
    answer: answerReducer
});