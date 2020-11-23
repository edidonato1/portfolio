import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Layout from '../../components/shared/Layout/Layout';
import ContactDiv from './StyledContact';

export default function Contact() {


  return (
    <div>
      <Layout>
        <ContactDiv>
          <div className="left-div" >
            <h1>contact</h1>
          </div>
          <div className="right-div" >
            <section className="contact-blurb">
              <p>currently available for full time,<br></br> or freelance opportunities.</p><br></br>
              <p>feel free to fill out the form below, <br></br>or contact me directly for inquiries.</p>
            </section>
          <ContactForm />
          </div>
          </ContactDiv>
      </Layout>
    </div>
  )
}