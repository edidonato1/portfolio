import React, {useState} from 'react'
import Layout from '../../components/shared/Layout/Layout'
import AboutMeDiv from './StyledAboutMe'

export default function AboutMe() {
  const [extra, setExtra] = useState(false)


  return (
    <div>
      <Layout>
        <AboutMeDiv>
          <div className="left-div" id="about-me-left">
            <h1>about me</h1>
          </div>
          <div className="right-div" id="about-me-right">
            <h2>short</h2>
            <div className="about-text">
              <p>well-organized | creative thinker | problem solver </p>
              <p>I'm a budding, inspired web developer.</p>
              <p>An ambitious lifetime learner, my career has been defined by my devotion to detail,
              especially regarding the interconnected nature of aesthetics and functionality.
            </p>
              <p>I thrive in a stimulating environment, surrounded by like-minded individuals with a purpose-driven
              mindset.
              </p>
              <h2 onClick={() => setExtra(!extra)}>extra</h2>
              {extra ? 
              <div className="extra">
              <p>I was born and raised in a small town in Connecticut.</p>
              <p>When I came of age, my love for the outdoors led me to pursue a bachelor's degree at a small university in the green mountains of Vermont.</p>
              <p>Post-grad, I dedicated myself to a passion-driven career in the beverage industry,
                where I became an award-winning expert in cocktail creation, competing in all corners of the country, and around the world.</p>
              <p>When my career was punctuated rather abruptly by the pandemic in early 2020, I shifted gears.</p>
              <p>My love for the precise functionality of recipes and formulas, combined with my second passion for writing and sytax, 
               prompted a search for a new outlet. </p>
              <p>I haven't looked back since I opend my first &lt;h1> tag.</p>
              </div>
            : <></>}



            </div>
            
          </div>
        </AboutMeDiv>
      </Layout>
    </div>
  )
}