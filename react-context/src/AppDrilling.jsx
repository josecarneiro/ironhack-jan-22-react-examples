import { useState } from 'react';

const ComponentB = (props) => {
  const handleIncrement = () => {
    props.onCountChange(props.count + 1);
  };

  return (
    <div>
      <h1>Count: {props.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

const ComponentA = (props) => {
  const handleCountChange = (value) => {
    props.onChange(value);
  };

  return (
    <div>
      <ComponentB count={props.value} onCountChange={handleCountChange} />
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(20);

  const handleCountChange = (value) => {
    setCount(value);
  };

  return (
    <div>
      <ComponentA value={count} onChange={handleCountChange} />
    </div>
  );
};

export default App;
