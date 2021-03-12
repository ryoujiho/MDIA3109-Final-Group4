import React from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';
import Comment from 'comps/Comment';
import CommInput from 'comps/CommInput';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const PostExpand = (props) => {

    var post_detail = props.location.state.o;
    console.log("post_detail : ", post_detail)

    return <div className="post-expand">
              <Topbar pageName=" " back={true} Hamicon="90%"/>

              <div className="post-detail">
                <Post 
                  bgColor={false}
                  img={post_detail.image_url}
                  username={post_detail.username}
                  postdescription={post_detail.description}
                  date={post_detail.created}
                  
                  comm_display="none"
                  />
                  <Comment bgColor="#fff"/>
              </div>



              <div className="comment-input">
                <CommInput/>
              </div>

          </div>
  }

  export default PostExpand;