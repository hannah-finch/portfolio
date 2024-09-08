import '../assets/css/contact.css';
import { useState } from 'react';

import { validateEmail } from '../utils/helpers';

// Contact section = contact form with name, email, message... when you move cursor out of one of the form fields without entering text, receive a notification that this field is required... verify email and notify if valid or invalid

const Form = (() => {
  // set state variables using `useState`
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [messageMessage, setMessageMessage] = useState('');

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'senderName') {
      inputValue === '' ? setNameMessage('Field is required') : setNameMessage('');
    } else if (inputType === 'email') {
      if (inputValue === '') {
        setEmailMessage('Field is required')
      } else if (!validateEmail(email)) {
        setEmailMessage('Email is invalid');
        return;
      } else {
        setEmailMessage('')
      }
    } else {
      inputValue === '' ? setMessageMessage('Field is required') : setMessageMessage('');
    }
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set the state based on input type
    if (inputType === 'senderName') {
      setSenderName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Alert the user, clear the inputs
    alert(`Thanks for your message, ${senderName}!`);
    setSenderName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={senderName}
          name="senderName"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        <label htmlFor="senderName">{nameMessage}</label><br></br>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="email"
        />
        <label htmlFor="email">{emailMessage}</label><br></br>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Message"
        />
        <label htmlFor="message">{messageMessage}</label><br></br>
        <button type="submit">
          Submit
        </button>
      </form>

      Name: {senderName} <br></br>
      Email: {email} <br></br>
      Message: {message} <br></br>

    </div>
  );
})

function Contact() {
  return (
    <>
    <h2 className="nudge-right type-out">hannahBelle.<span className="teal">contact</span>();</h2>
    
    <section className="delay">

    <section className="text-box shadow1">

      <h3>Contact Me</h3>

      <Form />


    </section>  
    
    </section>
    </>
  )
}

export default Contact;