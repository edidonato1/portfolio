import React, { useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import SunsetOracle from '../../components/ProjectCards/SunsetOracle';
import StyledProjects from './StyledProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';




export default function Projects() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Layout>
        <StyledProjects open={open}>

          <div className="left-div" >
            <div className="left-div-child">
              <div className="projects-title-inline">
                <h1 onClick={() => setOpen(!open)}>projects</h1>
                <div className="icon-container" >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faChevronCircleDown}
                    onClick={() => setOpen(!open)} />
                </div>
              </div>
              <ul className="drop-down">
                <li>collab</li>
                <li>root</li>
                <li>pop's liquor cabinet</li>
                <li>sunset oracle</li>
              </ul>
            </div>
          </div>
          <div className="right-div" id="projects-right">
            <SunsetOracle />
          </div>
        </StyledProjects>
      </Layout>
    </div>
  )
}