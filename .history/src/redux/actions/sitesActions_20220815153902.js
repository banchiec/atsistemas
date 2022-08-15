import { ActionTypes } from "../constants/action-types"

export const setSites = (site) => {
  return {
    type: ActionTypes.SET_SITES,
    payload: products,
  }
}

export const selectedSite = (site) => {
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