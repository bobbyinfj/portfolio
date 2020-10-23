import React from 'react'
import Layout from '../../components/Layout'
import data from '../../data/blog.json'
import { NavLink } from 'react-router-dom'
import Card from '../../components/UI/Card'
/**
* @author
* @function Posts
**/

const Posts = (props) => {
  const postObject = data.data
  return(
    <Layout>
      <div className="main">
        {postObject.map(post => {
         return(
          <Card key={post.id}>       
            <NavLink key={post.id} to={`/post/${post.slug}`}>
              <div className="recentPost">
                <h3>{post.blogTitle}</h3>
                <span>{post.postedOn}</span>
                <h4>{post.blogCategory}</h4>
                <div><strong>Abstract</strong>: {post.abstract}</div>
            <div><strong>Methods</strong>: {post.methods}</div>
            <img className="postImage" src={require(`../../assets/blogPostImages/${post.blogImage}`)} alt={`${post.blogImage}`}/>
            <div>{post.blogText.substring(0,160)}...</div>
              </div>
            </NavLink>
          </Card>
         )
        }
        )
      }  
      </div>
    </Layout>

   )
  }


export default Posts