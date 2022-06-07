import { useContext, useState } from 'react';
import CountContext from '../contexts/CountContext';

const ComponentB = () => {
  const { count, setCount } = useContext(CountContext);

  const handleIncrement = () => {
    /* Have access to function coming from component A
    that allows me to change the value for "count" */
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default ComponentB;
