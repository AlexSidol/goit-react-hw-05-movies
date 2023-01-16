import * as API from '../services/apiMDB';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(ret => setMovies(ret));
  }, []);

  return { trendingMovies };
};

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(ret => setMovieDetails(ret));
  }, [movieId]);

  return { movieDetails };
};

export const useMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    API.getMovieCredits(movieId).then(ret => setMovieCredits(ret));
  }, [movieId]);
  return { movieCredits };
};

export const useMovieReviews = movieId => {
  const [movieReviews, setReviews] = useState([]);

  useEffect(() => {
    API.getMoviesReviews(movieId).then(ret => setReviews(ret));
  }, [movieId]);
  return { movieReviews };
};

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.searchMovies(input).then(ret => setMovies(ret));
  }, [input]);
  return { movies };
};
