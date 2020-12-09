import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import html from '../../assets/icons/html_logo.png';
import css from '../../assets/icons/css_logo.png';
import js from '../../assets/icons/js_logo.png';
import react from '../../assets/icons/react.svg';
import ruby from '../../assets/icons/ruby.png';
import rails from '../../assets/icons/rails.png';
import postgres from '../../assets/icons/postgres.png';
import axios from '../../assets/icons/axios_logo.png';
import git from '../../assets/icons/git.png';
import home from '../../assets/images/colab_home_web.png';
import medium from '../../assets/images/colab_medium_web.png';
import mobileMedium from '../../assets/images/colab_medium_mobile.png';
import mobileVid from '../../assets/videos/colab_mobile.mov';
import StyledProjectCard from './StyledProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';


export default function CoLab(props) {
  const { setCurrentProject } = props;
  const [logoText, setLogoText] = useState('');

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0)
  },[])

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
        <p>CoLab is a full stack messageboard-style application, connecting artists of different media for otherwise unlikely collaborations.
      </p>
      </section>
      <img className="media" src={home} alt="colab home web" />
      <section>
        <p>The back end is powered by a PostgreSQL relational database, and gets its structure from Ruby on Rails.  </p>
        <p>The first and current iteration incorporates three tables with several associations among them.  Doing so gives the user 
         quick access to the messageboards associated with their primary art forms.
        </p>
      </section>
      <section>
      <img className="media" src={medium} alt="colab home web" />
      </section>
      <section>
        <p>Built in React, and optimized for either web or mobile, CoLab uses several layers of conditional rendering to
        maintain a clean UI for seamless, user-friendly navigation.</p>
      </section>
      <div className="media" id="media-container">
        < img className="media-child" src={mobileMedium } />
        <video className="media-child" autoPlay loop muted >
          <source src={mobileVid} type="video/mp4" />
        </video>
      </div>
        <section>
          <p>A second iteration of CoLab is currently underway, and will incorporate the concept of multi-user associations
            and tools for collaboration.
          </p>
        </section>
      <hr />

      <div className="next-last">
        <Link> </Link>
        <Link onClick={() => setCurrentProject('root')} >next</Link>
      </div>
    </StyledProjectCard>
  )
}