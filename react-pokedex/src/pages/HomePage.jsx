import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [list, setList] = useState([]);

  /*
  useEffect takes a function (effect) and a dependency array as arguments
  The function will be executed on first render,
  as well as on any render in which the value of one of
  the dependencies in the dependency array has changed
  */
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results);
      });
  }, []);

  return (
    <div>
      <ul>
        {list.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
