import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants.js';

// Ruta protegida: si no hay sesión iniciada, redirige a la página principal.
// Se usa para envolver las páginas que muestran datos del usuario (p. ej. los
// artículos guardados).
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  return children;
}

export default ProtectedRoute;
