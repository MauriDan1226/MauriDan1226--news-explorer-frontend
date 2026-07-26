// Autenticación (mock local basado en localStorage).
//
// Permite registrar e iniciar sesión sin backend, para que el flujo funcione en
// la demo. Las funciones devuelven promesas a propósito, de modo que migrar a una
// API real (mockapi.io con VITE_AUTH_API_URL, o un backend propio) sea directo:
// bastará cambiar el cuerpo por llamadas `fetch` sin tocar los componentes.

const USERS_KEY = 'news-explorer.users';
const SESSION_KEY = 'news-explorer.session';

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Nunca exponemos la contraseña fuera de este módulo.
function publicUser({ id, name, email }) {
  return { id, name, email };
}

export function register({ name, email, password }) {
  return new Promise((resolve, reject) => {
    const users = readUsers();
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      reject(new Error('Ya existe una cuenta con este correo electrónico.'));
      return;
    }
    const user = { id: Date.now().toString(), name, email, password };
    users.push(user);
    writeUsers(users);
    resolve(publicUser(user));
  });
}

export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    const user = readUsers().find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) {
      reject(new Error('Correo electrónico o contraseña incorrectos.'));
      return;
    }
    localStorage.setItem(SESSION_KEY, user.id);
    resolve(publicUser(user));
  });
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

// Devuelve el usuario de la sesión activa (o null). Se lee de forma síncrona para
// poder restaurar la sesión antes del primer render y evitar parpadeos.
export function getCurrentUser() {
  const id = localStorage.getItem(SESSION_KEY);
  if (!id) return null;
  const user = readUsers().find((u) => u.id === id);
  return user ? publicUser(user) : null;
}
