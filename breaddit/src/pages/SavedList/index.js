import React from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const SavedList = () => {
    return <div className="pagebody">
        <Topbar pageName="Saved List"/>
        <Post/>
    </div>
  }

  export default SavedList;