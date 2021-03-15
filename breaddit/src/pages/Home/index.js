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
  


const Home = () => {
    
    // Check if a token is expired or if there is a token a all
    // if not redirect back to Login Page
    // axios call to get all the posts
    // axios call to get My list
    // axios call to do other things with posts like create, update, etc.

    const [allPosts, setAllPosts] = useState([]);

    const HandlePosts = async() => {
        let resp = await axios.get("/api/posts");
        setAllPosts(...[resp.data.posts])
        console.log("response :", resp)
        console.log(resp.data)
    }


    useEffect(()=> {
        HandlePosts()
    }, [])

    return <div className="pagebody">
        <Topbar pageName="Home" back={true} Hamicon="90%"/>
            <div className="post_list">
                {allPosts.map(o=>{
                    return <Post
                            img={o.image_url}
                            userphoto={o.profile_photo}
                            username={o.username}
                            postdescription={o.description}
                            date={o.created}
                            comm_display={true}
                        />
                })}
            </div>
        </div>
}

export default Home;