import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_yIHk6A1yfmyHXdBofkhFI");

const ContactForm = () => {
  const [result, setResult] = useState(null)
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
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <div>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="full name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="email address"
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          placeholder="subject"
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={form.message}
          placeholder="message"
          onChange={handleChange}
        />
        <button type="submit">send</button>
      </form>
    </div>
  )
}

export default ContactForm