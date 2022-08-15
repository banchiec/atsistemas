import { ActionTypes } from "../constants/action-types";
const intialState = {
  sites: [],
};

export const sitesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SITES:
      return { 
        ...state, 
        sites: payload 
      };
    default:
      return state;
  }
};

export const selectedSiteReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_SITE:
      return { 
        ...state,
        ...payload 
      };
    case ActionTypes.REMOVE_SELECTED_SITE:
      return {};
    default:
      return state;
  }
};