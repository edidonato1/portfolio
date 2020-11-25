import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import git from '../../../assets/icons/github.svg';
import git2 from '../../../assets/icons/github2.svg';
import linked from '../../../assets/icons/linkedin.svg';
import linked2 from '../../../assets/icons/linkedin2.svg';
import Navbar from './StyledNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faPaperPlane, faBriefcase } from '@fortawesome/free-solid-svg-icons';



export default function Nav() {
  const [gitHover, setGitHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [meHover, setMeHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);



  return (
    <Navbar>
      <Link to='/'>
        <div className="initials-outer">
          <div className="initials">
            <h1>ED</h1>
          </div>
        </div>
      </Link>
      <ul>
        <Link to="/about">
          <div className="icon-container">
            <li
              className="nav-icon"
              onMouseOver={() => setMeHover(true)}
              onMouseLeave={() => setMeHover(false)}>
              <FontAwesomeIcon icon={faUserAstronaut} />
              {meHover ? <p className="nav-hidden" >about</p> : <> </>}
            </li>
          </div>
        </Link>
        <Link to="/contact">
          <div className="icon-container">
            <li
              className="nav-icon"
              onMouseOver={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}>
              <FontAwesomeIcon icon={faPaperPlane} />
              {contactHover ? <p className="nav-hidden">contact</p> : <></>}
            </li>
          </div>
        </Link>
        <Link to="/projects">
          <div className="icon-container">
            <li
              className="nav-icon"
              onMouseOver={() => setWorkHover(true)}
              onMouseLeave={() => setWorkHover(false)}>
              <FontAwesomeIcon icon={faBriefcase} />
              {workHover ? <p className="nav-hidden" >projects</p> : <></>}
            </li>
          </div>
        </Link>
      </ul>
      <div className="social-container">
        <a href="https://github.com/edidonato1" target="blank">
          <img
            onMouseOver={() => setGitHover(true)}
            onMouseLeave={() => setGitHover(false)}
            src={gitHover ? git2 : git}
            alt="github"
            className="social-icons"
            id="github" />
        </a>
        <a href="https://www.linkedin.com/in/eddie-didonato/" target="blank">
          <img
            onMouseOver={() => setLinkHover(true)}
            onMouseLeave={() => setLinkHover(false)}
            src={linkHover ? linked2 : linked}
            alt="linkedin"
            className="social-icons"
            id="linkedin" />
        </a>
      </div>
    </Navbar>
  )
}