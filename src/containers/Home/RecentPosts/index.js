import React from 'react'
import Card from '../../../components/UI/Card'
import './style.css'


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  const post = props.data[0]
  return(
    <div style={props.style}>
    <Card style={{marginBottom:'20px'}}>
      {/* <div className="postImageWrapper">
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
      </div> */}
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span>{post.postedOn}{/* by {post.author} */}</span>
        </div>

        <div className="postImageContainer">
          <img src={require('../../../assets/blogPostImages/' + post.blogImage)} alt="Post Image" />
        </div>
        <div className="postContent">
          <h3>{post.BlogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </Card>
  </div>
   )
  }


export default RecentPosts