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
import * as network from 'network.js'

function App() {
  // const [user, setUser] = useState()

  // const login = async ({username, password}) => {
  //   const data = await network.login({username, password})
  //   console.log(data)
  //   setUser(data)
  // }

  // const signup = async ({username, password}) => {
  //   const data = await network.signup({username, password})
  //   console.log(data)
  //   setUser(data)
  // }

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

          {/* <Route path='/Login' exact component={Login}/>
          <Route path='/Main' exact component={Main}/>
          <Route path='/Login' exact component={Login}/>
          <Route path='/SignUp' exact component={SignUp}/>
          <Route path='/feed' exact component={Feed}/>
          <Route path='/PostExpand' exact component={PostExpand}/>
          <Route path='/CreatePost' exact component={CreatePost}/>
          <Route path='/SavedList' exact component={SavedList}/> */}
        </Switch>
      </div>
     </Router>

  );
}

export default App;