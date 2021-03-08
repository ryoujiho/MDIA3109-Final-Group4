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
          <Heading1 text="Let's Breaddit!"/>
          <div className="login_form">
            <Input />
            <Input />
            <Button text="Login" width="100%"/>
          </div>
          <Divider />
    </div>
  }

  export default Login;