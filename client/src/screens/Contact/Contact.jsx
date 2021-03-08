import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactDiv from './StyledContact';

export default function Contact() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0);
  }, []);

  return (
    <ContactDiv showContact={showContact}>
      <div className="left-div" >
        <div className="left-div-child">
          <h1 className="contact-title left-div-title">contact</h1>
          <span className="inline-span opened">
            <div className="pointer"></div>
            <p id="contact-extra">203 . 430 . 0261
              <br></br>
              <a id="email" href="mailto: edward.f.didonato@gmail.com">gmail</a>
            </p>
          </span>
        </div>
      </div>
      <div className="right-div" id="form-right">
        <section className="contact-blurb">
          {/* <p>i'm currently available for full time,
            <br/>
            or freelance opportunities.
            <br />
            <Link to="/projects" className="contact-links">case studies for reference</Link>
          </p>
          <br/> */}
          <p id="contact-blurb-bottom">feel free to fill out the form below,
            <br></br>
            or
            <span
              onClick={() => setShowContact(!showContact)}
              className="contact-links"> contact me directly
            </span> for inquiries.
          </p>
        </section>
        <ContactForm />
      </div>
    </ContactDiv>
  )
}