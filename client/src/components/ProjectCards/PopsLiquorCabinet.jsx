import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import StyledProjectCard from './StyledProjectCard';
import html from '../../assets/icons/html_logo.png';
import css from '../../assets/icons/css_logo.png';
import js from '../../assets/icons/js_logo.png';
import react from '../../assets/icons/react.svg'
import airtable from '../../assets/icons/airtable.svg'
import axios from '../../assets/icons/axios_logo.png';
import git from '../../assets/icons/git.png'
import home from '../../assets/images/pops_home_web.png'
import grab from '../../assets/videos/pops_mobile_recording.mov'
import add from '../../assets/images/pops_mobile_add.png';
import grabMobile from '../../assets/videos/pops_tablet_inv.mov'



export default function PopsLiquorCabinet(props) {
  const [logoText, setLogoText] = useState('');
  const { setCurrentProject, mobile } = props;

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0)
  }, [])

  return (

    <StyledProjectCard >
      <h2 className="title">Pop's Liquor Cabinet</h2>
      <h3 className="subtitle">an intuitive home bar inventory manager</h3>
      <div className="project-links">
        <div className="link-mini-div">
          <a href="https://pops-liquor-cabinet.netlify.app/" target="_blank">
            <h3>Live</h3>
          </a>
        </div>
        <div className="link-mini-div">
          <a href="https://github.com/edidonato1/Pops_Liquor_Cabinet" target="_blank">
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
          <li><img onMouseOver={() => setLogoText('Axios')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="axios logo" src={axios} style={{ width: "27px", padding: "4px" }} /></li>
          <li><img onMouseOver={() => setLogoText('React')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="react logo" src={react} style={{ width: "45px", margin: "-4px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Airtable')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="airtable logo" src={airtable} style={{ padding: "2px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Git')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="git logo" src={git} style={{ padding: "2px" }} /></li>
        </ul>
      </div>
      <div id="logo-text-container">
        <small>{logoText}</small>
      </div>
      <hr />
      <section>
        <h4>the app:</h4>
        <p>Pop's Liquor Cabinet is built from the perspective of bar professionals, optimized for the home
        bar enthusiast to efficiently manage their inventory.
      </p>
      </section>
      <img className="media" src={home} alt="pops home web" />
      <section>
        <p>Built mobile-first with numerous breakpoints, the application is intuitively designed to mimic the flow of actions involved in building a
        spirits collection.
        </p>
        <p>The user first logs their purchases into inventory using the form provided.
        When they pour themselves a dram, the "grab a bottle" functionality allows them to dynamically update
        the amount left in the bottle, and provides the option to update their tasting notes.
        </p>
      </section>
      <div className="media" id="media-container">
        <img className="media-child" src={add} alt="add bottle" />
        {mobile ?
          <video className="media-child" controls muted >
            <source src={grab} type="video/mp4" />
          </video>
          :
          <video className="media-child" autoPlay loop muted >
            <source src={grab} type="video/mp4" />
          </video>
        }
      </div>
      <section>
        <p>The inventory updates in real time, and comes complete with sorting functionality integrated tastefully into
        the UI.
      </p>
      </section>
      {mobile ?
        <video className="media" controls muted >
          <source src={grabMobile} type="video/mp4" />
        </video>
        :
        <video className="media" autoPlay loop muted >
          <source src={grabMobile} type="video/mp4" />
        </video>
      }
      <section>
        <p>Built using Airtable API as a third-party database, Pops' current iteration is a prototype for a full stack, user-focused
          mobile application.</p>
      </section>
      <hr />
      <div className="next-last">
        <Link onClick={() => setCurrentProject('root')}>last</Link>
        <Link onClick={() => setCurrentProject('sunset')} >next</Link>
      </div>
    </StyledProjectCard>

  )
}