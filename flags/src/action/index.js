import {ADD_ANSWER} from "./types";
import { RESET_STORE} from "./types";

export const addAnswer = (answer) => {
    return {
      type: ADD_ANSWER,
      answer,
    };
  };

  export const resetStore = () =>
  {
      return {
          type: RESET_STORE,
          
      }
  }
  