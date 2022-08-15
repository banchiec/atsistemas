import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SITES:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedSiteReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_SITE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_SITE:
      return {};
    default:
      return state;
  }
};