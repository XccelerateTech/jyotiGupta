import React from 'react';
import faker from '../../../node_modules/faker';

const CommentCard = (props)=> {
    let style = {
        maxWidth: '18rem'
    }
    return(
        <div className="ui card" style={style}>
        <div className="image"><img src = {faker.image.avatar()} alt="img"></img>
        <h3 className="header">{props.author} </h3>
        </div>
        <div className="content">     
            
            <p className="description"> Today at {props.date}</p>
            <p className="description">{props.comment}</p>
        </div>
        </div>
    )
}

export default CommentCard;