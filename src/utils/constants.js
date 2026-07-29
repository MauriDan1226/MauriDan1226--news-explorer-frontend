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

// API de autenticación (registro/login). Se usa una API temporal creada en
// mockapi.io mientras se decide si construir un backend propio. Se puede
// sobrescribir con la variable de entorno VITE_AUTH_API_URL.
export const AUTH_API_URL =
  import.meta.env.VITE_AUTH_API_URL ??
  'https://6a65c54106b3848d4b86d664.mockapi.io/api/v1';

// Cantidad de tarjetas que se muestran al pulsar "Mostrar más".
export const CARDS_PER_PAGE = 3;

// Rutas de la aplicación (evita strings sueltos en los componentes).
export const ROUTES = {
  HOME: '/',
  SAVED_NEWS: '/saved-news',
};
