import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './reducers'
import logger from 'redux-logger'

export const store = createStore<any,any,any,any>(rootReducer, applyMiddleware(logger));