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
        { post.slides &&
            <div className="slides"><strong>Slides</strong>: <Link to={require(`../../assets/slides/${post.slides}`)} target="_blank" download>{post.slides.substr(post.slides.lastIndexOf('.') + 1)}</Link></div>
          }
          <h3>{post.BlogTitle}</h3>
          <p><strong><i>Abstract</i></strong>: {post.abstract}</p>
          <p><strong><i>Methods</i></strong>: {post.methods}</p>
          <p><strong><i>Text</i></strong>: {post.blogText}</p>
        </div>
      </Card>
    </div>
   )
  }


export default BlogPost