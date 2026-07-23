import './SavedNewsHeader.css';

// Construye el texto de palabras clave al estilo del diseño:
// "Naturaleza, Yellowstone, y 2 más".
function formatKeywords(keywords) {
  if (keywords.length === 0) return 'Aún no hay palabras clave';
  if (keywords.length <= 2) return keywords.join(', ');
  const rest = keywords.length - 2;
  return `${keywords[0]}, ${keywords[1]}, y ${rest} más`;
}

// Cabecera de la página de guardados: resumen y palabras clave.
function SavedNewsHeader({ savedArticles = [], userName = 'Mauricio' }) {
  const count = savedArticles.length;
  const plural = count === 1 ? 'artículo guardado' : 'artículos guardados';
  const keywords = [...new Set(savedArticles.map((a) => a.keyword).filter(Boolean))];

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
            {formatKeywords(keywords)}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
