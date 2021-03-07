import React, {useState, useEffect} from 'react';
import Post from 'comps/Post';
import Topbar from 'comps/Topbar';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Main = () => {

    const [allPosts, setAllPosts] = useState([]);

    const HandlePosts = async() => {
        let resp = await axios.get("/api/posts");
        setAllPosts(...[resp.data.posts])
        console.log(allPosts)
    }

    useEffect(()=> {
        HandlePosts()
    }, [])

    return <div className="main">
        <Topbar pageName="Home" back={false}/>
        {allPosts.map(o=>{
            return <Post
                img={o.image_url}
                postdescription={o.description}
                date={o.created}
        
            />
        })}

    </div>
}

export default Main;