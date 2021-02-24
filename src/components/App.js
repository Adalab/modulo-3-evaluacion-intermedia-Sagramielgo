import '../stylesSheet/App.scss';
import data from '../data/data.json';
import PokemonList from './PokemonList.js';
import React, { useState } from 'react';

function App() {
  const [state] = useState(data);

  return (
    <div>
      <PokemonList pokemons={state} />
    </div>
  );
}

export default App;
