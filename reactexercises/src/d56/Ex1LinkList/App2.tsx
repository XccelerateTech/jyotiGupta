import * as React from "react";
import { createStore } from "redux";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import LinkList from './LinkList'
import UserList from './Users'

interface RootState {
  links: {
    title: string,
    url: string
  }[]
}

const rootReducer = (state: RootState) => {
  return {
    links: [
      { title: 'Google', url: 'http://www.google.com' },
      { title: 'Yahoo', url: 'http://www.yahoo.com' },
    ],
    users: [
      { name: 'Google'},
      { name: 'Yahoo' },
    ]
  }
};

const store = createStore<any,any,any,any>(rootReducer);

  const App2 = () => (
    <Provider store={store}>
      <div>
        <h2>Links</h2>
        <LinkList />
        <UserList />
      </div>
    </Provider>
  );
  
  render(<App2 />, document.getElementById("root")); 
  export default App2;

