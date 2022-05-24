import { useState } from 'react';
import CountResult from './components/CountResult';
import MessageInput from './components/MessageInput';

// React components get rendered on:
// - Initialization
// - If any of the props passed to it change
// - If it's internal state gets updated

function App() {
  let [count, setCount] = useState(0);
  // let [foo, bar] = useState(0);
  // foo refers to value stored for this state
  // bar refers to function that when called updates state and triggers re-render

  const handleClick = () => {
    // calling setCount asynchronously updates the value of the state
    // Set count can be called with the updated value
    setCount(count + 1);
    // Set count can be called with a function
    // that gets called with current value
    // and returns updated value
    // setCount((state) => {
    //   return state + 1;
    // });
    console.log(count);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <CountResult />
      <MessageInput />
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
