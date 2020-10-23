import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
      <Link to="/">Robert Nakano</Link>
    </div>
   )
  }


export default Logo