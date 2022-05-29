import { useState } from 'react';

const ControlledComponent = () => {
  const [message, setMessage] = useState('Hello, my name is ');

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleFormSubmission = (event) => {
    /*
    To stop the default behavior of form submissions
    (issuing a get request to the server),
    we must call the preventDefault method of the event object
    */
    event.preventDefault();
    alert('User submitted form with message: ' + message);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <h1>{message}</h1>
      {/*
        An input, textarea or select that is given a value in React
        is referred to as a controlled element
      */}
      <input
        placeholder="Write any message..."
        value={message}
        onChange={handleMessageChange}
      />
      <button>Submit Message</button>
    </form>
  );
};

export default ControlledComponent;
