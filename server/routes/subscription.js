// routes/subscription.js
const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const Subscription = require('../models/Subscription');
const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host:"smtp.oxcs.bluehost.com",
  port:587,
  auth: {
    user: process.env.EMAIL, // EMAIL from .env
    pass: process.env.EMAIL_PASS, // EMAIL_PASS from .env
  },
  logger: true, // Log SMTP connection info
  debug: true, // Include SMTP traffic in logs
});

// POST route for subscribing
router.post('/subscribe', async (req, res) => {
  const { fullName, email, phoneNumber } = req.body;

  // Check if the email or phone number already exists
  const existingUser = await Subscription.findOne({ $or: [{ email }, { phoneNumber }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Email or phone number already exists.' });
  }

  // Generate confirmation token
  const confirmationToken = crypto.randomBytes(32).toString('hex');

  // Create new subscriber
  const newSubscriber = new Subscription({
    fullName,
    email,
    phoneNumber,
    confirmationToken,
    confirmed: false, // Mark as unconfirmed initially
  });

  try {
    await newSubscriber.save();

    // Confirmation URL (adjust as needed)
    const confirmationUrl = `https://www.aipropd.de`;

    // Email HTML template
    const confirmationEmail = `
      <!DOCTYPE html>
      <html lang="en">
      <head>  
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f7f7f7; }
              .container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
              .company-name { text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
              .content { text-align: center; margin: 20px 0; }
              .button { display: inline-block; padding: 15px 25px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="company-name">
                  Agentur International Professionelle Privat Detektiv
              </div>
              <div class="content">
                  <p>Dear ${fullName},</p>
                  <p>Thank you for trying to subscribe to the newsletter form. If you want to confirm, click the button below :)</p>
                  <a href="${confirmationUrl}" class="button">Confirm</a>
              </div>
              <div class="footer">
                  © 2024 Agentur International Professionelle Privat Detektiv
              </div>
          </div>
      </body>
      </html>
    `;

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Confirm your subscription',
      html: confirmationEmail,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: 'Subscription successful! Please check your email to confirm.' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Subscription failed. Please try again.' });
  }
});

// GET route to confirm subscription
router.get('/confirm/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const subscriber = await Subscription.findOne({ confirmationToken: token });
    if (!subscriber) {
      return res.status(400).json({ message: 'Invalid confirmation token.' });
    }

    // Mark as confirmed
    subscriber.confirmed = true;
    subscriber.confirmationToken = null; // Clear the token
    await subscriber.save();

    return res.status(200).json({ message: 'Subscription confirmed!' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Confirmation failed. Please try again.' });
  }
});

module.exports = router;
