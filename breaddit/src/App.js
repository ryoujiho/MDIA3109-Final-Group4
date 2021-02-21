import './App.scss';
import Main from 'pages/Main';
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
import Post from 'comps/Post';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/Main' exact component={Main}/>
          <Route path='/Login' exact component={Login}/>
          <Route path='/SignUp' exact component={SignUp}/>
          <Route path='/feed' exact component={Feed}/>
          <Route path='/PostExpand' exact component={PostExpand}/>
          <Route path='/CreatePost' exact component={CreatePost}/>
          <Route path='/SavedList' exact component={SavedList}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;