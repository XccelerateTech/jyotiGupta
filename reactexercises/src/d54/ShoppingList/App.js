import React, {Component} from 'react'
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  import NavBar from './Navbar';
  import Home from './Home'
  import About from './About'
  import ShoppingListApp from './ShoppingListApp'
  import DisplayItem from './DisplayItem'
  import NoMatch from './NoMatch'

class App extends Component {
    render() {
        return(
            <div>
                <NavBar></NavBar>
                <Switch>
                <Route path="/About" component={About}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route path="/ShoppingList" component={ShoppingListApp}></Route>
                <Route path="/DisplayItem/:id" component={DisplayItem}></Route>
                <Route component={NoMatch}></Route>
                </Switch>
            </div>
        )
    }
}
export default App;