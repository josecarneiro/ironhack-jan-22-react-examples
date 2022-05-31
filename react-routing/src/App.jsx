import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CatsPage from './pages/CatsPage';
import DogsPage from './pages/DogsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cats">Cats</Link>
          <Link to="/dogs">Dogs</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dogs" element={<DogsPage />} />
          <Route path="/cats" element={<CatsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
