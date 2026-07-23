// Módulo de llamadas a la API de noticias (NewsAPI).
// En la Etapa 1.1 (maquetado) todavía no se conecta con la UI, pero se deja
// lista la infraestructura para las siguientes etapas.

import { NEWS_API } from './constants.js';

// Helper: comprueba la respuesta y devuelve JSON o rechaza con el error.
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Error: ${res.status}`));
}

// Busca artículos por palabra clave en un rango de fechas (últimos 7 días).
export function searchNews(keyword) {
  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - 7);

  const params = new URLSearchParams({
    q: keyword,
    from: from.toISOString().slice(0, 10),
    to: to.toISOString().slice(0, 10),
    pageSize: String(NEWS_API.pageSize),
    apiKey: NEWS_API.apiKey,
  });

  return fetch(`${NEWS_API.baseUrl}?${params.toString()}`).then(checkResponse);
}
