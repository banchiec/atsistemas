import { ActionTypes } from "../constants/action-types";

export const setSites = (products) => {
  return {
    type: ActionTypes.SET_SITES,
    payload: products,
  }
}

export const selectedSite = (product) => {
  return {
    type: ActionTypes.SELECTED_SITE,
    payload: product,
  }
}

export const removeSelectedSite = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_SITE,
  }
}