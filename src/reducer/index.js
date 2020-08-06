import {combineReducers} from "redux";

import usedReducer from "./usedReducer";
import score from "./score";
import choice from "./choice";

export default combineReducers({

    used: usedReducer,
    score: score,
    choice: choice
});