import { useState } from 'react';

/*
const value = true;
// With ternary operator
console.log(value ? 'Its true' : 'Its false');
// Shortcircuiting with && or || operators
console.log((value && 'Its true') || 'Its false');
*/

function App() {
  const [displayMessage, setDisplayMessage] = useState(false);

  const handleToggleMessageClick = () => {
    setDisplayMessage(!displayMessage);
  };

  return (
    <div className="App">
      <button onClick={handleToggleMessageClick}>
        {displayMessage ? 'Hide' : 'Show'} Message
      </button>
      {displayMessage && <h1>This is a secret message</h1>}
    </div>
  );
}

export default App;
