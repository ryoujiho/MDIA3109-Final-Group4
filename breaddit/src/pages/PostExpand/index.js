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
  

  const PostExpand = () => {
    return <div className="post-expand">
          <Topbar pageName=" "/>
          <div className="post-detail">
            <Post />
          </div>
          <Comment bgColor="#fff"/>
          <div className="comment-input">
            <CommInput/>
          </div>
        </div>
  }

  export default PostExpand;