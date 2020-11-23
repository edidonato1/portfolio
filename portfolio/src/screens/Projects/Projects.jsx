import React from 'react';
import Layout from '../../components/shared/Layout/Layout'
import SunsetOracle from '../../components/ProjectCards/SunsetOracle'
import StyledProjects from './StyledProjects'




export default function Projects() {

  return (
    <div>
      <Layout>
        <StyledProjects>

          <div className="left-div" >
            <div className="left-div-child">
            <h1>projects</h1>
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