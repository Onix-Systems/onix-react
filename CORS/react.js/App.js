// install
// npm install axios

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/5')
      .then(response => setPokemon(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {pokemon ? (
        <div>
          <div>Name: {pokemon.name}</div>
          <div>Image: <img alt={pokemon.name}
           src={pokemon.sprites.front_default} 
        /></div>
        </div>
      ) : ( <div>Loading...</div> )
      }
    </div>
  );
}

export default App;
