import { useState } from 'react';

const ToDoListItemInput = (props) => {
  const [message, setMessage] = useState('Hello world');

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleItemAddition = (event) => {
    /* Stops browser from issuing request to server */
    event.preventDefault();
    props.onAdd(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleItemAddition}>
      <input
        placeholder='Add item to "To Do List"'
        value={message}
        onChange={handleMessageChange}
      />
      <button>+</button>
    </form>
  );
};

export default ToDoListItemInput;
