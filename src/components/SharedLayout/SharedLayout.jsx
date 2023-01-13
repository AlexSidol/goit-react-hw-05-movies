import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from '../SharedLayout/SharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  &.active {
    color: #07171f;
    border-bottom: 3px solid #07171f;
  }

  :hover {
    color: #205670;
  }
`;

const SharedLayout = () => {
  return (
    <section className={css.section}>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <StyledLink to="/" end>
            Home Page
          </StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <ToastContainer /> */}
    </section>
  );
};

export default SharedLayout;
