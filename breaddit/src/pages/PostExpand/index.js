import React, {useEffect, useState} from 'react';
import Topbar from 'comps/Topbar';
import Post from 'comps/Post';
import Comment from 'comps/Comment';
import CommInput from 'comps/CommInput';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const PostExpand = () => {

  const [comments, setComments] = useState([]);
  const [newComment, setNewcomment] = useState("");
  const [user, setUser] = useState("");
  
  const history = useHistory();

  const HandleComments = async() => {
    let resp = await axios.get(`/api/comments/${detail.id}`);
    setComments(...[resp.data])
    console.log("Post id and Comments", comments)
}

const LeaveComment = async() => {
  let resp = await axios.post(`/api/comments/${detail.id}`, {
    comment_text : newComment
  });
  console.log(resp.data)
  HandleComments()
}

const CheckToken = async () => {
  const resp = await axios.post("/api/verify");
  console.log(resp.data);
  if(resp.data !== "no token sent to server" || "Invalid Token") {
      setUser(resp.data)
  }
}

useEffect(()=> {
    HandleComments();
    CheckToken();
}, [])

let location = useLocation();

var detail = location.state.o;
const [id, setId] = useState(detail.id)

const HandleDelete = async(id) => {
  let resp = await axios.delete(`/api/posts/${id}`);
  console.log(resp);
  history.push("/Feed")
}

return <div className="post-expand">
          <Topbar pageName=" " back={true} Hamicon="90%"/>

          <div className="post-detail">
            <div className="delete">
              {user.userId === detail.writer_id ?
                <button onClick={()=>
                  HandleDelete(id)
                }
                >Delete</button>
                :
                ""  
              }
            </div>
            <Post 
              bgColor={false}
              userphoto={detail.profile_photo}
              img={detail.image_url}
              username={detail.username}
              postdescription={detail.description}
              date={detail.created}
              display={false}
              />
              
              <div className="comments">
                {comments && comments.map(o=> {
                  return  <Comment 
                          bgColor="#fff" 
                          writerphoto={o.profile_photo}
                          username={o.username}
                          commentdescription={o.comment_text}
                          date={o.created}
                          />
                          })} 
              </div>
          </div>

          <div className="comment-input">
            <CommInput 
            userphoto={user.profile_photo}
            onChange={(e)=>{
              setNewcomment(e.target.value)
            }}
            onClick={LeaveComment}
            />
          </div>
      </div>
}

export default PostExpand;