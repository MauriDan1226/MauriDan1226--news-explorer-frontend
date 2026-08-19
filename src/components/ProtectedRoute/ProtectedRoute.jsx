import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants.js';

// Componente de orden superior (HOC) que protege una ruta.
// Si el usuario no ha iniciado sesión, lo redirige a la página principal y
// abre la ventana emergente de autorización.
function ProtectedRoute({ isLoggedIn, isChecking, onUnauthorized, children }) {
  const shouldRedirect = !isChecking && !isLoggedIn;

  useEffect(() => {
    if (shouldRedirect && typeof onUnauthorized === 'function') {
      onUnauthorized();
    }
  }, [shouldRedirect, onUnauthorized]);

  // Mientras se comprueba el token no se decide nada, para no expulsar al
  // usuario al recargar la página estando autorizado.
  if (isChecking) {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
}

export default ProtectedRoute;
