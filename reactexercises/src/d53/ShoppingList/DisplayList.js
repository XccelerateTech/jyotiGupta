import React from 'react';

const DisplayList = (props)=> {
    const listItems = props.list.map(l=>
        <div className="item" key={l.id} onClick={()=>props.deleteItem(l.id)}>{l.item}</div>)
    return(
        <div>
            <h1> {props.name}'s Shopping List</h1>
            <div className="ui celled list">
                {listItems}
            </div>
        </div>
    )
}

export default DisplayList;