import React from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Input from 'comps/Input';
import Divider from 'comps/Divider';
import Button from 'comps/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const Login = () => {
    return <div className="pagebody">

            <div className="logo">
              <Heading1 text="Let's Breaddit!"/>
            </div>
  
          <div className="login_form">
              <Input placeholder="Username"/>
              <Input placeholder="Password"/>
              <Button text="Log in" width="100%"/>
          </div>
          <Divider />
    </div>
  }

  export default Login;