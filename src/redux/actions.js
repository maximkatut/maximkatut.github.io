import { ActionTypes } from "./actionTypes";

export const ActionCreator = {
  setLightMode: (lightMode) => {
    return {
      type: ActionTypes.SET_LIGHT_MODE,
      payload: lightMode,
    };
  },
};
