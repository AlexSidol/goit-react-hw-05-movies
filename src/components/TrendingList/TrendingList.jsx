import { Link, useLocation } from 'react-router-dom';
import css from '../TrendingList/TrendingList.module.css';

const TrendingList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movie}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movie__wrapper}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h2 className={css.movie__title}>{movie.title}</h2>

            <img
              className={css.movie__img}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
