import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import SinglePage from './pages/SinglePage';
import UpdatePage from './pages/UpdatePage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Stefano's List</Link>
        <Link to="/ad/create">Create New Advertisement</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ad/create" element={<CreatePage />} />
        <Route path="/ad/:id" element={<SinglePage />} />
        <Route path="/ad/:id/update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
