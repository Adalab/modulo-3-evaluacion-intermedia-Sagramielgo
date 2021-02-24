import Pokemon from './Pokemon.js';
import '../stylesSheet/PokemonList.scss';

function PokemonList(props) {
  const pokeList = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon name={pokemon.name} img={pokemon.url} types={pokemon.types} />
      </li>
    );
  });
  return <ul className="listContainer">{pokeList}</ul>;
}

export default PokemonList;
