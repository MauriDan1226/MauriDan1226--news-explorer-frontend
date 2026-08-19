import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import { ROUTES } from '../../utils/constants.js';
import './Header.css';

// Encabezado presente en todas las páginas: logo y menú de navegación.
// El estado de la sesión lo obtiene Navigation del contexto global.
function Header({ onSignInClick, onSignOutClick }) {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to={ROUTES.HOME} className="header__logo link">
          NewsExplorer
        </Link>
        <Navigation
          onSignInClick={onSignInClick}
          onSignOutClick={onSignOutClick}
        />
      </div>
    </header>
  );
}

export default Header;
