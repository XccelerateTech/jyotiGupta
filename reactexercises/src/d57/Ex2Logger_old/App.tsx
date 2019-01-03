import * as React from "react";
import { createStore, applyMiddleware} from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import LinkList from './components/LinkList';
import logger from 'redux-logger';
import {rootReducer} from './reducers'

const store = createStore<any,any,any,any>(rootReducer, applyMiddleware(logger));

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
    </div>
  </Provider>
);
  
render(<App />, document.getElementById("root")); 
export default App;


