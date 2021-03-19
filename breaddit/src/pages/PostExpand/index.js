import React, {useEffect, useState} from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';
import Comment from 'comps/Comment';
import CommInput from 'comps/CommInput';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
  

  const PostExpand = (props) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewcomment] = useState("");

    const HandleComments = async() => {
      let resp = await axios.get(`/api/comments/${location.state.o.id}`);
      setComments(...[resp.data])
      console.log(resp.data)
      console.log("Post and Comments", comments)
  }

  const LeaveComment = async() => {
    let resp = await axios.post(`/api/comments/${location.state.o.id}`, {
      comment_text : newComment
    });
    console.log(resp.data)
    HandleComments()
  }

  useEffect(()=> {
      HandleComments()
  }, [])



     let location = useLocation();
     console.log(location)

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
                    {comments && comments.map(o=> {
                      return  <Comment 
                              bgColor="#fff" 
                              username={o.username}
                              commentdescription={o.comment_text}
                              />
                              })} 
                  </div>
              </div>

              <div className="comment-input">
                <CommInput onChange={(e)=>{
                  setNewcomment(e.target.value)
                }}
                onClick={LeaveComment}
                />
              </div>

          </div>
  }

  export default PostExpand;