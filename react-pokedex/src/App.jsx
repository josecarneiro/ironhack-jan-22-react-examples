import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SinglePokemonPage from './pages/SinglePokemonPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Pokedex</Link>
        <Link to="/pokemon/pikachu">Pikachu</Link>
        <Link to="/pokemon/caterpie">Caterpie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<SinglePokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
