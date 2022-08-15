import { compose, applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'

import reducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const store = createStore( composeEnhancers(applyMiddleware(thunk)));

export default store;
