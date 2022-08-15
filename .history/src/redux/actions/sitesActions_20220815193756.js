import axios from "axios";
import atresmediaApi from "../../api/atresmediaApi";
import { ActionTypes } from "../constants/action-types"
atresmediaApi

const fetchSites = () => async (dispatch) => {
    const response = await axios.get('/sites')
    dispatch({type: ActionTypes.FETCH_SITES, payload: response.data})
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
  removeSelectedSite,
  fetchSites,
}