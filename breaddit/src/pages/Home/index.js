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
    
    const [allPosts, setAllPosts] = useState([]);

    const HandlePosts = async() => {
        let resp = await axios.get("/api/posts");
        const home_post = resp.data.posts;
        setAllPosts(...[home_post])
        console.log("Response data post", home_post)
    }

    useEffect(()=> {
        HandlePosts()
    }, [])

    return <div className="pagebody">
                <Topbar pageName="Home" back={false} Hamicon="90%"/>
                <div className="post_list">
                    {allPosts.map(o=>{
                        return <Link to={
                                    { pathname: "/PostExpand", state:{o} }
                                    }
                                    onClick={()=>{
                                        window.scrollTo(0, 0);
                                    }}>
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

export default Home;