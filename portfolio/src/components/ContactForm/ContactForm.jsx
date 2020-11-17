import React, { useState } from 'react';
import axios from 'axios';

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
    axios
      .post('/send', { ...form })
      .then(response => {
        setResult(response.data);
        setForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
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