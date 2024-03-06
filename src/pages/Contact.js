import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ContactForm, ContactLogo, Notification } from './ContactElements';

const Contact = () => {
    const [ messageSent, setMessageSent ] = useState(false);
    const [ notificationVisible, setNotificationVisible ] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs
        .sendForm('service_p350qxz', 'template_ynkxwje', form.current, {
          publicKey: 'cfY8cjuHb7lP6g3s1',
        })
        .then(() => {
          console.log('SUCCESS!');
          setMessageSent(true);
          setNotificationVisible(true);
          resetForm();
          setTimeout(() => {
            setNotificationVisible(false);
            setMessageSent(false);
          }, 5000);
        })
        .catch((error) => {
          console.log('FAILED...', error.text);
        });
    };

    const resetForm = () => {
        form.current.reset();
    };

  return (
    <>
      <ContactForm>
        <ContactLogo to='/'>Ultimate Goal</ContactLogo>
        <form ref={ form } onSubmit={ sendEmail }>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </ContactForm>
      <Notification visible={notificationVisible}>
        Message sent successfully!
      </Notification>
      { messageSent }
    </>
  );
}

export default Contact;