import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Layout from '../../components/shared/Layout/Layout';
import ContactDiv from './StyledContact';

export default function Contact() {
  const [showContact, setShowContact] = useState(false)



  return (
    <div>
      <Layout>
        <ContactDiv showContact={showContact}>
          <div className="left-div" >
            <div className="left-div-child">
              <h1 className="contact-title left-div-title">contact</h1>
              <span className="inline-span opened"> <div className="pointer"></div><p id="contact-extra">203 . 430 . 0261<br></br><a id="email" href="mailto: edward.f.didonato@gmail.com">gmail</a></p></span>
            </div>
          </div>
          <div className="right-div" id="form-right">
            <section className="contact-blurb">
              <p>currently available for full time,<br></br> or freelance opportunities.</p><br></br>
              <p id="contact-blurb-bottom">feel free to fill out the form below, <br></br>or
              <span
                  onClick={() => setShowContact(!showContact)}
                  className="show-contact"> contact me directly </span> for inquiries.</p>
            </section>
            <ContactForm />
          </div>
        </ContactDiv>
      </Layout>
    </div>
  )
}