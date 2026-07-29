import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants.js';
import logoutIcon from '../../images/icon-logout.svg';
import './Navigation.css';

// Menú de navegación. El enlace "Artículos guardados" solo aparece con sesión
// iniciada. El botón alterna entre iniciar y cerrar sesión.
function Navigation({ isLoggedIn, userName, onSignInClick, onSignOutClick }) {
  const linkClass = ({ isActive }) =>
    `navigation__link link${isActive ? ' navigation__link_active' : ''}`;

  return (
    <nav className="navigation" aria-label="Navegación principal">
      <ul className="navigation__list list">
        <li className="navigation__item">
          <NavLink to={ROUTES.HOME} end className={linkClass}>
            Inicio
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className="navigation__item">
            <NavLink to={ROUTES.SAVED_NEWS} className={linkClass}>
              Artículos guardados
            </NavLink>
          </li>
        )}

        <li className="navigation__item">
          <button
            type="button"
            className="navigation__auth-button button"
            onClick={isLoggedIn ? onSignOutClick : onSignInClick}
            aria-label={isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
          >
            {isLoggedIn ? userName || 'Cerrar sesión' : 'Iniciar sesión'}
            {isLoggedIn && (
              <img
                className="navigation__auth-icon"
                src={logoutIcon}
                alt=""
                aria-hidden="true"
              />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
