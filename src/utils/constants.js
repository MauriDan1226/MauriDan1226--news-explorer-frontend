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

// API propia (backend del proyecto) para autenticación y artículos guardados.
export const MAIN_API_URL = 'http://localhost:3000';

// Cantidad de tarjetas que se muestran al pulsar "Mostrar más".
export const CARDS_PER_PAGE = 3;

// Rutas de la aplicación (evita strings sueltos en los componentes).
export const ROUTES = {
  HOME: '/',
  SAVED_NEWS: '/saved-news',
};
