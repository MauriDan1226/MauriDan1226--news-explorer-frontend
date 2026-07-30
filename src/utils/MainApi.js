// Solicitudes a nuestro propio back-end (API de News Explorer).
// Todas son asíncronas y devuelven promesas. Las rutas protegidas envían el JWT
// guardado en localStorage en la cabecera Authorization.

import { MAIN_API_URL, JWT_STORAGE_KEY } from './constants.js';

// Comprueba la respuesta: devuelve el JSON o rechaza con el mensaje del servidor.
async function checkResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (res.ok) return data;
  return Promise.reject(new Error(data.message || `Error ${res.status}`));
}

export function getToken() {
  return localStorage.getItem(JWT_STORAGE_KEY);
}

export function setToken(token) {
  localStorage.setItem(JWT_STORAGE_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(JWT_STORAGE_KEY);
}

// Cabeceras con el token de autorización para las rutas protegidas.
function authHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
}

/* ───────── Autenticación (rutas públicas) ───────── */

// POST /signup — registra un usuario.
export function register({ email, password, name }) {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
}

// POST /signin — inicia sesión y devuelve { token }.
export function authorize({ email, password }) {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

/* ───────── Usuario (ruta protegida) ───────── */

// GET /users/me — datos del usuario conectado (correo y nombre).
export function getCurrentUser() {
  return fetch(`${MAIN_API_URL}/users/me`, {
    headers: authHeaders(),
  }).then(checkResponse);
}

/* ───────── Artículos (rutas protegidas) ───────── */

// GET /articles — artículos guardados por el usuario.
export function getSavedArticles() {
  return fetch(`${MAIN_API_URL}/articles`, {
    headers: authHeaders(),
  }).then(checkResponse);
}

// POST /articles — guarda un artículo.
export function saveArticle(article) {
  return fetch(`${MAIN_API_URL}/articles`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(article),
  }).then(checkResponse);
}

// DELETE /articles/:articleId — elimina un artículo guardado.
export function deleteArticle(articleId) {
  return fetch(`${MAIN_API_URL}/articles/${articleId}`, {
    method: 'DELETE',
    headers: authHeaders(),
  }).then(checkResponse);
}
