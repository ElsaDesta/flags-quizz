import {ADD_ANSWER, RESET_STORE} from "../action/types";

const countAns =[];


export default function answerReducer (state = countAns, action) {
    switch (action.type) {
      case ADD_ANSWER:
        state.filter((answer) => answer!== action.answer);
        return [action.answer, ...state]
          
      
         case RESET_STORE : 
          return countAns          
  
      
  
      default:
        return state;
    }
  }
  