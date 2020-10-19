import React from 'react'
import Sidebar from '../Sidebar'
import './style.css'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <React.Fragment>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <div>
        <h1>THIS IS FOOTER FOR ALL PAGES</h1>
      </div>
    </React.Fragment>
   )
  }


export default Layout