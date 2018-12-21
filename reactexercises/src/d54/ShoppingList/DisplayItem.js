import React from 'react'

const DisplayItem = (props) => {
    return(
        <div>          
            The Item will be displayed here {props.match.params.id} 
            {props.list}   
                
        </div>            
        )
    }

export default DisplayItem;

//   
//  {list}