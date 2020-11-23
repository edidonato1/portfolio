import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import AboutMeDiv from './StyledAboutMe'
import eddie from '../../assets/images/eddie_rwb.png'

export default function AboutMe() {

  return (
    <div>
      <Layout>
        <AboutMeDiv>
          <div className="left-div" id="about-me-left">
            <h1>about me</h1>
          </div>
          <div className="right-div" id="about-me-right">
            <img id="eddie-bnw" src={eddie} alt="eddie didonato" />
            <h2>eddie didonato</h2>
            <h3>web developer</h3>
            <section className="about-text">
              {/* <p>organized | creative thinker | problem solver </p> */}
              <p>An ambitious lifetime learner, I've always been curious about the architecture of the internet — 
              In early 2020, that curiosity pivoted into an obsession. 
              Since then I've poured every ounce of myself into learning the languages that connect
              nearly every human on the planet.  
            </p>
              <p>In a past life, I was an award winning cocktail bartender, competing in all corners of the country,
               and around the world.  And while I've left a lot behind to pursue web development, a lot has followed me 
                in my career as a developer.
              </p>
              I'm obsessed with creating products with purpose, driven to invoke delight.  I believe 
              that there's no problem that isn't worth solving, and it's my goal to make products that will inspire, excite, 
              and genuinely improve people's lives.
              <p>If you share my passion, I'd love to hear from you.</p>
              <p><Link to="/contact">get in touch</Link></p>
            </section>
          </div>
        </AboutMeDiv>
      </Layout>
    </div>
  )
}