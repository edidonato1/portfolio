import React from 'react';
import Layout from '../../components/shared/Layout/Layout'
import StyledProjects from './StyledProjects'

export default function Projects() {

  return (
    <div>
      <Layout>
        <StyledProjects>

        <div className="left-div" >
          <h1>projects</h1>
        </div>
        <div className="right-div" id="projects-right">
        </div>
        </StyledProjects>
      </Layout>
    </div>
  )
}