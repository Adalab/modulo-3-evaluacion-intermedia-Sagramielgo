import Pokemon from './Pokemon.js';
import '../stylesSheet/PokemonList.scss';
import React, { useState } from 'react';

function PokemonList(props) {
  const [choose, setFav] = useState('');

  function handleChoose() {
    props.show('HAZ CLICK EN TU FAVORITO');
  }
  function handleRemove() {
    props.hide('');
  }
  const pokeList = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon
          getChoose={handleChoose}
          getRemove={handleRemove}
          name={pokemon.name}
          img={pokemon.url}
          types={pokemon.types}
        />
      </li>
    );
  });
  return (
    <>
      <h1>{`Who's your favourite pokemon? ${choose}`}</h1>
      <ul className="listContainer">{pokeList}</ul>
    </>
  );
}

export default PokemonList;
