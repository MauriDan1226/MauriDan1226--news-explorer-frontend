import { useEffect } from 'react';
import './PopupWithForm.css';

// Ventana modal reutilizable con formulario. Los campos se pasan como children,
// de modo que Login y Register comparten la misma estructura y estilos.
// Se cierra con la tecla Escape o al hacer clic en el fondo (overlay).
function PopupWithForm({
  name,
  title,
  buttonText,
  switchText,
  isOpen,
  isValid = true,
  serverError,
  onClose,
  onSubmit,
  onSwitch,
  children,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;
    function handleEsc(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        className="popup__container"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          type="button"
          className="popup__close button"
          aria-label="Cerrar"
          onClick={onClose}
        />

        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name={name} onSubmit={onSubmit} noValidate>
          {children}

          {/* Error devuelto por el servidor, encima del botón de envío. */}
          {serverError && <p className="popup__auth-error">{serverError}</p>}

          <button type="submit" className="popup__submit button" disabled={!isValid}>
            {buttonText}
          </button>
        </form>

        {onSwitch && (
          <p className="popup__switch">
            o{' '}
            <button type="button" className="popup__switch-button button" onClick={onSwitch}>
              {switchText}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
