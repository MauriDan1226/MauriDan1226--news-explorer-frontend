import { useEffect, useState } from 'react';
import './PopupWithForm.css';

// Popup reutilizable con formulario de autenticación (iniciar sesión / inscribirse).
// - Campos controlados con validación en tiempo real (required, email, longitud).
// - Muestra errores por campo y un error general de autenticación.
// - Se cierra con Escape o al hacer clic en el fondo (overlay).
function PopupWithForm({
  name,
  isOpen,
  authError,
  onClose,
  onSwitch,
  onLogin,
  onRegister,
}) {
  const isSignup = name === 'signup';

  const [values, setValues] = useState({ email: '', password: '', username: '' });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Reinicia el formulario cada vez que se abre o cambia de modo.
  useEffect(() => {
    if (isOpen) {
      setValues({ email: '', password: '', username: '' });
      setErrors({});
      setIsValid(false);
    }
  }, [isOpen, name]);

  // Cierre con la tecla Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    function handleEsc(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  function handleChange(event) {
    const { name: field, value, validationMessage } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validationMessage }));
    setIsValid(event.target.closest('form').checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    if (isSignup) {
      onRegister({
        name: values.username,
        email: values.email,
        password: values.password,
      });
    } else {
      onLogin({ email: values.email, password: values.password });
    }
  }

  const title = isSignup ? 'Inscribirse' : 'Inicia sesión';
  const submitLabel = isSignup ? 'Inscribirse' : 'Inicia sesión';
  const switchLabel = isSignup ? 'Inicia sesión' : 'Inscribirse';

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
              value={values.email}
              onChange={handleChange}
              required
            />
            <span className="popup__error">{errors.email}</span>
          </label>

          <label className="popup__label">
            Contraseña
            <input
              type="password"
              name="password"
              className="popup__input"
              placeholder="Introduce tu contraseña"
              value={values.password}
              onChange={handleChange}
              minLength={6}
              required
            />
            <span className="popup__error">{errors.password}</span>
          </label>

          {isSignup && (
            <label className="popup__label">
              Nombre de usuario
              <input
                type="text"
                name="username"
                className="popup__input"
                placeholder="Introduce tu nombre de usuario"
                value={values.username}
                onChange={handleChange}
                minLength={2}
                required
              />
              <span className="popup__error">{errors.username}</span>
            </label>
          )}

          {authError && <p className="popup__auth-error">{authError}</p>}

          <button
            type="submit"
            className="popup__submit button"
            disabled={!isValid}
          >
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
