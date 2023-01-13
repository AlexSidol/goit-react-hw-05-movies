import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=fd58d78770f5e002deebabf4164f4fc6';

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day${API_KEY}`);
  return response.data.results.map(({ id, title, poster_path }) => {
    return {
      id,
      title,
      poster_path,
    };
  });
};

export const searchMovies = async inputValue => {
  const response = await axios.get(
    `/search/movie${API_KEY}&query=${inputValue}&language=en-US&page=1`
  );
  return response.data.results.map(({ id, title, poster_path }) => {
    return {
      id,
      title,
      poster_path,
    };
  });
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits${API_KEY}&language=en-US`
  );

  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};
