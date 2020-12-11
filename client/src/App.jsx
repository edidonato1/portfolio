import { useState } from 'react';
import Home from './screens/Home/Home';
import AboutMe from './screens/AboutMe/AboutMe';
import Contact from './screens/Contact/Contact';

import Test from './screens/Home/Test';

import Projects from './screens/Projects/Projects';
import Layout from './components/shared/Layout/Layout';
import { Route, Switch } from 'react-router-dom'

import './App.css'

function App() {
  const [home, setHome] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <Switch>
      <Route exact path="layoutlayout" >
        <Layout />
      </Route>
      <Route exact path="/" >
        <Home
          home={home}
          setHome={setHome}
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
      <Route path="/about">
        <AboutMe
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
      <Route path="/contact">
        <Contact
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
      <Route path="/projects" >
        <Projects
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
      <Route exact path="/Test" component={Test}/>
    </Switch>
  );
}

export default App;
