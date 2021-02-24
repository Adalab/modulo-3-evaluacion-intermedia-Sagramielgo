import '../stylesSheet/Pokemon.scss';
import React, { useState } from 'react';
function Pokemon(props) {
  const [card, setCard] = useState('');

  function handleFav() {
    if (!card) setCard('blue');
    else setCard('');
  }

  const typesList = props.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className={`pokeCard ${card}`} onClick={handleFav}>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
      <ul>{typesList}</ul>
    </article>
  );
}
export default Pokemon;
