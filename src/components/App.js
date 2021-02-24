import React, { Component } from 'react';
import '../stylesSheet/App.scss';
import data from '../data/data.json';
import PokemonList from './PokemonList.js';

class App extends Component {
  /*  state = { data }; */
  render() {
    console.log(data);
    return (
      <div>
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
