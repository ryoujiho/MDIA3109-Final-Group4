import React, {useState} from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Input from 'comps/Input';
import TopBar from 'comps/Topbar';
import Button from 'comps/Button';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const SignUp = () => {
    const history = useHistory();
    
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const HandleSignUp = async()=> {
      const resp = await axios.post('/api/users', {username:username, password:pass});
      console.log(resp);
      history.push("/Login")
    }

    // Use an axios call to check to the server to create a username and password
    // if created, a token will get sent over
    // and store in the axios the token and redirect to login page
    
    return <div className="pagebody">
      <TopBar back="90%" pageName=""/>
          <div className="logo">
          <Heading1 text="Bread Up!"/>
          </div>
          <div className="signup_form">
          <Input type="text" placeholder="Username" catchInput={(e) => 
                setUsername(e.target.value)}/>
          <Input type="password" placeholder="Password" catchInput={(e) => 
                setPass(e.target.value)}/>
      
          {/* <Input /> */}
          <Button text="Sign Up" bgcolor="#92BFB1" width="100%" onClick={(HandleSignUp)}/>
          </div>
        </div>
  }

  export default SignUp;