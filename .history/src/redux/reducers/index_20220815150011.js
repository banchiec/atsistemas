import { combineReducers } from "redux";
import { sitesReducer, selectedSitesReducer } from "./sitesReducer";
const reducers = combineReducers({
  allsites: sitesReducer,
  site: selectedSitesReducer,
});
export default reducers;
