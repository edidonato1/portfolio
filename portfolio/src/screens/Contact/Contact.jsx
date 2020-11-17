import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Layout from '../../components/shared/Layout/Layout';
import ContactDiv from './StyledContact';

export default function Contact() {


  return (
    <div>
      <Layout>
        <ContactDiv>
          <h1>Contact</h1>
          <ContactForm />
        </ContactDiv>
      </Layout>
    </div>
  )
}