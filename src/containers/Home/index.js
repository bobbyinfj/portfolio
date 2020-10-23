import React from 'react';
import App from '../../App';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';

import blogData from '../../data/blog.json'
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const SideImage=props=>{
  return (
    <div style={{height:`${props.height}px`}}>
      <img src={props.src} alt=""/>
    </div>
  )
}

const ImageGallery = props=>(
  <div className="galleryPost" style={props.galleryStyle}>
    <section style={{width: props.largeWidth}}>
      <div className="mainImageWrapper">
        <Link to={`/post/${props.slugArray[1]}`}>
          <img src={require('../../assets/blogPostImages/'+props.imagesArray[1])} alt="" />
        </Link>
      </div>
    </section>
    <section className={"sideImageWrapper"} style={{width:props.smallWidth}}>
      {
        props.imagesArray.slice(2).map(image=>
          <SideImage key={props.id}
          height={props.sideImageHeight}
          src={require('../../assets/blogPostImages/' + image)}
          alt=""
          />
        )
      }
    </section>
  </div>
)

const Home = props=> {
  const galleryHeight= 450
  const galleryStyle={
    height:galleryHeight+'px',
    overflow:'hidden'
  }
  const sideImageHeight= galleryHeight/3 
  const imgAr = blogData.data.map(post=>post.blogImage)
  const slugAr = blogData.data.map(post=>post.slug)
  return (
    <>
      <Card>
        <ImageGallery key={props.id}
              largeWidth="70%"
              smallWidth="30%"
              sideImageHeight={sideImageHeight}
              galleryStyle={galleryStyle}
              imagesArray={imgAr}
              slugArray={slugAr}
            />
      </Card>
      <Layout>
        <RecentPosts data={blogData.data}/>
      </Layout>
    </>
    )
}

export default Home;