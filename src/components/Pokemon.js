import '../stylesSheet/Pokemon.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  /* select favourites */
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
  const getFav = () => {
    props.getChoose();
  };
  const getNone = () => {
    props.getRemove();
  };
  return (
    <article
      className={`pokeCard ${card}`}
      onClick={handleFav}
      onMouseOver={getFav}
      onMouseOut={getNone}
    >
      <h2 className="pokeCard__name">{props.name}</h2>
      <img className="pokeCard__image" src={props.img} alt={props.name} />
      <ul className="pokeCard__types">{typesList}</ul>
    </article>
  );
}
Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Pokemon;
