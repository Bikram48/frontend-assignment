import { type } from "./actions/types";

const initialState = {
  isToggle: false,
  products: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.MOBILE_TOGGLE:
      return {
        ...state,
        isToggle: action.payload,
      };
    case type.FETCH_DATA:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
