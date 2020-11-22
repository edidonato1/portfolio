import React, { useState } from 'react';
import StyledSunsetOracle from './StyledSunsetOracle'
import zip from '../../assets/videos/enter_zip_code.mov'
import html from '../../assets/icons/html_logo.png'
import css from '../../assets/icons/css_logo.png'
import js from '../../assets/icons/js_logo.png'
import axios from '../../assets/icons/axios_logo.png'
import score from '../../assets/images/sunset_score.png'
import burlington from '../../assets/images/burlington.png'
import texas from '../../assets/images/texas.png'
import alaska from '../../assets/images/alaska.png'
import phoenix from '../../assets/images/phoenix.png'
import cheshire from '../../assets/images/cheshire.png'


export default function SunsetOracle() {
  const [logoText, setLogoText] = useState('')



  return (
    <StyledSunsetOracle>
      <a href="https://edidonato1.github.io/Sunset-Oracle/" target="_blank">
        <h2>Sunset Oracle</h2>
      </a>
      <h3>a cheeky single-page weather application</h3>
      <h4>tool kit</h4>
      <div className="tools">
      <ul className="logo-box">
        <li><img onMouseOver={() => setLogoText('HTML')} onMouseLeave={() => setLogoText(' ')}
          className="logos" alt="html5 logo" src={html} style={{ padding: "2px" }} /></li>
        <li><img onMouseOver={() => setLogoText('CSS')} onMouseLeave={() => setLogoText(' ')}
          className="logos" alt="css3 logo" src={css} style={{ width: "35px" }} /></li>
        <li><img onMouseOver={() => setLogoText('JavaScript')} onMouseLeave={() => setLogoText(' ')}
          className="logos" alt="javascript logo" src={js} style={{ padding: "1px" }} /></li>
        <li><img onMouseOver={() => setLogoText('Axios')} onMouseLeave={() => setLogoText(' ')}className="logos" alt="axios logo" src={axios} style={{ width: "25px", padding: "3px" }} /></li>
      </ul>
          <small>{logoText}</small>
          </div>
      <h4>My first endeavor as a developer..</h4>
      <p>SunsetOracle takes the user's zip code as input, and uses Axios to bounce it off the Open Weather API .</p>
      <video autoPlay loop muted >
        <source src={zip} type="video/mp4" />
      </video>
      <p>The data returned from the API is run through a series of conditionals,
      which use the weather conditions that are commonly associated with more dramatic sunsets.</p>
      <p>The algorithm assigns a "score" - a tangible prediction for the likelihood of a stunning sunset in the user's location.</p>
      <img src={score} alt="sunset score" />
      <div className="temp-parent">
        <div name="temperature-grid" className="temperature-grid">
          <img className="temp" src={burlington} />
          <img className="temp" src={phoenix} />
          <img className="temp" src={texas} />
          <img className="temp" src={alaska} />
        </div>
      </div>
      <caption htmlFor="temperature-grid">conditional styling changes background color of temperature container</caption>
      <div>
        <a href="https://edidonato1.github.io/Sunset-Oracle/" target="_blank">
          <h3>Deploy</h3>
        </a>
        <a href="https://github.com/edidonato1/Sunset-Oracle" target="_blank">
          <h3>GitHub repository </h3>
        </a>
      </div>
    </StyledSunsetOracle>
  )
}