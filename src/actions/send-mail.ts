'use server';

import nodemailer from 'nodemailer';
import { type FieldValues } from 'react-hook-form';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER_HOST,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_SERVER_USER,
    pass: process.env.SMTP_SERVER_PASSWORD
  }
});

export default async function sendMail(data: FieldValues) {
  const { name, email, message } = data;

  await transporter.sendMail({
    from: process.env.SMTP_SERVER_USER,
    to: process.env.SMTP_SERVER_USER,
    replyTo: `"${name}" <${email}>`,
    subject: `Contact form message from ${name}`,
    text: message, // plain‑text body
    html: `<p>${message}</p>` // HTML body
  });
}
