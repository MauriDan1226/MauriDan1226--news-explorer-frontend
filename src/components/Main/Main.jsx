import SearchForm from '../SearchForm/SearchForm.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import About from '../About/About.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import './Main.css';

// Página principal (ruta "/"): hero con buscador, resultados y sección About.
function Main({
  isLoading,
  articles,
  savedArticles = [],
  onSaveArticle,
  onDeleteArticle,
}) {
  const hasResults = Array.isArray(articles) && articles.length > 0;

  return (
    <main className="main">
      <section className="search" aria-label="Búsqueda de noticias">
        <div className="search__container container">
          <h1 className="search__title">¿Qué está pasando en el mundo?</h1>
          <p className="search__subtitle">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
            cuenta personal.
          </p>
          <SearchForm />
        </div>
      </section>

      {(isLoading || hasResults) && (
        <section className="results" aria-label="Resultados de la búsqueda">
          <div className="results__container container">
            {isLoading ? (
              <Preloader />
            ) : (
              <NewsCardList
                articles={articles}
                variant="search"
                savedArticles={savedArticles}
                onSaveArticle={onSaveArticle}
                onDeleteArticle={onDeleteArticle}
              />
            )}
          </div>
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
