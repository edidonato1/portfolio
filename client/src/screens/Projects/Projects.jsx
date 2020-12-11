import React, { useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import ProjectsHome from '../../components/ProjectCards/ProjectsHome';
import SunsetOracle from '../../components/ProjectCards/SunsetOracle';
import PopsLiquorCabinet from '../../components/ProjectCards/PopsLiquorCabinet';
import Root from '../../components/ProjectCards/Root';
import CoLab from '../../components/ProjectCards/CoLab';
import StyledProjects from './StyledProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faFlask } from '@fortawesome/free-solid-svg-icons';
import '../../components/ProjectCards/Animations.css'


export default function Projects(props) {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('home');
  const { openBurger, setOpenBurger, mobile } = props;

  const handleClick = (project) => {
    setCurrentProject(project);
    if (mobile && open) {
      setOpen(false);
    }
}

  return (
    <div>
      <Layout openBurger={openBurger} setOpenBurger={setOpenBurger}>
        <StyledProjects openBurger={openBurger} setOpenBurger={setOpenBurger} open={open}>
          <div className="left-div" >
            <div className="left-div-child">
              <div className="projects-title-inline">
                <h1 className="left-div-title" onClick={() => setCurrentProject('home')}>projects</h1>
                <div className="icon-container" >
                  <FontAwesomeIcon
                    style={!open ? {} : { transform: "rotate(180deg)" }}
                    className="icon"
                    icon={faChevronCircleDown}
                    onClick={() => setOpen(!open)} />
                </div>
              </div>
              <ul className="drop-down">
                <li className="project-li" onClick={() => handleClick('colab')}>C o L <FontAwesomeIcon icon={faFlask} /> b</li>
                <li className="project-li" onClick={() => handleClick('root')}>ROOT</li>
                <li className="project-li" onClick={() => handleClick('pops')}>Pop's Liquor Cabinet</li>
                <li className="project-li" onClick={() => handleClick('sunset')} >Sunset Oracle</li>
              </ul>
            </div>
          </div>
          <div className="right-div" id="projects-right">
            {currentProject === 'home' ?
              <ProjectsHome
                mobile={mobile}
                currentProject={currentProject} /> : <> </>}
            {currentProject === 'sunset' ?
              <SunsetOracle
                mobile={mobile}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject} /> : <> </>}
            {currentProject === 'pops' ?
              <PopsLiquorCabinet
                mobile={mobile}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject} /> : <> </>}
            {currentProject === 'root' ?
              <Root
                mobile={mobile}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject} /> : <> </>}
            {currentProject === 'colab' ?
              <CoLab
                mobile={mobile}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject} /> : <> </>}
          </div>
        </StyledProjects>
      </Layout>
    </div>
  )
}