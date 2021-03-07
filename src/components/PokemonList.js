import Pokemon from './Pokemon.js';
import '../stylesSheet/PokemonList.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PokemonList(props) {
  const [choose, setChoose] = useState('Who is your favourite pokemon?');
  const [colorTitle, setColorTitle] = useState('');

  const handleChoose = () => {
    setChoose('HAZ CLICK EN TU FAVORITO');
    setColorTitle('white');
    props.getShowColor();
  };
  const handleRemove = () => {
    setChoose('Who is your favourite pokemon?');
    setColorTitle('');
    props.getHideColor();
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
      <h1 className={`title ${colorTitle}`}>{`${choose}`}</h1>
      <ul className="listContainer">{pokeList}</ul>
    </>
  );
}
PokemonList.propTypes = {
  Pokemons: PropTypes.object,
};
export default PokemonList;
