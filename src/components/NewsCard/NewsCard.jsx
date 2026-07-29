import './NewsCard.css';

// Tarjeta individual de noticia. Reutilizable:
// - variant="search": botón de guardar (con tooltip si no hay sesión).
// - variant="saved": etiqueta de palabra clave + botón de eliminar.
function NewsCard({ article = {}, isLoggedIn = false, variant = 'search' }) {
  const { title, description, source, date, keyword, image } = article;
  const isSaved = variant === 'saved';

  return (
    <article className="news-card">
      <div className="news-card__image-wrap">
        {image ? (
          <img
            className="news-card__image"
            src={image}
            alt={title || 'Imagen del artículo'}
          />
        ) : (
          <div className="news-card__image news-card__image_placeholder" aria-hidden="true" />
        )}

        {isSaved && keyword && <span className="news-card__keyword">{keyword}</span>}

        {!isLoggedIn && !isSaved && (
          <span className="news-card__tooltip">Inicia sesión para guardar artículos</span>
        )}

        <button
          type="button"
          className={`news-card__action button ${
            isSaved ? 'news-card__action_type_delete' : 'news-card__action_type_save'
          }`}
          aria-label={isSaved ? 'Eliminar de guardados' : 'Guardar artículo'}
        />
      </div>

      <div className="news-card__content">
        <span className="news-card__date">{date}</span>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{description}</p>
        <span className="news-card__source">{source}</span>
      </div>
    </article>
  );
}

export default NewsCard;
