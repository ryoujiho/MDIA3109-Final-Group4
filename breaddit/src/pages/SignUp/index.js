import React from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Input from 'comps/Input';
import Button from 'comps/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const SignUp = () => {
    return <div className="pagebody">
        <div className="singup_form">
          <Heading1 />
          <Input />
          <Input />
          <Input />
          <Button text="Sign Up" />
        </div>
    </div>
  }

  export default SignUp;