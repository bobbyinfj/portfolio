import React from 'react'
import { useSearch, useSearchUpdate, searchStyles } from '../../../components/Search/SearchContext.js'
import Card from '../../../components/UI/Card'


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  const post = props.data[0]

  const darkTheme = useSearch()
  const toggleSearch = useSearchUpdate()
  const searchStyles = {
    backgroundColor: darkTheme ? 'pink': 'blue'
  }
  return(
    <div className="main">
    <Card style={{marginBottom:'20px'}}>
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
          <p>{post.abstract}</p>
        </div>
      </Card>
    </Card>
    <div className='search-test' style={searchStyles}>
      <button onClick={toggleSearch}>Toggle Search</button>
    </div>
  </div>
   )
  }


export default RecentPosts