function Pokemon(props) {
  const typesList = props.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className="">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
      <ul>{typesList}</ul>
    </article>
  );
}

export default Pokemon;
