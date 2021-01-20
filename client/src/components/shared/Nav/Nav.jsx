import React, { useState } from 'react';
import Burger from './Burger';
import { NavLink } from 'react-router-dom';
import NavIcon from './NavIcon';
import pina from '../../../assets/icons/pineapple.svg';
import pina2 from '../../../assets/icons/pina2.svg';
import Navbar from './StyledNav';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faPaperPlane, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';


export default function Nav(props) {
  const { home, openBurger, setOpenBurger, showSkills, setShowSkills, showPineapple, setShowPineapple, mobile } = props;
  const [hoverHome, setHoverHome] = useState(false);
  const [meHover, setMeHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);

  const handleSkills = () => {
    if (mobile) {
      setOpenBurger(false);
    }
    setShowSkills(!showSkills);
  }

  const handleHomeClick = () => {
    if (home) {
      setShowPineapple(!showPineapple);
      setShowSkills(false);
    }
  }

  return (
    <Navbar openBurger={openBurger} home={home}>
      <NavLink to='/' onClick={handleHomeClick}>
        <div className="initials-outer">
          <div className="initials" onMouseOver={() => setHoverHome(true)} onMouseLeave={() => setHoverHome(false)}>
            <img
              alt="pineapple"
              style={hoverHome ? { width: "35px" } : {}}
              src={hoverHome && !mobile ? pina2 : pina}
              id="initials-text" />
          </div>
        </div>
      </NavLink>
      <div className="script">
        <h2 id="e-didonato">e. didonato</h2>
      </div>
      <div className="all-icons">
        <ul id="nav-icon-main">
          <NavIcon 
            mobile={mobile}
            setOpenBurger={setOpenBurger}
            pageTitle="about"
            icon={faUserAstronaut}
            setHover={setMeHover}
            hover={meHover}
            />
          <NavIcon
            mobile={mobile}
            setOpenBurger={setOpenBurger}
            pageTitle="contact"
            icon={faPaperPlane}
            setHover={setContactHover}
            hover={contactHover}
          />
          <NavIcon 
            mobile={mobile}
            setOpenBurger={setOpenBurger}
            pageTitle="projects"
            icon={faBriefcase}
            setHover={setWorkHover}
            hover={workHover}
          />
          <div id="skills">
            <div className="icon-container">
              <li
                className="nav-icon"
                onMouseOver={() => setSkillsHover(true)}
                onMouseLeave={() => setSkillsHover(false)}
                onClick={handleSkills}>
                <FontAwesomeIcon icon={faTools} />
                {skillsHover || mobile ? <p className="nav-hidden">skills</p> : <></>}
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