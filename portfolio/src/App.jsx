import React from 'react'
import Home from './screens/Home/Home'
import AboutMe from './screens/AboutMe/AboutMe'
import Contact from './screens/Contact/Contact'
import Projects from './screens/Projects/Projects'
import { Route, Switch } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
}

export default App;
