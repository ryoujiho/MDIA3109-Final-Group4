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
  const [myposts, setMyposts] = useState([]);

  const HandleMyPosts = async() => {
      let resp = await axios.get("/api/mypost");
      setMyposts(...[resp.data.id])
      console.log("response :", resp)
  }

  const CheckToken = async () => {
    const resp = await axios.post("/api/verify");
    console.log(resp.data);
    if(resp.data !== "no token sent to server" || "Invalid Token") {
        setUser(resp.data)
    }
  }

  useEffect(()=> {
      HandleMyPosts()
      CheckToken();
  }, [])

return <div className="pagebody">

        <Topbar pageName="My Feed" back={true} Hamicon="90%"/>

        <div className="userinfo">
          <Userpic userphoto={user.profile_photo}/>
          <Userinfo username={user.username} usertime={user.created}/>
        </div>
        
        <div className="post_list">
            {myposts && myposts.map(o=>{
              return <Link to={{ pathname: "/PostExpand", state:{o} }}>
                        <Post
                          img={o.image_url}
                          userphoto={o.profile_photo}
                          username={o.username}
                          postdescription={o.description}
                          date={o.created}
                        />
                      </Link>
            })}

        </div>
    
      </div>
  }

  export default Feed;