import React, { useState } from 'react';
import StyledSunsetOracle from './StyledSunsetOracle'
import zip from '../../assets/videos/enter_zip_code.mov'
import html from '../../assets/icons/html_logo.png'
import css from '../../assets/icons/css_logo.png'
import js from '../../assets/icons/js_logo.png'
import axios from '../../assets/icons/axios_logo.png'
import score from '../../assets/images/sunset_score.png'
import data from '../../assets/images/weather_data.png'


export default function SunsetOracle() {
  const [logoText, setLogoText] = useState('')


  return (
    <StyledSunsetOracle>
      <h2 className="title">Sunset Oracle</h2>
      <h3 className="subtitle">a cheeky single-page weather application</h3>
      <div className="project-links">
        <div className="link-mini-div">
          <a href="https://edidonato1.github.io/Sunset-Oracle/" target="_blank">
            <h3>Live</h3>
          </a>
        </div>
        <div className="link-mini-div">
          <a href="https://github.com/edidonato1/Sunset-Oracle" target="_blank">
            <h3>GitHub </h3>
          </a>
        </div>
      </div>
      <hr />
      <div className="tools">
        <h4>toolkit: </h4>
        <ul className="logo-box">
          <li><img onMouseOver={() => setLogoText('HTML')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="html5 logo" src={html} style={{ padding: "0px" }} /></li>
          <li><img onMouseOver={() => setLogoText('CSS')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="css3 logo" src={css} style={{ width: "38px" }} /></li>
          <li><img onMouseOver={() => setLogoText('JavaScript')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="javascript logo" src={js} style={{ width: "35px" }} /></li>
          <li><img onMouseOver={() => setLogoText('Axios')} onMouseLeave={() => setLogoText(' ')}
            className="logos" alt="axios logo" src={axios} style={{ width: "27px", padding: "4px" }} /></li>
        </ul>
      </div>
      <div id="logo-text-container">
        <small>{logoText}</small>
      </div>
      <hr />
      <p>SunsetOracle takes the user's zip code as input, and uses Axios to bounce it off the Open Weather API.</p>
      <video className="media" autoPlay loop muted >
        <source src={zip} type="video/mp4" />
      </video>
      <p>The data returned from the API is run through a series of conditionals,
      which use the weather conditions that are commonly associated with more dramatic sunsets.</p>
      <p>The algorithm assigns a "score" - a tangible prediction for the likelihood of a stunning sunset in the user's location.</p>
      <img className="media" src={score} alt="sunset score" />
      <img className="media" src={data} alt="weather data" />

    </StyledSunsetOracle>
  )
}