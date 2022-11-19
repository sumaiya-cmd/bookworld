import { createStore  , combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import adminReducer from "./Reducers/adminReducer";

const Reducers = combineReducers({
 admin:adminReducer
});

const middleware = [thunk] ;
const store = createStore(
    Reducers ,
    composeWithDevTools(applyMiddleware(...middleware))
     )

export default store ;     
