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
  const [showPineapple, setShowPineapple] = useState(false);

  const handler = () => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false);
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);
    return () =>
      window.removeEventListener("resize", handler);
  }, []);

  // const loadingBar = () => {
  //   setLoad(true);
  //   setTimeout((() => setLoad(false)), 1900)
  // }

  return (
    <Layout
      mobile={mobile}
      home={home}
      setHome={setHome}
      showSkills={showSkills}
      setShowSkills={setShowSkills}
      openBurger={openBurger}
      setOpenBurger={setOpenBurger}
      showPineapple={showPineapple}
      setShowPineapple={setShowPineapple} >
      <Switch>
        <Route exact path="/" >
          <Home
            showPineapple={showPineapple}
            setShowPineapple={setShowPineapple}
            mobile={mobile}
            home={home}
            setHome={setHome}
            showSkills={showSkills}
            setShowSkills={setShowSkills}
            openBurger={openBurger} />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects" >
          <Projects
            mobile={mobile}
            openBurger={openBurger} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
