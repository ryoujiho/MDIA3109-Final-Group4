import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Main = () => {
    const history = useHistory();

    // Check for a token when the page loades
    // If a token exists redirect them to Home, otherwise stay

    const CheckToken = async() => {
        var token = await sessionStorage.getItem("token");
        console.log("Token : ", token)
        if(token) {
          axios.defaults.headers.common['Authorization'] = token;
          history.push("/Home");
        }
      }

    useEffect(()=> {
       CheckToken();
    }, [])

    return <div className="main">
        </div>
}

export default Main;