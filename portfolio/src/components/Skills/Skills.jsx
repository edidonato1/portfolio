import { useState } from 'react';
import html from '../../assets/icons/html_logo.png';
import css from '../../assets/icons/css_logo.png';
import js from '../../assets/icons/js_logo.png';
import react from '../../assets/icons/react.svg';
import ruby from '../../assets/icons/ruby.png';
import rails from '../../assets/icons/rails.png';
import postgres from '../../assets/icons/postgres.png';
import axios from '../../assets/icons/axios_logo.png';
import git from '../../assets/icons/git.png';
import github from '../../assets/icons/github3.svg'
import mongodb from '../../assets/icons/mongodb.png'
import express from '../../assets/icons/express.png'
import node from '../../assets/icons/node.png'
import StyledSkills from './StyledSkills';

export default function Skills() {
  const [feature, setFeature] = useState(html)
  const [hover, setHover] = useState(false)

  const handleMouseEnter = (icon) => {
    setHover(true)
    setFeature(icon)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <StyledSkills hover={hover}>
      <h1>skills</h1>
      <ul className="skills-list">
        <div className="icon-box">
          <img className="skill-icon" alt="html" onMouseEnter={() => handleMouseEnter(html)}src={html} onMouseLeave={handleMouseLeave} />
          <img className="skill-icon" alt="css" onMouseEnter={() => handleMouseEnter(css)} onMouseLeave={handleMouseLeave}src={css} />
          <img className="skill-icon" alt="javascript" onMouseEnter={() => handleMouseEnter(js)} onMouseLeave={handleMouseLeave} src={js} />
          <img className="skill-icon" alt="react" onMouseEnter={() => handleMouseEnter(react)} onMouseLeave={handleMouseLeave} src={react} />
          <img className="skill-icon" alt="ruby" onMouseEnter={() => handleMouseEnter(ruby)} onMouseLeave={handleMouseLeave}  src={ruby} />
          <img className="skill-icon" alt="rails" onMouseEnter={() => handleMouseEnter(rails)} onMouseLeave={handleMouseLeave} src={rails} />
          <img className="skill-icon" alt="postgres" onMouseEnter={() => handleMouseEnter(postgres)} onMouseLeave={handleMouseLeave}  src={postgres} />
          <img className="skill-icon" alt="axios" onMouseEnter={() => handleMouseEnter(axios)} onMouseLeave={handleMouseLeave}  src={axios} />
          <img className="skill-icon" alt="git" onMouseEnter={() => handleMouseEnter(git)} onMouseLeave={handleMouseLeave}  src={git} />
          <img className="skill-icon" alt="github" onMouseEnter={() => handleMouseEnter(github)} onMouseLeave={handleMouseLeave}  src={github} />
          <img className="skill-icon" alt="mongodb" onMouseEnter={() => handleMouseEnter(mongodb)} onMouseLeave={handleMouseLeave}  src={mongodb} />
          <img className="skill-icon" alt="express" onMouseEnter={() => handleMouseEnter(express)} onMouseLeave={handleMouseLeave}  src={express} />
          <img className="skill-icon" alt="node" onMouseEnter={() => handleMouseEnter(node)} onMouseLeave={handleMouseLeave}  src={node} />
        </div>
      </ul>
      <div id="feature">
        
        <img className="big-icon" src={feature}/>
        <div id="platform">
          <div id="platform-shadow"></div>
        </div>
      </div>
    </StyledSkills>
  )
}