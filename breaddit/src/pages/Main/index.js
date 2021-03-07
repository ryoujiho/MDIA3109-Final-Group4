import React from 'react';
import Post from 'comps/Post';
import Topbar from 'comps/Topbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Main = () => {
    return <div className="main">
        <Topbar pageName="Home" back={false}/>
        <Post/>
    </div>
}

export default Main;