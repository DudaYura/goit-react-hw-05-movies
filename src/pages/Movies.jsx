import { getBySearch } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import InputForm from 'components/InputForm/InputForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }
    getBySearch(query)
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <main>
      <h2>Search Movies</h2>
      <InputForm onSubmit={handleSubmit} />
      {movies.length === 0 && query ? (
        <p>Sorry, there is no any movie</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </main>
  );
};

export default Movies;
