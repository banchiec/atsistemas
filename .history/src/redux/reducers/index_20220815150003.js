import { combineReducers } from "redux";
import { sitesReducer, selectedsitesReducer } from "./sitesReducer";
const reducers = combineReducers({
  allsites: sitesReducer,
  site: selectedSitesReducer,
});
export default reducers;
