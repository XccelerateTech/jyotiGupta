import { createStore, applyMiddleware } from "redux";
import { RootState, rootReducer } from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export const store = createStore<any,any,any,any>(
  rootReducer,
  applyMiddleware(thunk,logger)
);