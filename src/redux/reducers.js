import { type } from "./actions/types";
import { combineReducers } from "redux";

const initialState = {
  isToggle: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.MOBILE_TOGGLE:
      return {
        ...state,
        isToggle: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
