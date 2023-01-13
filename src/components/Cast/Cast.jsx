import { useParams } from 'react-router-dom';
import { useMovieCredits } from '../../services/useHooks';
import css from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <div>
      <ul className={css.cast__list}>
        {movieCredits.map(cast => {
          return (
            <li key={cast.id}>
              <img
                width={100}
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
              />
              <p className={css.cast__name}>{cast.name}</p>
              <p className={css.cast__name}>Character: {cast.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
