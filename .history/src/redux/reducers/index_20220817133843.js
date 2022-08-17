import { combineReducers } from "redux";
import { sitesReducer, selectedSiteReducer, registerSiteReducer, updateSiteReducer } from "./sitesReducer";
const reducers = combineReducers({
  allSites: sitesReducer,
  site: selectedSiteReducer,
  registerSite: registerSiteReducer,
  update: updateSiteReducer,
});
export default reducers;