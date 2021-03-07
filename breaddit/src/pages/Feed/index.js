import React from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';

import Userinfo from 'comps/Profile/Userinfo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const Feed = () => {
    return <div className="pagebody">
      
        <Topbar pageName="Profile/Feed"/>
        <Userinfo></Userinfo>
        <Post/>
        
    </div>
  }

  export default Feed;