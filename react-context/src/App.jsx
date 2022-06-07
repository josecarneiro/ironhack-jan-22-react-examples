import { useState } from 'react';
import ComponentA from './components/ComponentA';
import CountContext from './contexts/CountContext';

const App = () => {
  const [count, setCount] = useState(20);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        {/* <ComponentA /> */}
        <ComponentA />
      </CountContext.Provider>
    </div>
  );
};

export default App;
