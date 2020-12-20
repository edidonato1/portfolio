import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init("user_yIHk6A1yfmyHXdBofkhFI");

const ContactForm = () => {

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const sendEmail = event => {
    event.preventDefault();
    const { name, email, subject, message } = form;
    emailjs.send('service_egkur24', 'template_s05o8qa', {
      name: name,
      email: email,
      subject: subject,
      message: message
    });
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setSent(true)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };


  if (sent) {
    return <Redirect to="/" />
  }

  return (
    <div className="form-main">
      <form onSubmit={sendEmail}
      >
        <div className="form">
          <div className="top-row">
            <input
              className="input"
              id="name"
              type="text"
              name="name"
              value={form.name}
              placeholder="your name"
              onChange={handleChange}
              required
            />
            <input
              className="input"
              id="email"
              type="text"
              name="email"
              value={form.email}
              placeholder="email address"
              onChange={handleChange}
              required
            />
          </div>
          <input
            className="input"
            id="subject"
            type="text"
            name="subject"
            value={form.subject}
            placeholder="subject"
            onChange={handleChange}
            required
          />
          <textarea
            className="input"
            id="message"
            type="text"
            name="message"
            value={form.message}
            placeholder="message"
            onChange={handleChange}
            required
          />
          <div className="button-container">
            <button type="submit">send</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm