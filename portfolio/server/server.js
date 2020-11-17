const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000
const transporter = require('./config')
const dotenv = require('dotenv');
dotenv.config();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
app.use(cors())

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html: `
      <p>You have a new contact request </p>
      <h3> Contact Details </h3>
      <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email} </li>
        <li>Subject: ${req.body.subject} </li>
        <li>Message: ${req.body.subject} </li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: "thanks for getting in touch.  i'll contact you shortly"
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  };
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT} `);
});