import React, {useState} from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Layout from '../../components/shared/Layout/Layout';
import ContactDiv from './StyledContact';

export default function Contact() {
  const [showContact, setShowContact] = useState(false)


  return (
    <div>
      <Layout>
        <ContactDiv>
          <div className="left-div" >
            <div className="left-div-child">
              <h1>contact</h1>
              {showContact ? 
                <span className="inline-span opened"> <div className="pointer"></div><p>203.430.0261<br></br>edward.f.didonato@gmail.com</p></span>  
                  : <></>}
            </div>
          </div>
          <div className="right-div" >
            <section className="contact-blurb">
              <p>currently available for full time,<br></br> or freelance opportunities.</p><br></br>
              <p>feel free to fill out the form below, <br></br>or
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