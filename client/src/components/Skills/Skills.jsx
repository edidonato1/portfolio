import html from '../../assets/icons/html_logo.png';
import css from '../../assets/icons/css_logo.png';
import js from '../../assets/icons/js_logo.png';
import react from '../../assets/icons/react.svg';
import ruby from '../../assets/icons/ruby.png';
import rails from '../../assets/icons/rails.png';
import postgres from '../../assets/icons/postgres.png';
import axios from '../../assets/icons/axios_logo.png';
import git from '../../assets/icons/git.png';
import mongodb from '../../assets/icons/mongodb.png'
import express from '../../assets/icons/express.png'
import node from '../../assets/icons/node.png'
import pdf from '../../assets/resume/resume.pdf'
import StyledSkills from './StyledSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';


export default function Skills(props) {
  const { showSkills, setShowSkills, home } = props

  return (
    <StyledSkills showSkills={showSkills} home={home}>
      <div id="title-box">
        <span><h1>skills</h1></span>
        <small onClick={() => setShowSkills(false)}>[ hide ]</small>
      </div>
      <a
        href={pdf}
        target="_blank"
        rel="noreferrer" 
        id="resume-text">
        <span
          id="resume">
          résumé <FontAwesomeIcon id="resume-icon" icon={faScroll} />
        </span>
      </a>
      <div className="icon-box">
        <div className="skills-box">
          <img className="skill-icon" id="js" alt="javascript" src={js} />
          <h3>JavaScript</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="react" alt="react" src={react} />
          <h3>React</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="postgres" alt="postgres" src={postgres} />
          <h3>PostgreSQL</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="ruby" alt="ruby" src={ruby} />
          <h3>Ruby</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="rails" alt="rails" src={rails} />
          <h3>Ruby on Rails</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="axios" alt="axios" src={axios} />
          <h3>Axios</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="git" alt="git" src={git} />
          <h3>Git</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="mongodb" alt="mongodb" src={mongodb} />
          <h3>MongoDB</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="express" alt="express" src={express} />
          <h3>Express</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="node" alt="node" src={node} />
          <h3>Node.js</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="html" alt="html" src={html} />
          <h3>HTML</h3>
        </div>
        <div className="skills-box">
          <img className="skill-icon" id="css" alt="css" src={css} />
          <h3>CSS</h3>
        </div>
      </div>
    </StyledSkills>
  )
}