import { combineReducers } from "redux";

const section = (state = [], action) => {
  switch (action.type) {
    case "LOAD_CHARACTERS":
      if (action.payload.length) {
        return [...action.payload];
      }
      return state;
    case "SORT":
      if (action.payload.length) {
        return [...action.payload];
      }
      return state;
    case "SEARCH":
      return [...action.payload];
    case "FILTER":
      return [...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  section: section
});
