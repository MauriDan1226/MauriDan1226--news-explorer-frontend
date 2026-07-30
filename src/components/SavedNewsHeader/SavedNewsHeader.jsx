import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import './SavedNewsHeader.css';

// Ordena las palabras clave por popularidad (de más a menos artículos) y
// construye el texto según la cantidad:
// - 3 o menos: se muestran todas.
// - más de 3: las dos primeras y el número de palabras clave restantes.
export function formatKeywords(articles) {
  const counts = new Map();
  articles.forEach(({ keyword }) => {
    if (!keyword) return;
    counts.set(keyword, (counts.get(keyword) || 0) + 1);
  });

  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([keyword]) => keyword);

  if (sorted.length === 0) return 'Aún no hay palabras clave';
  if (sorted.length <= 3) return sorted.join(', ');

  const rest = sorted.length - 2;
  return `${sorted[0]}, ${sorted[1]} y ${rest} más`;
}

// Cabecera de la página de guardados: resumen y palabras clave.
function SavedNewsHeader({ savedArticles = [] }) {
  const { currentUser } = useContext(CurrentUserContext);

  const count = savedArticles.length;
  const plural = count === 1 ? 'artículo guardado' : 'artículos guardados';
  const userName = currentUser?.name || 'Usuario';

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container container">
        <p className="saved-news-header__subtitle">Artículos guardados</p>
        <h1 className="saved-news-header__title">
          {`${userName}, tienes ${count} ${plural}`}
        </h1>
        <p className="saved-news-header__keywords">
          Por palabras clave:{' '}
          <span className="saved-news-header__keywords-bold">
            {formatKeywords(savedArticles)}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
