import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Button from 'comps/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Main = () => {
    const history = useHistory();

    // Check for a token when the page loades -> useEffect
    // If a token exists redirect them to Home
    // Otherwise stay

    const CheckToken = async() => {
        var token = await sessionStorage.getItem("token");
        console.log("Token : ", token)
        if(token) {
          axios.defaults.headers.common['Authorization'] = token;
          history.push("/Home");
        }
      }

    useEffect(()=> {
       //when the page loads do this  
       CheckToken();
    }, [])

    return <div className="main">
        <Button onClick={()=>history.push("/Login")} text="Login"/>
        <Button onClick={()=>history.push("/SignUp")} text="Sign Up"/>
        {/* <Topbar pageName=" " back={true} Hamicon="90%"/> */}

         

        </div>
}

export default Main;