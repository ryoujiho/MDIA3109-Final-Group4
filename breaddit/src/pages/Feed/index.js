import React, {useState, useEffect} from 'react';
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

    const [user, setUser] = useState("");

    const CheckToken = async () => {
      const resp = await axios.post("/api/verify");
      console.log(resp.data);
      if(resp.data !== "no token sent to server" || "Invalid Token") {
          setUser(resp.data)
      }
  }

  useEffect(()=> {
      CheckToken();
  }, [])

    return <div className="pagebody">
      
        <Topbar pageName="Profile/Feed" back={true} Hamicon="90%"/>
        <div className="userinfo">
          <Userpic />
          <Userinfo username={user.username}/>
        </div>
        <Post/>
        
    </div>
  }

  export default Feed;