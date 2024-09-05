import '../assets/css/contact.css'
import { useState } from 'react';

// Contact section = contact form with name, email, message... when you move cursor out of one of the form fields without entering text, receive a notification that this field is required... verify email and notify if valid or invalid

const Form = (() => {
  // set state variables using `useState`
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

    // Check for valid email


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
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
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