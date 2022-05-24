import { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('Hello world');

  const handleInputChange = (event) => {
    const inputElement = event.target;
    const value = inputElement.value;
    setMessage(value);
  };

  return (
    <div>
      <p>The message is "{message}"</p>
      {/* This is an uncontrolled input */}
      <input
        type="text"
        placeholder="Change the message..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MessageInput;
