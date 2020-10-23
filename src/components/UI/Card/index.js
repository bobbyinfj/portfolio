import React from 'react'
/**
* @author
* @function 
**/

const Card = (props) => {
  return(
    <div className="card" {...props}>
      {props.children}
    </div>
   )

 }

export default Card