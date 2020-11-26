import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledProjectCard from './StyledProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask} from '@fortawesome/free-solid-svg-icons';


export default function CoLab(props) {
  const { setCurrentProject } = props


  return (
    <StyledProjectCard>
      <h2 className="title"> C o L <FontAwesomeIcon icon={faFlask}/> b</h2>
      <h3 className="subtitle">a social app bringing creative-doers together</h3>
      <h3 className="subtitle">*under construction*</h3>
      <hr />
      <div className="next-last">
        <Link > </Link>
        <Link onClick={() => setCurrentProject('root')} >next</Link>
      </div>
    </StyledProjectCard>
  )
}