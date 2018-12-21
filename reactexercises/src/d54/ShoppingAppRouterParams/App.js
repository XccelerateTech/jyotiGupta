import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import ShoppingListApp from './ShoppingListApp'
import DisplayItem from './DisplayItem'
import Footer from './Footer'

class App extends Component {
    render() {
        return(
         
            <div>
            <Navbar></Navbar>           
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/" component={About}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/ShoppingList" component={ShoppingListApp}></Route>
           
            <Footer></Footer>
            </div>
         
        )
    }
}
export default App;
//<Route path="/DisplayItem/:id" component={DisplayItem}></Route>