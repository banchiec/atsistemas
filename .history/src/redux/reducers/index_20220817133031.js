import { combineReducers } from "redux";
import { sitesReducer, selectedSiteReducer, registerSiteReducer, updateSiteReducer } from "./sitesReducer";
const reducers = combineReducers({
  allSites: sitesReducer,
  site: selectedSiteReducer,
  registerSite: registerSiteReducer,
  updateSite: updateSiteReducer,
});
export default reducers;