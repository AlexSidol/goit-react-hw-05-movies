import { useParams } from 'react-router-dom';
import { useMovieCredits } from '../../services/useHooks';
import css from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';
import { getImg } from '../../services/apiMDB';

const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <div>
      <ul className={css.cast__list}>
        {movieCredits.map(({ profile_path, id, name, character }) => {
          return (
            <li key={id}>
              <img width={100} src={getImg(profile_path)} alt={name} />
              <p className={css.cast__name}>{name}</p>
              <p className={css.cast__name}>Character: {character}</p>
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
