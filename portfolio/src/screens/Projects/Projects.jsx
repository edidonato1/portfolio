import React, { useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import SunsetOracle from '../../components/ProjectCards/SunsetOracle';
import PopsLiquorCabinet from '../../components/ProjectCards/PopsLiquorCabinet';
import Root from '../../components/ProjectCards/Root';
import CoLab from '../../components/ProjectCards/CoLab';
import StyledProjects from './StyledProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';




export default function Projects() {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('')

  return (
    <div>
      <Layout>
        <StyledProjects open={open}>

          <div className="left-div" >
            <div className="left-div-child">
              <div className="projects-title-inline">
                <h1>projects</h1>
                <div className="icon-container" >
                  <FontAwesomeIcon
                    style={!open ? {} : { transform: "rotate(180deg)" }}
                    className="icon"
                    icon={faChevronCircleDown}
                    onClick={() => setOpen(!open)} />
                </div>
              </div>
              <ul className="drop-down">
                <li className="project-li" onClick={() => setCurrentProject('colab')}>ColLab</li>
                <li className="project-li" onClick={() => setCurrentProject('root')}>ROOT</li>
                <li className="project-li" onClick={() => setCurrentProject('pops')}>Pop's Liquor Cabinet</li>
                <li className="project-li" onClick={() => setCurrentProject('sunset')} >Sunset Oracle</li>
              </ul>
            </div>
          </div>
          <div className="right-div" id="projects-right">
            {currentProject === 'sunset' ? <SunsetOracle setCurrentProject={setCurrentProject}/> : <> </>}
            {currentProject === 'pops' ? <PopsLiquorCabinet setCurrentProject={setCurrentProject}/> : <> </>}
            {currentProject === 'root' ? <Root setCurrentProject={setCurrentProject}/> : <> </>}
            {currentProject === 'colab' ? <CoLab setCurrentProject={setCurrentProject}/> : <> </>}
          </div>
        </StyledProjects>
      </Layout>
    </div>
  )
}