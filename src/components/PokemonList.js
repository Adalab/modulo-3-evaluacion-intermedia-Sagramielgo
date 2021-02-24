import Pokemon from './Pokemon.js';
import '../stylesSheet/PokemonList.scss';
import React, { useState } from 'react';

function PokemonList(props) {
  const [choose, setFav] = useState('Who is your favourite pokemon?');

  const handleChoose = () => {
    props.getShowColor(setFav('HAZ CLICK EN TU FAVORITO'));
  };
  const handleRemove = () => {
    props.getHideColor(setFav('Who is your favourite pokemon?'));
  };
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
      <h1 className="title">{`${choose}`}</h1>
      <ul className="listContainer">{pokeList}</ul>
    </>
  );
}

export default PokemonList;
