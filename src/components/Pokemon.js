import '../stylesSheet/Pokemon.scss';
import React, { useState } from 'react';
function Pokemon(props) {
  const [card, setCard] = useState('');

  function handleFav() {
    if (!card) setCard('blue');
    else setCard('');
  }

  const typesList = props.types.map((type, index) => {
    return (
      <li key={index} className="pokeCard__types--type">
        {type}
      </li>
    );
  });
  return (
    <article className={`pokeCard ${card}`} onClick={handleFav}>
      <h2 className="pokeCard__name">{props.name}</h2>
      <img className="pokeCard__image" src={props.img} alt={props.name} />
      <ul className="pokeCard__types">{typesList}</ul>
    </article>
  );
}
export default Pokemon;
