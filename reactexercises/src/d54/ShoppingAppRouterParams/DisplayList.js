import React from 'react';
import {
    Link,
    Route,
  } from 'react-router-dom'
  import DisplayItem from './DisplayItem'

const DisplayList = (props)=> {
    const listItems = props.list.map(l=>
        <div className="item" key={l.id} >
            <span><Link to={'/DisplayItem/' + l.id}>{l.item}</Link></span>
        </div>
          
        )
    return(
        <div>
            <h1> {props.name}'s Shopping List</h1>
            <div className="ui celled list">
                {listItems}
            </div>
    <Route path="/DisplayItem/:id" component={DisplayItem}></Route>
        </div>
    )
}

export default DisplayList;

//onClick={()=>props.deleteItem(l.id)}
//