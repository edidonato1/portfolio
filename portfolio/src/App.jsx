import { useState } from 'react'
import Home from './screens/Home/Home'
import AboutMe from './screens/AboutMe/AboutMe'
import Contact from './screens/Contact/Contact'
import Projects from './screens/Projects/Projects'
import { Route, Switch } from 'react-router-dom'

import './App.css'

function App() {
  const [home, setHome] = useState(false);

  return (
    <Switch>
      <Route exact path="/" >
        <Home home={home} setHome={setHome} />
      </Route>
      <Route path="/about">
        <AboutMe />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route >
        <Projects />
      </Route>
    </Switch>
  );
}

export default App;
