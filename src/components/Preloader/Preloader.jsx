import './Preloader.css';

// Preloader: indicador de carga mientras se realiza la búsqueda en la API.
function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <div className="preloader__circle" />
      <p className="preloader__text">Buscando noticias...</p>
    </div>
  );
}

export default Preloader;
