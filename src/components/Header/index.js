import React from 'react'
import Navbar from '../Navbar'
import './style.css'
/**
* @author
* @function 
**/

const Header = (props) => {
  return(
    <header className="header">
    <Navbar />
      {/* <div>
        social media links
      </div> */}
    </header>
   )

 }

export default Header