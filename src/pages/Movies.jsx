import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../services/apiMDB';
import css from '../pages/HomePage.module.css';
import TrendingList from '../components/TrendingList/TrendingList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target[0].value });

    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.searchMovies(movieTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div className={css.search__blok}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          autoComplete="off"
          autoFocus
        />

        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <TrendingList movies={movies} />}
    </div>
  );
};

export default Movies;
