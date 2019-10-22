import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import Main from "./components/main"
import Register from "./components/register"
import List from "./components/list"
import Group from "./components/group"
import Login from "./components/login"

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
        </Switch>
      </Router>
    </div>
  )
}

export default App
