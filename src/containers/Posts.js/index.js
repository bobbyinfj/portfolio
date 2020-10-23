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
              </div>
            </NavLink>
            <div>{post.methods}</div>
            <div>{post.abstract}</div>
            <img className="postImage" src={require(`../../assets/blogPostImages/${post.blogImage}`)} alt={`${post.blogImage}`}/>
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