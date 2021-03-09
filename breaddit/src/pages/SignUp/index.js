import React from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Input from 'comps/Input';
import Button from 'comps/Button';
import TopBar from 'comps/Topbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const SignUp = () => {
    return <div className="pagebody">
      <TopBar back="90%"/>
        <div className="singup_form">
          <Heading1 text="Bread Up!"/>
          <Input />
          <Input />
          <Input />
          <Button text="Sign Up" bgcolor="#92BFB1" width="100%"/>
        </div>
    </div>
  }

  export default SignUp;