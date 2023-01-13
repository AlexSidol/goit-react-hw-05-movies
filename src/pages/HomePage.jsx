import { useTrendingList } from '../services/useHooks';
import css from '../pages/HomePage.module.css';

import TrendingList from 'components/TrendingList/TrendingList';

const HomePage = () => {
  const { trendingMovies } = useTrendingList();
  return (
    <div>
      <h1 className={css.top}>Top films</h1>

      <TrendingList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
