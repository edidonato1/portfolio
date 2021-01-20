import html from '../../assets/icons/html_logo.png';
import css from '../../assets/icons/css_logo.png';
import javascript from '../../assets/icons/js_logo.png';
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
import SkillBox from './SkillBox';
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
          view résumé <FontAwesomeIcon id="resume-icon" icon={faScroll} />
        </span>
      </a>
      <div className="icon-box">
        <SkillBox name="javascript" src={javascript}/>
        <SkillBox name="React" src={react} />
        <SkillBox name="PostgreSQL" src={postgres}/>
        <SkillBox name="Ruby" src={ruby} />
        <SkillBox name="Rails" src={rails} />
        <SkillBox name="Axios" src={axios} />
        <SkillBox name="Git" src={git} />
        <SkillBox name="MongoDB" src={mongodb} />
        <SkillBox name="Express" src={express} />
        <SkillBox name="Node.js" src={node} />
        <SkillBox name="HTML" src={html} />
        <SkillBox name="CSS" src={css} />
      </div>
    </StyledSkills>
  )
}