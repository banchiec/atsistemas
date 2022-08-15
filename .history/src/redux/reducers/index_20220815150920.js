import { combineReducers } from "redux";
import { sitesReducer, selectedSitesReducer } from "./sitesReducer";
const reducers = combineReducers({
  allSites: sitesReducer,
  site: selectedSitesReducer,
});
export default reducers;
