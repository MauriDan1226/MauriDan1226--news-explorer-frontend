import './SavedNewsHeader.css';

// Cabecera de la página de guardados: resumen y palabras clave.
function SavedNewsHeader({ savedArticles = [] }) {
  const count = savedArticles.length;
  const plural = count === 1 ? 'artículo guardado' : 'artículos guardados';

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container container">
        <p className="saved-news-header__subtitle">Artículos guardados</p>
        <h1 className="saved-news-header__title">
          {`Mauricio, tienes ${count} ${plural}`}
        </h1>
        <p className="saved-news-header__keywords">
          Por palabras clave:{' '}
          <span className="saved-news-header__keywords-bold">
            Aún no hay palabras clave
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
