import '../stylesSheet/App.scss';
import data from '../data/data.json';
import PokemonList from './PokemonList.js';
import Footer from './Footer.js';
import React, { useState } from 'react';

function App() {
  const [state] = useState(data);
  const [colorData, setColorData] = useState('');
  function handleShowColor() {
    setColorData('bgColor');
  }

  function handleRemoveColor() {
    setColorData('');
  }
  return (
    <div className={`container ${colorData}`}>
      <PokemonList
        pokemons={state}
        getShowColor={handleShowColor}
        getHideColor={handleRemoveColor}
      />
      <Footer />
    </div>
  );
}

export default App;
