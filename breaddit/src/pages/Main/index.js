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
    return <div>
        This is main
        <Topbar/>
        <Post/>
    </div>
}

export default Main;