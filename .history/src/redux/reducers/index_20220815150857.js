import { combineReducers } from "redux";
import { sitesReducer, selectedSitesReducer } from "./sitesReducer";
const reducers = combineReducers({
  allSites: sitesReducer,
  product: selectedSitesReducer,
});
export default reducers;
