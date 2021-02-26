import React from 'react';
import Topbar from 'comps/Topbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const CreatePost = () => {
    return <div className="pagebody">
        <Topbar pageName="Create Post"/>
    </div>
  }

  export default CreatePost;