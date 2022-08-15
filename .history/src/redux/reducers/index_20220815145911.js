import { combineReducers } from "redux";
import { sitesReducer, selectedsitesReducer } from "./sitesReducer";
const reducers = combineReducers({
  allsites: sitesReducer,
  product: selectedsitesReducer,
});
export default reducers;
