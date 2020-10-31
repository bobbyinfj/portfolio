import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Search from '../Search'
import './style.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const[search, setSearch]=useState(false)

  const submitSearch=(e)=> {
    e.preventDefault()
    alert('Searched')
  }

  const openSearch=()=>{
    setSearch(true)
  }

  const searchClass= search?'searchinput active':'searchinput'
    
  return(
    <div className="navbar">
      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/about-us">About Us</NavLink></li> */}
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Search {...props}/>
    </div>
   )
  }


export default Navbar