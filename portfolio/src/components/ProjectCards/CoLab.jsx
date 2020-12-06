import { useState } from 'react';
import { Link } from 'react-router-dom';
import html from '../../assets/icons/html_logo.png';
import css from '../../assets/icons/css_logo.png';
import js from '../../assets/icons/js_logo.png';
import react from '../../assets/icons/react.svg'
import ruby from '../../assets/icons/ruby.png'
import rails from '../../assets/icons/rails.png'
import postgres from '../../assets/icons/postgres.png'
import axios from '../../assets/icons/axios_logo.png';
import git from '../../assets/icons/git.png'
import home from '../../assets/images/colab_home_web.png'
import StyledProjectCard from './StyledProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';


export default function CoLab(props) {
  const { setCurrentProject } = props
  const [logoText, setLogoText] = useState('');

  return (
    <StyledProjectCard>
      <h2 className="title"> C o L <FontAwesomeIcon icon={faFlask} /> b</h2>
      <h3 className="subtitle">a social app bringing creative-doers together</h3>
      <div className="project-links">
        <div className="link-mini-div">
          <a href="https://colab.netlify.app/" target="_blank">
            <h3>Live</h3>
          </a>
        </div>
        <div className="link-mini-div">
          <a href="https://github.com/edidonato1/CoLab" target="_blank">
            <h3>GitHub </h3>
          </a>
        </div>
      </div>
      <h4>toolkit: </h4>
      <div className="tools">
        <ul className="logo-box">
          <li><img onMouseOver={() => setLogoText('HTML')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="html5 logo" src={html} style={{ padding: "0px" }} /></li>
          <li><img onMouseOver={() => setLogoText('CSS')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="css3 logo" src={css} style={{ width: "38px" }} /></li>
          <li><img onMouseOver={() => setLogoText('JavaScript')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="javascript logo" src={js} style={{ width: "35px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Ruby')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="ruby logo" src={ruby} style={{ width: "28px", padding: "4px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Axios')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="axios logo" src={axios} style={{ width: "27px", padding: "4px" }} /></li>
          <li><img onMouseOver={() => setLogoText('React')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="react logo" src={react} style={{ width: "45px", margin: "-4px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Ruby on Rails')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="rails logo" src={rails} style={{ width: "45px", margin: "-4px" }} /></li>
          <li><img onMouseOver={() => setLogoText('PostgreSQL')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="postgreSQL logo" src={postgres} style={{ width: "28px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Git')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="git logo" src={git} style={{ padding: "0px 8px" }} /></li>
        </ul>
      </div>
      <div id="logo-text-container">
        <small>{logoText}</small>
      </div>
      <hr />
      <section>
        <h4>the app:</h4>
        <p>CoLab is a messageboard-style application, connecting artists of different media for otherwise unlikely collaborations.
      </p>
      </section>
      <img className="media" src={home} alt="colab home web" />
      <section>
        <p></p>
      </section>
      <hr />

      <div className="next-last">
        <Link> </Link>
        <Link onClick={() => setCurrentProject('root')} >next</Link>
      </div>
    </StyledProjectCard>
  )
}