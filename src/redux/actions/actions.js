import { type } from "./types";

export const setToggle = (payload) => {
  return {
    type: type.MOBILE_TOGGLE,
    payload: payload,
  };
};

export const fetchProductData = (payload) => {
  return {
    type: type.FETCH_DATA,
    payload: payload,
  };
};

export const fetchSingleProductData = (payload) => {
  return {
    type: type.FETCH_DETAIL,
    payload: payload,
  };
};

export const searchQuery = (payload) => {
  return {
    type: type.PRODUCT_SEARCH,
    payload: payload,
  };
};
