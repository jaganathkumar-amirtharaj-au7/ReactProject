
import './App.css';
import Login from "./Login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Register from './Register';
import HomeHeader from './HomeHeader';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import Sidebar from "./Sidebar"
import Sidebar2 from "./Sidebar2"
import Posts from './Posts';
import Profile from "./Profile.js"
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      }
      else {
        setUser(false)
      }
    })
  },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/:username/:uid">
              <HomeHeader user={user} />
              <Profile user={user} />
            </Route>
          <Route exact path="/">
            <HomeHeader user={user} selected />
          <div className="app__page">
                <Sidebar user={user} />
                <div className="app__posts">
                  <Posts user={user} />
                </div>
                <Sidebar2 />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
