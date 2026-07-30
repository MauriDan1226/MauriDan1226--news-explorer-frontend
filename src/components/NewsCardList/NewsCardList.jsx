import NewsCard from '../NewsCard/NewsCard.jsx';
import './NewsCardList.css';

// Lista/grid de tarjetas de noticias. Reutilizable en la búsqueda ("search")
// y en los artículos guardados ("saved").
function NewsCardList({
  articles = [],
  variant = 'search',
  savedArticles = [],
  onSaveArticle,
  onDeleteArticle,
}) {
  return (
    <div className="news-card-list">
      {variant === 'search' && (
        <h2 className="news-card-list__title">Resultados de la búsqueda</h2>
      )}

      <ul className="news-card-list__grid list">
        {articles.map((article, index) => (
          <li className="news-card-list__item" key={article._id ?? index}>
            <NewsCard
              article={article}
              variant={variant}
              savedArticles={savedArticles}
              onSaveArticle={onSaveArticle}
              onDeleteArticle={onDeleteArticle}
            />
          </li>
        ))}
      </ul>

      {variant === 'search' && articles.length > 0 && (
        <button type="button" className="news-card-list__more button">
          Mostrar más
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
