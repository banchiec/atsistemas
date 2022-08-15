import axios from "axios";
import { ActionTypes } from "../constants/action-types"

const fetchSites = () => {
  return async function (dispatch, getState) {
    const response = await axios.get('/https://interview.staging.atresplayer.com/sites')
    dispatch({type: ActionTypes.FETCH_SITES, payload: response.data})
  }
}

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

const removeSelectedSite = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_SITE,
  }
}

export {
  setSites,
  selectedSite,
  removeSelectedSite
}