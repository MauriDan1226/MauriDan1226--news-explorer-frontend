import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import InfoTooltip from '../InfoTooltip/InfoTooltip.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { ROUTES } from '../../utils/constants.js';
import { exampleArticles } from '../../utils/mockArticles.js';
import * as mainApi from '../../utils/MainApi.js';
import './App.css';

// Componente raíz. Mantiene el estado global de la sesión (currentUser),
// realiza las solicitudes asíncronas al back-end y compone el layout.
function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Evita redirigir desde una ruta protegida antes de comprobar el token.
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  const [activePopup, setActivePopup] = useState(null); // 'signin' | 'signup' | 'success'
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [articles] = useState(exampleArticles);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading] = useState(false);

  // Descarga los artículos guardados del usuario (GET /articles).
  const loadSavedArticles = useCallback(async () => {
    try {
      const data = await mainApi.getSavedArticles();
      setSavedArticles(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('No se pudieron cargar los artículos guardados:', error.message);
    }
  }, []);

  // Al montar la app: si hay un token guardado, se restaura la sesión.
  useEffect(() => {
    async function checkToken() {
      if (!mainApi.getToken()) {
        setIsCheckingToken(false);
        return;
      }
      try {
        const user = await mainApi.getCurrentUser();
        setCurrentUser(user);
        setIsLoggedIn(true);
        await loadSavedArticles();
      } catch (error) {
        // Token caducado o inválido: se descarta.
        mainApi.removeToken();
      } finally {
        setIsCheckingToken(false);
      }
    }
    checkToken();
  }, [loadSavedArticles]);

  function openPopup(name) {
    setServerError('');
    setActivePopup(name);
  }

  function handleClosePopup() {
    setActivePopup(null);
    setServerError('');
  }

  // POST /signup — al completarse, muestra la ventana de confirmación.
  async function handleRegister({ email, password, name }) {
    setIsSubmitting(true);
    setServerError('');
    try {
      await mainApi.register({ email, password, name });
      setActivePopup('success');
    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  // POST /signin — guarda el JWT en localStorage y carga los datos del usuario.
  async function handleLogin({ email, password }) {
    setIsSubmitting(true);
    setServerError('');
    try {
      const { token } = await mainApi.authorize({ email, password });
      mainApi.setToken(token);

      const user = await mainApi.getCurrentUser();
      setCurrentUser(user);
      setIsLoggedIn(true);
      await loadSavedArticles();

      handleClosePopup();
    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleLogout() {
    mainApi.removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    setSavedArticles([]);
    navigate(ROUTES.HOME);
  }

  // DELETE /articles/:articleId
  async function handleDeleteArticle(articleId) {
    try {
      await mainApi.deleteArticle(articleId);
      setSavedArticles((prev) => prev.filter((item) => item._id !== articleId));
    } catch (error) {
      console.error('No se pudo eliminar el artículo:', error.message);
    }
  }

  // POST /articles
  async function handleSaveArticle(article) {
    if (!isLoggedIn) {
      openPopup('signin');
      return;
    }
    try {
      const saved = await mainApi.saveArticle(article);
      setSavedArticles((prev) => [...prev, saved]);
    } catch (error) {
      console.error('No se pudo guardar el artículo:', error.message);
    }
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page">
        <Header
          onSignInClick={() => openPopup('signin')}
          onSignOutClick={handleLogout}
        />

        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <Main
                isLoading={isLoading}
                articles={articles}
                savedArticles={savedArticles}
                onSaveArticle={handleSaveArticle}
                onDeleteArticle={handleDeleteArticle}
              />
            }
          />
          <Route
            path={ROUTES.SAVED_NEWS}
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                isChecking={isCheckingToken}
                onUnauthorized={() => openPopup('signin')}
              >
                <SavedNews
                  savedArticles={savedArticles}
                  onDeleteArticle={handleDeleteArticle}
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        <Login
          isOpen={activePopup === 'signin'}
          isLoading={isSubmitting}
          serverError={serverError}
          onClose={handleClosePopup}
          onLogin={handleLogin}
          onSwitchToRegister={() => openPopup('signup')}
        />

        <Register
          isOpen={activePopup === 'signup'}
          isLoading={isSubmitting}
          serverError={serverError}
          onClose={handleClosePopup}
          onRegister={handleRegister}
          onSwitchToLogin={() => openPopup('signin')}
        />

        <InfoTooltip
          isOpen={activePopup === 'success'}
          onClose={handleClosePopup}
          onSwitchToLogin={() => openPopup('signin')}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
