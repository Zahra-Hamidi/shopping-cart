import {createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productsReducer } from './reducers/productReducers';

const initialState = {};

const reducer = combineReducers({
    products : productsReducer,
    cart:cartReducer
});
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;