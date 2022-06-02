import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePokemonPage = () => {
  const params = useParams();
  const { id } = params;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  return (
    <div>
      <h1>{id}</h1>
      {pokemon && (
        <div>
          <img src={pokemon.sprites.front_default} alt={id} />
          <br />
          <strong>Height:</strong> {pokemon.height}ft
        </div>
      )}
    </div>
  );
};

export default SinglePokemonPage;
