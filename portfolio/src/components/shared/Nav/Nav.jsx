import React from 'react';
import { Link } from 'react-router-dom';
import git from '../../../assets/icons/github.svg'
import linked from '../../../assets/icons/linkedin.svg'
import Navbar from './StyledNav'


export default function Nav() {
  return (
    <Navbar>
      <Link to='/'>
        <div className="initials">
          <h1>ED</h1>
        </div>
      </Link>
      <ul>
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
        <Link to="/projects">
          <li>projects</li>
        </Link>
      </ul>
      <div className="social-container">
        <a href="https://github.com/edidonato1" target="blank">
          <img src={git} alt="github" className="social-icons" id="github" />
        </a>
        <a href="https://www.linkedin.com/in/eddie-didonato/" target="blank">
          <img src={linked} alt="linkedin" className="social-icons" id="linkedin" />
        </a>
      </div>
    </Navbar>
  )
}