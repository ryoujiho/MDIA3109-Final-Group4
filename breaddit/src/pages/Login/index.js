import React, {useState, useEffect} from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Input from 'comps/Input';
import Divider from 'comps/Divider';
import Button from 'comps/Button';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
// let token = null;


  const Login = () => {

    /* 
      Use an axios call to check if username and password exists in the db (SELECT)
      Server will reutrn a token if it exists and store it in the storage
      Connect token with axios header
      Otherwise it will show error
    */

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const [error, setError] = useState(null);
    const history = useHistory();

    /*
     Check for a token when the page loades 
     If a token exists redirect them to Home
     Otherwise it stays
    */

    const CheckToken = async() => {
        var token = await sessionStorage.getItem("token");
        console.log("Token : ", token)
        if(token) {
          axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
          history.push("/Home");
        }
      }

    const CheckStorage = async() => {
      var token = await sessionStorage.getItem("token");
      if(token) {
        axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
        var resp = await axios.get("/api/verify");
        console.log("verification", resp.data);
      }
    }

    const Auth = async () => {
        var resp = await axios.post("/api/users/login" , {
          username:username,
          password:pass
        });
        if (resp.data !== "Something went wrong") {
          const token = resp.data.accessToken
          sessionStorage.setItem("token", token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          history.push("/Home")
        }
        // else what
    }

    const Restricted = async() => {
      var resp2 = await axios.post("/api/verify" ,{
        What:"Testttt"
      })

      console.log("Restricted : ", resp2.data)
    } 
    useEffect(()=> {
      CheckToken();
    }, [])

    return <div className="pagebody">
            <div className="logo">
              <Heading1 text="Let's Breaddit!"/>
            </div>
  
          <div className="login_form">
              <Input placeholder="Username" catchInput={(e) => 
                setUsername(e.target.value)}/>
              <Input placeholder="Password" type="password" catchInput={(e) => 
                setPass(e.target.value)}/>
              <Button text="Log in" width="100%" onClick={Auth}/>
          </div>
          <div>
            {error}
          </div>
          <Divider />
    </div>
  }

  export default Login;