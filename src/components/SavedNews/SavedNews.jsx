import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import './SavedNews.css';

// Página de artículos guardados (ruta "/saved-news").
function SavedNews({ savedArticles = [], isLoggedIn = true }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader savedArticles={savedArticles} />

      <section className="saved-news__results" aria-label="Artículos guardados">
        <div className="saved-news__container container">
          <NewsCardList
            articles={savedArticles}
            isLoggedIn={isLoggedIn}
            variant="saved"
          />
        </div>
      </section>
    </main>
  );
}

export default SavedNews;
