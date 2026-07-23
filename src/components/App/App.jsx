import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import SavedNews from '../SavedNews/SavedNews.jsx';
import Footer from '../Footer/Footer.jsx';
import PopupWithForm from '../PopupWithForm/PopupWithForm.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { ROUTES } from '../../utils/constants.js';
import './App.css';

// Componente raíz (funcional). Mantiene el estado global mínimo de la maqueta
// y compone el layout: Header + rutas + Footer + popup de autenticación.
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePopup, setActivePopup] = useState(null); // 'signin' | 'signup' | null
  const [isLoading] = useState(false);
  const [articles] = useState([]);
  const [savedArticles] = useState([]);

  function handleOpenPopup(name) {
    setActivePopup(name);
  }

  function handleClosePopup() {
    setActivePopup(null);
  }

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        onSignInClick={() => handleOpenPopup('signin')}
        onSignOutClick={() => setIsLoggedIn(false)}
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
          element={<SavedNews isLoggedIn={isLoggedIn} savedArticles={savedArticles} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <PopupWithForm
        name={activePopup}
        isOpen={activePopup !== null}
        onClose={handleClosePopup}
      />
    </div>
  );
}

export default App;
