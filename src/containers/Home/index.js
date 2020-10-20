import React from 'react';
import App from '../../App';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';
import './style.css';

import blogData from '../../data/blog.json'
import Layout from '../../components/Layout';

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
        <img src={require('../../assets/blogPostImages/'+props.imagesArray[1])} alt="" />
      </div>
    </section>
    <section className={"sideImageWrapper"} style={{width:props.smallWidth}}>
      {
        props.imagesArray.slice(2).map(image=>
          <SideImage 
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
  return (
    <div>
      <Card>
        <ImageGallery
              largeWidth="70%"
              smallWidth="30%"
              sideImageHeight={sideImageHeight}
              galleryStyle={galleryStyle}
              imagesArray={imgAr}
            />
      </Card>
      <Layout>
        <RecentPosts style={{width:'70%'}} data={blogData.data}/>
      </Layout>
    </div>
    )
}

export default Home;