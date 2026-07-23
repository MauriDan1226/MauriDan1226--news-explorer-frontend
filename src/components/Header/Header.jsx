import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import { ROUTES } from '../../utils/constants.js';
import './Header.css';

// Encabezado presente en todas las páginas: logo + menú de navegación.
function Header({ isLoggedIn, onSignInClick, onSignOutClick }) {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to={ROUTES.HOME} className="header__logo link">
          NewsExplorer
        </Link>
        <Navigation
          isLoggedIn={isLoggedIn}
          onSignInClick={onSignInClick}
          onSignOutClick={onSignOutClick}
        />
      </div>
    </header>
  );
}

export default Header;
