import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useMovieDetails } from '../services/useHooks';
import css from '../pages/HomePage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <section>
      <Link className={css.go__back} to={backLinkHref}>
        Go back 👈
      </Link>
      <div className={css.movie__wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
        />

        <div>
          <h2>{movieDetails.title}</h2>

          <p>
            User Score:
            {movieDetails.vote_average
              ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
              : ''}
            %
          </p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>

          <h2>Genres</h2>
          <p>
            {movieDetails.genres
              ? movieDetails.genres.map(genre => genre.name).join(' ')
              : ''}
          </p>

          <p>Additional information</p>
          <ul>
            <li>
              <Link className={css.link} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link className={css.link} to="reviews">
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
