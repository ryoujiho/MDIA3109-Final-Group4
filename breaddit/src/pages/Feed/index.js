import React, {useEffect} from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';
import Userpic from 'comps/Profile/Userpic';
import Userinfo from 'comps/Profile/Userinfo';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const Feed = () => {
    
    const CheckToken = async () => {
      const resp = await axios.get("/api/user/me");
      console.log(resp);
    }

    useEffect(()=> {
      CheckToken();
    }, [])

    return <div className="pagebody">
      
        <Topbar pageName="Profile/Feed" back={true} Hamicon="90%"/>
        <div className="userinfo">
          <Userpic />
          <Userinfo />
        </div>
        <Post/>
        
    </div>
  }

  export default Feed;