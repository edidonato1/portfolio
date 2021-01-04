import { useState, useEffect } from 'react';
import Home from './screens/Home/Home';
import AboutMe from './screens/AboutMe/AboutMe';
import Contact from './screens/Contact/Contact';
import Projects from './screens/Projects/Projects';
import Layout from './components/shared/Layout/Layout';
import { Route, Switch } from 'react-router-dom';


import './App.css'

function App() {
  const [home, setHome] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [showSkills, setShowSkills] = useState(false);


  const handler = () => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false);
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);
    return () =>
      window.removeEventListener("resize", handler);
  }, []);

  return (
    <Switch>
      <Route exact path="layoutlayout" >
        <Layout />
      </Route>
      <Route exact path="/" >
        <Home
          mobile={mobile}
          home={home}
          setHome={setHome}
          showSkills={showSkills} 
          setShowSkills={setShowSkills}
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
      <Route path="/about">
        <AboutMe
          mobile={mobile}
          showSkills={showSkills} 
          setShowSkills={setShowSkills}
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
      <Route path="/contact">
        <Contact
          mobile={mobile}
          showSkills={showSkills} 
          setShowSkills={setShowSkills}
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
      <Route path="/projects" >
        <Projects
          mobile={mobile}
          showSkills={showSkills} 
          setShowSkills={setShowSkills}
          openBurger={openBurger}
          setOpenBurger={setOpenBurger} />
      </Route>
    </Switch>
  );
}

export default App;
