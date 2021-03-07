import React from 'react';
import Topbar from 'comps/Topbar';
import Description from 'comps/Description';
import Upload from 'comps/Upload';
import Userpic from 'comps/Profile/Userpic';
import Heading2 from 'comps/Headings/Heading2';
import Button from 'comps/Button';
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
        <div className="postform">
          <Heading2/>
          <Upload></Upload>
          <Heading2/>
          <Description></Description>
        </div>
        <Button text="Post It!" width="82%"/>
    </div>
  }

  export default CreatePost;