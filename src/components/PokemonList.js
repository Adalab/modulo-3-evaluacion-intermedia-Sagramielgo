import Pokemon from './Pokemon.js';

function PokemonList(props) {
  const pokeList = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon name={pokemon.name} img={pokemon.url} types={pokemon.types} />
      </li>
    );
  });
  return <ul>{pokeList}</ul>;
}

export default PokemonList;
