import React, { useState, useEffect } from 'react';
import Burger from './Burger';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './StyledNav';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faPaperPlane, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';



export default function Nav(props) {
  const { home, openBurger, setOpenBurger, showSkills, setShowSkills } = props

  const [mobile, setMobile] = useState(false);
  const [meHover, setMeHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);

  const handler = () => {
    window.innerWidth <= 500 ? setMobile(true) : setMobile(false);
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () =>
      window.removeEventListener("resize", handler)

  }, [])

  const activeLinkStyles = {
    color: "#35a3a3",
    fontSize: "33px"
  }



  return (
    <Navbar openBurger={openBurger} home={home}>
      <NavLink
        to='/'>
        <div className="initials-outer">
          <div className="initials">
            <h1>ED</h1>
          </div>
        </div>
      </NavLink>
      <div className="all-icons">
        <ul id="nav-icon-main">
          <NavLink to="/about"
            activeStyle={activeLinkStyles}>
            <div className="icon-container">
              <li
                className="nav-icon"
                onMouseOver={() => setMeHover(true)}
                onMouseLeave={() => setMeHover(false)}>
                <FontAwesomeIcon icon={faUserAstronaut} />
                {meHover ? <p className="nav-hidden" >about</p> : <> </>}
              </li>
            </div>
          </NavLink>
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
          <div id="skills">
            <div className="icon-container">
              <li
                className="nav-icon"
                onMouseOver={() => setSkillsHover(true)}
                onMouseLeave={() => setSkillsHover(false)}
                onClick={() => setShowSkills(!showSkills)}>
                <FontAwesomeIcon icon={faTools} />
                {skillsHover ? <p className="nav-hidden">skills</p> : <></>}
              </li>
            </div>
          </div>
        </ul>
        <div className="social-container">
          <div className="social-icon-container">
            <a href="https://github.com/edidonato1" target="blank">
              <FontAwesomeIcon icon={faGithub} className="nav-icon social" id="github" />
            </a>
          </div>
          <div className="social-icon-container">
            <a href="https://www.linkedin.com/in/eddie-didonato/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} className="nav-icon social" id="linkein" />
            </a>
          </div>
        </div>
      </div>
      <div className="burger">
        <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} />
      </div>
    </Navbar>
  )
}