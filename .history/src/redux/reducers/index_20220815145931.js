import { combineReducers } from "redux";
import { sitesReducer, selectedsitesReducer } from "./sitesReducer";
const reducers = combineReducers({
  allsites: sitesReducer,
  site: selectedsitesReducer,
});
export default reducers;
