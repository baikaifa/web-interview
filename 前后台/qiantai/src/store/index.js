import  { createStore,compose,applyMiddleware } from 'redux';
import  thunk from 'redux-thunk'
import  reducer from './reducer';
import  '../http'
import   'antd-mobile/dist/antd-mobile.css'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

export default store;