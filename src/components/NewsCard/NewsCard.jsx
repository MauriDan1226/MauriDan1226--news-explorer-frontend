import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import './NewsCard.css';

// Tarjeta individual de noticia. Reutilizable:
// - variant="search": botón de guardar (con tooltip si no hay sesión iniciada).
// - variant="saved": etiqueta con la palabra clave y botón de eliminar.
function NewsCard({
  article = {},
  variant = 'search',
  savedArticles = [],
  onSaveArticle,
  onDeleteArticle,
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  const { _id, title, text, source, date, keyword, image, imageUrl, link } = article;
  const isSaved = variant === 'saved';

  // En los resultados de búsqueda, indica si el artículo ya está guardado.
  const savedMatch = savedArticles.find(
    (item) => item.link === link || item.title === title
  );

  function handleAction() {
    if (isSaved) {
      onDeleteArticle?.(_id);
      return;
    }
    if (savedMatch) {
      onDeleteArticle?.(savedMatch._id);
      return;
    }
    // Se guarda la URL pública de la imagen (las de ejemplo se muestran desde
    // un archivo local, pero la API necesita una dirección accesible).
    onSaveArticle?.({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image: imageUrl || image,
    });
  }

  const actionModifier = isSaved
    ? 'news-card__action_type_delete'
    : `news-card__action_type_save${savedMatch ? ' news-card__action_active' : ''}`;

  return (
    <article className="news-card">
      <div className="news-card__image-wrap">
        {image ? (
          <img className="news-card__image" src={image} alt={title || 'Imagen del artículo'} />
        ) : (
          <div className="news-card__image news-card__image_placeholder" aria-hidden="true" />
        )}

        {isSaved && keyword && <span className="news-card__keyword">{keyword}</span>}

        {!isLoggedIn && !isSaved && (
          <span className="news-card__tooltip">Inicia sesión para guardar artículos</span>
        )}

        {isSaved && (
          <span className="news-card__tooltip">Eliminar de guardados</span>
        )}

        <button
          type="button"
          className={`news-card__action button ${actionModifier}`}
          onClick={handleAction}
          aria-label={isSaved ? 'Eliminar de guardados' : 'Guardar artículo'}
        />
      </div>

      <a
        className="news-card__content link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <span className="news-card__date">{date}</span>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <span className="news-card__source">{source}</span>
      </a>
    </article>
  );
}

export default NewsCard;
