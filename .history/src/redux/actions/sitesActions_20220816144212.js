import axios from "axios";
import { ActionTypes } from "../constants/action-types"

const setSites = (sites) => {
  return {
    type: ActionTypes.SET_SITES,
    payload: sites,
  }
}

const selectedSite = (site) => {
  return {
    type: ActionTypes.SELECTED_SITE,
    payload: site,
  }
}

const registerSite = (site) => {

}

const removeSelectedSite = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_SITE,
  }
}

export {
  setSites,
  selectedSite,
  removeSelectedSite,
}