const Movie = (props) => {
  const { movie } = props;
  return (
    <div>
      <figure>
        <img src={movie.Poster} alt={movie.Title} />
      </figure>
      <h4>{movie.Title}</h4>
      <h4>
        <b>Type: </b>
        {movie.Type}
      </h4>
      <span>
        <b>Year:</b>
        {movie.Year}
      </span>
    </div>
  );
};

export default Movie;
