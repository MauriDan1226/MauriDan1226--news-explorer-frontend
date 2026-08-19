import { useState } from 'react';
import './SearchForm.css';

// Formulario de búsqueda. Controla su propio input y notifica al padre en submit.
function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (typeof onSearch === 'function') {
      onSearch(keyword.trim());
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="keyword"
        className="search-form__input"
        placeholder="Introduce un tema"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        aria-label="Tema de búsqueda"
        required
      />
      <button type="submit" className="search-form__button button">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
