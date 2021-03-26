import React, {useState} from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Upload from 'comps/Upload';
import Input from 'comps/Input';
import Button from 'comps/Button';
import TopBar from 'comps/Topbar';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [file, setFile] = useState();

  const HandleSignUp = async event=> {
    event.preventDefault()

    const data = new FormData()
    data.append('image', file)
    data.append('username', username)
    data.append('password', pass)

    const resp = await axios.post('/api/users', data);
    console.log(resp);
    alert("Welcome to Breaddit!")
    history.push("/Login")
  }

  return <div className="pagebody">
            <TopBar 
              back="90%" pageName=" " 
              onClick={()=>{
              history.push("/Login")}}
            />

            <div className="logo_signup">
            <img src="/Breaddit.png"/>
              <Heading1 text="Bread Up!"/>
            </div>

            <form className="singup_form" onSubmit={HandleSignUp}>
              <Upload 
                filename={file} onChange={(e) =>
                setFile(e.target.files[0])}
              />
              <Input placeholder="Username" type="text" catchInput={(e) => 
                    setUsername(e.target.value)}
              />
              <Input placeholder="Password" type="password" catchInput={(e) => 
                    setPass(e.target.value)}
              />
              <Button type="submit" text="Sign Up" bgcolor="#92BFB1" width="100%"/>
            </form>
        </div>
  }

  export default SignUp;