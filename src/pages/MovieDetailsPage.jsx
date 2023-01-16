import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useMovieDetails } from '../services/useHooks';
import css from '../pages/HomePage.module.css';
import Loader from 'components/Loader/Loader';
import { getImg } from '../services/apiMDB';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  if (!movieDetails) return <Loader />;

  const { original_title, title, vote_average, overview, genres, poster_path } =
    movieDetails;

  // const posterSrc = poster_path
  //   ? `https://image.tmdb.org/t/p/w500${poster_path}`
  //   : `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png`;

  const voteValue = vote_average
    ? Math.fround(vote_average * 10).toFixed(0)
    : '';

  const genresName = genres ? genres.map(genre => genre.name).join(' ') : '';

  return (
    <section>
      <Link className={css.go__back} to={backLinkHref}>
        Go back 👈
      </Link>
      <div className={css.movie__wrapper}>
        <img src={getImg(poster_path)} alt={original_title} />

        <div>
          <h2>{title}</h2>

          <p>
            User Score:
            {voteValue}%
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>

          <h2>Genres</h2>
          <p>{genresName}</p>

          <p>Additional information</p>
          <ul>
            <li>
              <Link
                state={{ from: backLinkHref }}
                className={css.link}
                to="cast"
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                state={{ from: backLinkHref }}
                className={css.link}
                to="reviews"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
