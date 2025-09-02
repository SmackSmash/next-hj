'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER_HOST,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_SERVER_USER,
    pass: process.env.SMTP_SERVER_PASSWORD
  }
});

export default async function sendMail() {
  const info = await transporter.sendMail({
    from: process.env.SMTP_SERVER_USER,
    to: process.env.SMTP_SERVER_TARGET,
    subject: 'Hello ✔',
    text: 'Hello world?', // plain‑text body
    html: '<b>Hello world?</b>' // HTML body
  });

  console.log('Message sent:', info.messageId);
}
