import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { ROUTES } from '../../utils/constants.js';
import logoutIcon from '../../images/icon-logout.svg';
import './Navigation.css';

// Menú de navegación con dos estados:
// - Sin sesión: solo el botón "Iniciar sesión".
// - Con sesión: enlace "Artículos guardados" y botón para cerrar sesión
//   (muestra el nombre del usuario junto al icono de salida).
function Navigation({ onSignInClick, onSignOutClick }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

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
            {isLoggedIn ? currentUser?.name || 'Cerrar sesión' : 'Iniciar sesión'}
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
