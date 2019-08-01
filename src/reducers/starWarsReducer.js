import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILED
} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('charsReducer', action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_START:
      return{
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_CHAR_SUCCESS:
       return{
         ...state,
         characters: action.payload,
         fetching: false,
         error: null
       };
    case FETCH_CHAR_FAILED:
       return{
         ...state,
         fetching: false,
         error: action.payload
       }   
    default:
      return state;
  }
};
export default charsReducer;