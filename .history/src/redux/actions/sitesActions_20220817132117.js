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

const updateSite = (site) => {
  return {
    type: ActionTypes.UPDATE_SITE,
    payload: site,
  }
}


const registerSite = (site) => {
  return {
    type: ActionTypes.REGISTER_SITE,
    payload: site
  }
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
  registerSite,
  updateSite,
}