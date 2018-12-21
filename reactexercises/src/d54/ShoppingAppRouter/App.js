import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    match
  } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import ShoppingListApp from './ShoppingListApp'

class App extends Component {
    render() {
        return(
            <div>
            <Navbar></Navbar>
            <Route exact path="/" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/ShoppingList" component={ShoppingListApp}></Route>
            </div>     
        )
    }
}
export default App;