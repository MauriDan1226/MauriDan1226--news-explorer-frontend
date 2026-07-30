import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import './SavedNews.css';

// Página de artículos guardados (ruta protegida "/saved-news").
function SavedNews({ savedArticles = [], onDeleteArticle }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader savedArticles={savedArticles} />

      <section className="saved-news__results" aria-label="Artículos guardados">
        <div className="saved-news__container container">
          <NewsCardList
            articles={savedArticles}
            variant="saved"
            onDeleteArticle={onDeleteArticle}
          />
        </div>
      </section>
    </main>
  );
}

export default SavedNews;
