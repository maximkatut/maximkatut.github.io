import { ActionTypes } from "./actionTypes";

export const initialState = {
  lightMode: JSON.parse(localStorage.getItem("LIGHT_MODE")) || false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LIGHT_MODE:
      return {
        ...state,
        lightMode: action.payload,
      };
    default:
      return state;
  }
};
