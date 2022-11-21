// src/store/index.js
import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from '../reducers/index';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;