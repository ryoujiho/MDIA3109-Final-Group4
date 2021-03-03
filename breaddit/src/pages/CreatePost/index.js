import React from 'react';
import Topbar from 'comps/Topbar';
import Description from 'comps/Description';
import Upload from 'comps/Upload';
import Userpic from 'comps/Profile/Userpic';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const CreatePost = () => {
    return <div className="pagebody">
        <Topbar pageName="Create Post"/>
        <Userpic></Userpic>
        <Upload></Upload>
        <Description></Description>
    </div>
  }

  export default CreatePost;