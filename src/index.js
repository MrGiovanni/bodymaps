import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Dataset from './views/dataset'
import Model from './views/model'
import Leaderboard from './views/leaderboard'
import Team from './views/team'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Dataset} path="/dataset" />
        <Route component={Model} path="/model" />
        <Route component={Leaderboard} path="/leaderboard" />
        <Route component={Team} path="/team" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
