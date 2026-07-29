// Autenticación contra una API REST (mockapi.io).
//
// mockapi es un CRUD de prueba: no valida contraseñas ni emite tokens, así que
// el registro comprueba que el email no exista y el login descarga el usuario por
// email y compara la contraseña en el cliente. La sesión se guarda en localStorage.
// Cuando exista un backend real, solo hay que cambiar este módulo.

import { AUTH_API_URL } from './constants.js';

const SESSION_KEY = 'news-explorer.session';

function checkResponse(res) {
  if (res.ok) return res.json();
  return Promise.reject(new Error(`Error ${res.status}`));
}

// Nunca exponemos la contraseña fuera de este módulo.
function publicUser({ id, name, email }) {
  return { id, name, email };
}

function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser(user)));
}

// Busca usuarios por email. Filtra en el cliente por coincidencia exacta y tolera
// el 404 que mockapi devuelve cuando no hay resultados.
async function findUsersByEmail(email) {
  const res = await fetch(`${AUTH_API_URL}/users?email=${encodeURIComponent(email)}`);
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`Error ${res.status}`);
  const data = await res.json();
  const list = Array.isArray(data) ? data : [];
  return list.filter((u) => (u.email || '').toLowerCase() === email.toLowerCase());
}

export async function register({ name, email, password }) {
  const existing = await findUsersByEmail(email);
  if (existing.length > 0) {
    throw new Error('Ya existe una cuenta con este correo electrónico.');
  }
  const created = await fetch(`${AUTH_API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
  saveSession(created);
  return publicUser(created);
}

export async function login({ email, password }) {
  const users = await findUsersByEmail(email);
  const user = users.find((u) => u.password === password);
  if (!user) {
    throw new Error('Correo electrónico o contraseña incorrectos.');
  }
  saveSession(user);
  return publicUser(user);
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

// Devuelve el usuario de la sesión activa (o null), leído de forma síncrona para
// restaurar la sesión antes del primer render y evitar parpadeos/redirecciones.
export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
  } catch {
    return null;
  }
}
