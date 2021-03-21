import './App.scss';
import React, {useState, useEffect} from 'react';
import Main from 'pages/Main';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Feed from 'pages/Feed';
import PostExpand from 'pages/PostExpand';
import CreatePost from 'pages/CreatePost';
import SavedList from 'pages/SavedList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route exact path='/SignUp'>
            <SignUp />
          </Route>

          <Route exact path='/Home'>
            <Home />
          </Route>
          <Route exact path='/Feed'>
            <Feed />
          </Route>
          <Route exact path='/CreatePost'>
            <CreatePost />
          </Route>
          <Route exact path='/PostExpand'>
            <PostExpand />
          </Route>
          <Route exact path='/SavedList'>
            <SavedList />
          </Route>
        </Switch>
      </div>
     </Router>

  );
}

export default App;