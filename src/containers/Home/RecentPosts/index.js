import React from 'react'
import Card from '../../../components/UI/Card'
import './style.css'


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
    <Card style={{marginBottom:'20px'}}>
      <div className="postImageWrapper">
        <img src="https://i.redd.it/ill1zkep4vm01.png" />
      </div>
      <div style={{textAlign:'center'}}>
        <span>
          Featured
        </span>
        <h2>
          Fitness Mantra to Live Fit Life
        </h2>
        <span>
          posted on July 21, 2016 by Sora Blogging Tips
        </span>
        <p>
          Lorem ipsum. Blah, blah blah.
        </p>
        <button>Read Now</button> 
      </div>
    </Card>
  </div>
   )
  }


export default RecentPosts