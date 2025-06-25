import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import VirtualAssistants from './views/virtual-assistants'
import Advisory from './views/advisory'
import Contact from './views/contact'
import Consultants from './views/consultants'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={VirtualAssistants} exact path="/virtual-assistants" />
        <Route component={Advisory} exact path="/advisory" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Consultants} exact path="/consultants" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
