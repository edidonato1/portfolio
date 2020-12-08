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




export default function Projects() {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('home')

  return (
    <div>
      <Layout>
        <StyledProjects open={open}>

          <div className="left-div" >
            <div className="left-div-child">
              <div className="projects-title-inline">
                <h1 className="left-div-title" onClick={() => setCurrentProject('home')}>projects</h1>
                <div className="icon-container" >
                  <FontAwesomeIcon
                    style={!open ? {} : { transform: "rotate(180deg)" }}
                    className={open ? "icon" : "icon pulse"}
                    icon={faChevronCircleDown}
                    onClick={() => setOpen(!open)} />
                </div>
              </div>
              <ul className="drop-down">
                <li className="project-li" onClick={() => setCurrentProject('colab')}>C o L <FontAwesomeIcon icon={faFlask} /> b</li>
                <li className="project-li" onClick={() => setCurrentProject('root')}>ROOT</li>
                <li className="project-li" onClick={() => setCurrentProject('pops')}>Pop's Liquor Cabinet</li>
                <li className="project-li" onClick={() => setCurrentProject('sunset')} >Sunset Oracle</li>
              </ul>
            </div>
          </div>
          <div className="right-div" id="projects-right">
            {currentProject === 'home' ? <ProjectsHome /> : <> </>}
            {currentProject === 'sunset' ? <SunsetOracle setCurrentProject={setCurrentProject}/> : <> </>}
            {currentProject === 'pops' ? <PopsLiquorCabinet setCurrentProject={setCurrentProject}/> : <> </>}
            {currentProject === 'root' ? <Root setCurrentProject={setCurrentProject}/> : <> </>}
            {currentProject === 'colab' ? <CoLab setCurrentProject={setCurrentProject} /> : <> </>}
          </div>
        </StyledProjects>
      </Layout>
    </div>
  )
}