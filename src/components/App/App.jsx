import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import PopupWithForm from '../PopupWithForm/PopupWithForm.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { ROUTES } from '../../utils/constants.js';
import { exampleArticles } from '../../utils/mockArticles.js';
import { register, login, logout, getCurrentUser } from '../../utils/auth.js';
import './App.css';

// Componente raíz (funcional). Mantiene el estado de sesión y compone el layout:
// Header + rutas (con ruta protegida) + Footer + popup de autenticación.
function App() {
  // La sesión se restaura de forma síncrona para no redirigir por error al
  // recargar en una ruta protegida.
  const [currentUser, setCurrentUser] = useState(getCurrentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(() => getCurrentUser() !== null);
  const [activePopup, setActivePopup] = useState(null); // 'signin' | 'signup' | null
  const [authError, setAuthError] = useState('');
  const [isLoading] = useState(false);
  // Datos de ejemplo del diseño para poblar la maqueta.
  const [articles] = useState(exampleArticles);
  const [savedArticles] = useState(exampleArticles);

  function openPopup(name) {
    setAuthError('');
    setActivePopup(name);
  }

  function handleClosePopup() {
    setActivePopup(null);
    setAuthError('');
  }

  function handleSwitchPopup() {
    setAuthError('');
    setActivePopup((prev) => (prev === 'signin' ? 'signup' : 'signin'));
  }

  async function handleLogin(values) {
    try {
      const user = await login(values);
      setCurrentUser(user);
      setIsLoggedIn(true);
      handleClosePopup();
    } catch (error) {
      setAuthError(error.message);
    }
  }

  async function handleRegister(values) {
    try {
      // register() inicia sesión automáticamente y devuelve el usuario.
      const user = await register(values);
      setCurrentUser(user);
      setIsLoggedIn(true);
      handleClosePopup();
    } catch (error) {
      setAuthError(error.message);
    }
  }

  function handleLogout() {
    logout();
    setIsLoggedIn(false);
    setCurrentUser(null);
  }

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        userName={currentUser?.name}
        onSignInClick={() => openPopup('signin')}
        onSignOutClick={handleLogout}
      />

      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <Main isLoading={isLoading} isLoggedIn={isLoggedIn} articles={articles} />
          }
        />
        <Route
          path={ROUTES.SAVED_NEWS}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                isLoggedIn={isLoggedIn}
                savedArticles={savedArticles}
                userName={currentUser?.name}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <PopupWithForm
        name={activePopup}
        isOpen={activePopup !== null}
        authError={authError}
        onClose={handleClosePopup}
        onSwitch={handleSwitchPopup}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    </div>
  );
}

export default App;
