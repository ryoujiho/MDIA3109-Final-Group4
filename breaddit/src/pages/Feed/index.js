import React from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';
import Userpic from 'comps/Profile/Userpic';
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
        <div className="userinfo">
          <Userpic />
          <Userinfo />
        </div>
        <Post/>
        
    </div>
  }

  export default Feed;