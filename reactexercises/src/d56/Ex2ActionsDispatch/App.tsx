import * as React from "react";
import { createStore, Action} from "redux";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import LinkList from './LinkList'

export const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
export interface AddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    title: string,
    url: string
  };
}

// Define CLEAR_LINK const and its type
export const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
export interface ClearLinkAction extends Action {
  type: CLEAR_LINK;
}

// Collection of both for easier integration
export type LinkActions = AddLinkAction | ClearLinkAction;

interface RootState {
  links: {
    title: string,
    url: string
  }[]
}

const rootReducer = (state: RootState = {
  links: []
}, action: LinkActions /* add parameter here */) => {
  // Use switch to handle different actions
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.link]) // Use concat to add a new link
      }
    case CLEAR_LINK:
      return {
        links: [] // Reset the link
      }
    default:
      return state; // Do not change the state in case of any other actions
  }
};

const store = createStore<any,any,any,any>(rootReducer);

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


