import { searchQuery } from "./actions/actions";
import { type } from "./actions/types";

const initialState = {
  isToggle: false,
  products: null,
  productDetail: null,
  searchQuery: null,
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
    case type.FETCH_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case type.PRODUCT_SEARCH:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
