'use client';

import sendMail from '@/actions/send-mail';

export default function ContactForm() {
  const handleClick = () => {
    sendMail();
  };

  return <button onClick={handleClick}>Send Email</button>;
}
