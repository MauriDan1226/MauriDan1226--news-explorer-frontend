import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants.js';
import './NotFound.css';

// Página "No encontrado" (ruta comodín "*"). Se prepara por separado, tal como
// recomienda el orden de trabajo de la etapa.
function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__box">
        <div className="not-found__icon" aria-hidden="true" />
        <h1 className="not-found__title">Nada encontrado</h1>
        <p className="not-found__text">
          Lo sentimos, no pudimos encontrar la página que buscas.
        </p>
        <Link to={ROUTES.HOME} className="not-found__link link">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
