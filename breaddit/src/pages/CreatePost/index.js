import React, {useState, useEffect} from 'react';
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
  import axios from 'axios';
  import {useHistory} from 'react-router-dom';
  

  const CreatePost = () => {
    const [user, setUser] = useState("");
    const [file, setFile] = useState();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState()

    const submit = async event => {
      event.preventDefault()

      const formData = new FormData()
      formData.append("image", file)
      formData.append("description", description)

      const result = await axios.post('/api/posts', formData, {headers: {
        'Content-Type': 'multipart/form-data'
      }})
      console.log(result.data)
      setImage(result.data.imagePath)
      
    }

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
        <Topbar pageName="Create Post"/>
        <Userpic username={user.profile_photo}/>
        
        <form className="postform" onSubmit={submit}>
          <Heading2 text="Pick a Photo"/>
          
          <Upload filename={file} onChange={(e) =>
            setFile(e.target.files[0])
          }/>

          <Heading2 text="Add a Description"/>
          
          <Description onChange={(e) => 
            setDescription(e.target.value)}/>
        
        <Button text="Post It!" width="100%" type="submit" onClick={submit}/>
        </form>
          {/* {imagePath && <img src={imagePath} />} */}
    </div>
  }

  export default CreatePost;