import { useState, useEffect } from 'react';
import StyledProjectCard from './StyledProjectCard';
import html from '../../assets/icons/html_logo.png';
import css from '../../assets/icons/css_logo.png';
import js from '../../assets/icons/js_logo.png';
import react from '../../assets/icons/react.svg';
import mongodb from '../../assets/icons/mongodb.png';
import express from '../../assets/icons/express.png';
import axios from '../../assets/icons/axios_logo.png';
import git from '../../assets/icons/git.png';
import github from '../../assets/icons/github3.svg';
import home from '../../assets/images/root_home.png';
import mobileVid from '../../assets/videos/root_mobile_recording.mov';
import profile from '../../assets/images/root_profile.png';
import transportation from '../../assets/images/root_transportation.png';
import plan from '../../assets/images/root_mobile_plan.png';;



export default function Root(props) {
  const [logoText, setLogoText] = useState('');
  const { setCurrentProject, mobile } = props;

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0);
  }, []);

  return (

    <StyledProjectCard >
      <h2 className="title">ROOT</h2>
      <h3 className="subtitle">a travel companion for the mindful communter</h3>
      <div className="project-links">
        <div className="link-mini-div">
          <a href="https://root-green-transport.netlify.app/" target="_blank" rel="noreferrer">
            <h3>Live</h3>
          </a>
        </div>
        <div className="link-mini-div">
          <a href="https://github.com/allicue/root" target="_blank" rel="noreferrer">
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
          <li><img onMouseOver={() => setLogoText('MongoDB')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="mongodb logo" src={mongodb} style={{ width: "33px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Node Express')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="express logo" src={express} style={{ width: "40px", margin: "-2px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Git')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="git logo" src={git} style={{ padding: "2px" }} /></li>
          <li><img onMouseOver={() => setLogoText('GitHub Collaboration')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="github logo" src={github} style={{ padding: "3px" }} /></li>
        </ul>
      </div>
      <div id="logo-text-container">
        <small>{logoText}</small>
      </div>
      <hr />
      <section >
        <h4>the team:</h4>
        <h5>Developers</h5>
        <p className="dev-team">
          <span> eddie didonato |<a className="friends" href="https://www.linkedin.com/in/allisonquiroz/" target="_blank" rel="noreferrer"> allison quiroz</a>
          </span><span><a className="friends" href="https://www.linkedin.com/in/nathan-wigen-6337121b0/" target="_blank" rel="noreferrer">nathan wigen</a> |
            <a className="friends" href="https://www.linkedin.com/in/daniel-michael-718825155/" target="_blank" rel="noreferrer"> daniel michael</a> </span></p>
        <h5>UX/UI Design</h5>
        <p className="dev-team">
          <span><a className="friends" href=" http://www.claudiazacharias.com" target="_blank" rel="noreferrer">claudia zacharias</a>  |  erica cleary  </span>
          <span> <a className="friends" href="https://www.linkedin.com/in/toni-marie-brown-b44b7696/" target="_blank" rel="noreferrer">toni brown </a> |  kendall kessler</span></p>
      </section>
      <hr />
      <section>
        <h4>the app:</h4>
        <p>ROOT was built collaboratively in a team environment using Git version control. It represents the first iteration of a
        grander scheme imagined by our UX/UI team, proposing an application that makes it easier to make greener choices
        on our daily commutes.
      </p>
      </section>
      <img className="media" src={home} alt="pops home web" />
      <section>
        <p>Built out from the back end using the Express framework in conjunction with MongoDB, ROOT
        incorporates user login concepts and multiple layers of full stack CRUD (Create, Read, Update, Delete) functionality.</p>
      </section>
      <img className="media" src={profile} alt="root profile page" />
      <section>
        <p>The React useContext hook is used to manage the user's login status, giving way to conditional rendering
         throughout the application</p>
      </section>
      <img className="media" src={transportation} alt="root profile page" />
      <section>
        <p>All screens are fully optimized for both web and mobile breakpoints, built to the specifications laid out
        by the UX/UI designers.
        </p>
      </section>
      <div className="media" id="media-container">
        <img className="media-child" src={plan} alt="add bottle" />
        {mobile ?
          <video id="root-video" className="media-child" controls muted >
            <source src={mobileVid} type="video/mp4" />
          </video>
          :
          <video id="root-video" className="media-child" autoPlay loop muted >
            <source src={mobileVid} type="video/mp4" />
          </video>
        }
      </div>
      <section>
        <p>An invaluable exercise in teamwork and collaboration, ROOT put us face-to-face with our UX/UI counterparts on a regular
        basis.
      </p>
        <p>Within our own development team, we gained vital experience in team development in a remote setting.
        Maintaining an open line of communication was key to our success in the ROOT build, where we were able to avoid, but
        also manage merge conflicts, and execute efficient problem-solving methods through pair programming.
        </p>
      </section>
      <hr />
      <div className="next-last">
        <p className="next" onClick={() => setCurrentProject('colab')}>last</p>
        <p className="next" onClick={() => setCurrentProject('pops')} >next</p>
      </div>
    </StyledProjectCard>

  )
}