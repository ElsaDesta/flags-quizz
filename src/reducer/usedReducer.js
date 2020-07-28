import {ADD_USED_COUNTRY, REMOVE_USED_COUNTRY} from "../action/types";


const initState =[];
export default function usedReducer(state= initState, action) {
 switch (action.type) {
     case ADD_USED_COUNTRY:
         return [...state, action.used]
    case REMOVE_USED_COUNTRY:
        return initState
     default:
         return state
 }
}