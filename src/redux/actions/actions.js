import { type } from "./types";

export const setToggle = (payload) => {
  return {
    type: type.MOBILE_TOGGLE,
    payload: payload,
  };
};
