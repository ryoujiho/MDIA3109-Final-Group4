import React from 'react';
import Topbar from 'comps/Topbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  const SavedList = () => {
    return <div className="pagebody">
        <Topbar pageName="Saved List"/>
    </div>
  }

  export default SavedList;