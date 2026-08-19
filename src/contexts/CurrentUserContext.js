import { createContext } from 'react';

// Variable de estado global con los datos del usuario que ha iniciado sesión.
// Se inserta en App mediante <CurrentUserContext.Provider> y se consume desde
// cualquier componente con useContext(CurrentUserContext).
const CurrentUserContext = createContext({
  currentUser: null,
  isLoggedIn: false,
});

export default CurrentUserContext;
