import { compose } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";

import reducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
