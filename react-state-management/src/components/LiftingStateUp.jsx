import { useState } from 'react';

const IncrementTrigger = (props) => {
  return (
    <button onClick={props.onIncrement}>Increment count {props.count}</button>
  );
};

const LiftingStateUp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current count is set to {count}</h1>
      <IncrementTrigger count={count} onIncrement={handleIncrement} />
    </div>
  );
};

export default LiftingStateUp;
