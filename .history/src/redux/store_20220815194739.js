import { compose, applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from "./reducers/index";
import atresmediaApi from '../api/atresmediaApi'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk.withExtraArgument(atresmediaApi))));

export default store;
