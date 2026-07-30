import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.jsx';
import useFormWithValidation from '../../utils/useFormWithValidation.js';
import './Register.css';

// Ventana modal de registro. La validación es instantánea: el botón permanece
// inactivo mientras algún campo esté vacío o no sea válido.
function Register({ isOpen, onClose, onRegister, onSwitchToLogin, serverError, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({ email: '', password: '', name: '' });

  // Limpia el formulario cada vez que se abre la ventana.
  useEffect(() => {
    if (isOpen) resetForm({ email: '', password: '', name: '' });
  }, [isOpen, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    onRegister(values);
  }

  return (
    <PopupWithForm
      name="signup"
      title="Inscribirse"
      buttonText={isLoading ? 'Registrando...' : 'Inscribirse'}
      switchText="Iniciar sesión"
      isOpen={isOpen}
      isValid={isValid && !isLoading}
      serverError={serverError}
      onClose={onClose}
      onSubmit={handleSubmit}
      onSwitch={onSwitchToLogin}
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
          minLength={8}
          required
        />
        <span className="popup__error">{errors.password}</span>
      </label>

      <label className="popup__label">
        Nombre de usuario
        <input
          type="text"
          name="name"
          className="popup__input"
          placeholder="Introduce tu nombre de usuario"
          value={values.name}
          onChange={handleChange}
          minLength={2}
          maxLength={30}
          required
        />
        <span className="popup__error">{errors.name}</span>
      </label>
    </PopupWithForm>
  );
}

export default Register;
