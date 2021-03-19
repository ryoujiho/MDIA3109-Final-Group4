import React, {useEffect, useState} from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';
import Comment from 'comps/Comment';
import CommInput from 'comps/CommInput';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
  

  const PostExpand = (props) => {
    const [user, setUser] = useState("");
    const [comments, setComments] = useState([]);

    const HandleComments = async() => {
      let resp = await axios.get("/api/comments");
      setComments(...[resp.data.posts])
      console.log("Comments...?", resp.data)
      console.log("Post and Comments", comments)
  }

  useEffect(()=> {
      HandleComments()
  }, [])

    const CheckToken = async () => {
      const resp = await axios.post("/api/verify");
      console.log(resp.data);
      if(resp.data !== "no token sent to server" || "Invalid Token") {
          setUser(resp.data)
      }
    }

     let location = useLocation();
     console.log(location)

    useEffect(()=> {
      HandleComments()
      CheckToken();
  }, [])


    return <div className="post-expand">
              <Topbar pageName=" " back={true} Hamicon="90%"/>

              <div className="post-detail">
                <Post 
                  bgColor={false}
                  userphoto={location.state.o.profile_photo}
                  img={location.state.o.image_url}
                  username={location.state.o.username}
                  postdescription={location.state.o.description}
                  date={location.state.o.created}
                  display={false}
                  />
                  <div className="comments">
                  {/* {comments && comments.map(o=> {
                    return   */}
                    <Comment 
                            bgColor="#fff" 
                            // username={o.username}
                            />
                  {/* })} */}
                  </div>
              </div>

              <div className="comment-input">
                <CommInput/>
              </div>

          </div>
  }

  export default PostExpand;