import { useEffect } from 'react';
import './PopupWithForm.css';

// Popup reutilizable con formulario (iniciar sesión / registrarse).
// Se cierra con la tecla Escape o al hacer clic en el overlay.
function PopupWithForm({ name, isOpen, onClose, onSubmit, onSwitch, children }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function handleEsc(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const isSignup = name === 'signup';
  const title = isSignup ? 'Inscribirse' : 'Inicia sesión';
  const submitLabel = isSignup ? 'Inscribirse' : 'Inicia sesión';
  const switchLabel = isSignup ? 'Inicia sesión' : 'Inscribirse';

  function handleSubmit(event) {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit();
    }
  }

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

        <form
          className="popup__form"
          name={name || 'auth'}
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="popup__label">
            Correo electrónico
            <input
              type="email"
              name="email"
              className="popup__input"
              placeholder="Introduce tu correo electrónico"
              required
            />
            <span className="popup__error" />
          </label>

          <label className="popup__label">
            Contraseña
            <input
              type="password"
              name="password"
              className="popup__input"
              placeholder="Introduce tu contraseña"
              minLength={6}
              required
            />
            <span className="popup__error" />
          </label>

          {isSignup && (
            <label className="popup__label">
              Nombre de usuario
              <input
                type="text"
                name="username"
                className="popup__input"
                placeholder="Introduce tu nombre de usuario"
                required
              />
              <span className="popup__error" />
            </label>
          )}

          {children}

          <button type="submit" className="popup__submit button">
            {submitLabel}
          </button>
        </form>

        <p className="popup__switch">
          o{' '}
          <button
            type="button"
            className="popup__switch-button button"
            onClick={onSwitch}
          >
            {switchLabel}
          </button>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;
