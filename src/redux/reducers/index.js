import { combineReducers } from "redux";
import { sitesReducer, selectedSiteReducer } from "./sitesReducer";
const reducers = combineReducers({
  allSites: sitesReducer,
  site: selectedSiteReducer,
});
export default reducers;