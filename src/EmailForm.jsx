import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lh5e936', 'template_lt5apw4', form.current, '2vrM_nIyeXKNwLHLq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> */}
      {/* <input type="text" name="user_name" /> */}
      {/* <label>Email</label> */}
      <input type="email" name="user_email" />
      {/* <label>Message</label> */}
      {/* <textarea name="message" /> */}
      <input type="submit" value="Send" />
    </form>
  );
};