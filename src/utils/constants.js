// Constantes reutilizables de la aplicación.
// Centraliza URLs, claves y valores mágicos para no repetirlos en el código.

// API de terceros para buscar noticias (NewsAPI). Reemplaza la API key real
// desde una variable de entorno (import.meta.env.VITE_NEWS_API_KEY) en producción.
export const NEWS_API = {
  baseUrl: 'https://newsapi.org/v2/everything',
  // La API key NO debe subirse al repositorio. Usa un archivo .env local.
  apiKey: import.meta.env.VITE_NEWS_API_KEY ?? '',
  pageSize: 100,
};

// Back-end propio del proyecto (autenticación y artículos guardados).
// Se puede sobrescribir con la variable de entorno VITE_MAIN_API_URL para
// apuntar a un servidor local durante el desarrollo.
export const MAIN_API_URL =
  import.meta.env.VITE_MAIN_API_URL ??
  'https://news-explorer-api.chickenkiller.com';

// Clave con la que se guarda el JWT en localStorage.
export const JWT_STORAGE_KEY = 'news-explorer.jwt';

// Cantidad de tarjetas que se muestran al pulsar "Mostrar más".
export const CARDS_PER_PAGE = 3;

// Rutas de la aplicación (evita strings sueltos en los componentes).
export const ROUTES = {
  HOME: '/',
  SAVED_NEWS: '/saved-news',
};
