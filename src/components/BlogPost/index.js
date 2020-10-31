import React, {useState, useEffect} from 'react'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'
import { Link } from 'react-router-dom'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
    const [post, setPost] = useState({
      id: "",
      blogCategory:  "",
      blogTitle: "",
      slug: "",
      postedOn: "",
      author: "",
      blogImage: "",
      blogText: ""
    })
    const [slug, setSlug] = useState('')

    useEffect(()=>{
      const slug = props.match.params.slug
      const post = blogPost.data.find(post=>post.slug==slug)
      setPost(post)
      setSlug(slug)
    }, [post, props.match.params.slug])


    if(post.blogImage=="") return null

  return(
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
  <span>posted on {post.postedOn}{/*by {post.author} */}</span>
        </div>

        <div className="postImageContainer">
          <img src={require('../../assets/blogPostImages/' + post.blogImage)} alt="Post Image" />
        </div>
        <div className="postContent">
          <h3>{post.BlogTitle}</h3>
          <p><i>Abstract</i>: {post.abstract}</p>
          <p><i>Methods</i>: {post.methods}</p>
          { post.slides &&
            <p>Slides: <Link to={require(`../../assets/slides/${post.slides}`)} target="_blank" download>{post.slides}</Link></p>
          }
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
   )
  }


export default BlogPost