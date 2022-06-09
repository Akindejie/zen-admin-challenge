import Movie from './Movie';

const MovieList = ({ results }) => {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);
  return (
    <div className="result">
      {data?.map((item) => (
        <Movie key={item.imdbID} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
