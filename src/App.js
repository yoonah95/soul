import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import Main from "./components/main"
import Register from "./components/register"
import List from "./components/list"
import Group from "./components/group"
import Login from "./components/login"

import GroupMake from "./components/groupMake"
import GroupList from "./components/groupList"
import GroupInvite from "./components/groupInvite"
import GroupSuccess from "./components/groupSuccess"

import Profile from "./components/profile"
import Editprofile from "./components/editprofile"
import Join from "./components/join"
import Success from "./components/success"
import createPenalty from "./components/createPenalty"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/register" component={Register} />
          <Route path="/list" component={List} />
          <Route path="/group" component={Group} />
          <Route path="/login" component={Login} />

          <Route path="/ll" component={GroupMake} />
          <Route path="/lll" component={GroupList} />
          <Route path="/llll" component={GroupInvite} />
          <Route path="/lllii" component={GroupSuccess} />

          <Route path="/profile" component={Profile} />
          <Route path="/editprofile" component={Editprofile} />
          <Route path="/join" component={Join} />
          <Route path="/success" component={Success} />
          <Route path="/createPenalty" component={createPenalty} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
