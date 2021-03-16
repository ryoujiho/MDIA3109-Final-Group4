import React, {useState} from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Input from 'comps/Input';
import Button from 'comps/Button';
import TopBar from 'comps/Topbar';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const HandleSignUp = async()=> {
    const resp = await axios.post('/api/users', {username:username, password:pass});
    console.log(resp);
    history.push("/Login")
  }

  return <div className="pagebody">
            <TopBar back="90%" pageName=" " onClick={()=>{
                        history.push("/Login")
            }}/>

            <div className="logo">
            <Heading1 text="Bread Up!"/>
            </div>

            <div className="singup_form">
              <Input placeholder="Username" type="text" catchInput={(e) => 
                    setUsername(e.target.value)}/>
              <Input placeholder="Password" type="password" catchInput={(e) => 
                    setPass(e.target.value)}/>
              <Button text="Sign Up" bgcolor="#92BFB1" width="100%" onClick={(HandleSignUp)}/>
            </div>
          </div>
  }


  export default SignUp;