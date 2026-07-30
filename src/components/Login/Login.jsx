import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.jsx';
import useFormWithValidation from '../../utils/useFormWithValidation.js';
import './Login.css';

// Ventana modal de inicio de sesión, con validación instantánea de los campos.
function Login({ isOpen, onClose, onLogin, onSwitchToRegister, serverError, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({ email: '', password: '' });

  useEffect(() => {
    if (isOpen) resetForm({ email: '', password: '' });
  }, [isOpen, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    onLogin(values);
  }

  return (
    <PopupWithForm
      name="signin"
      title="Inicia sesión"
      buttonText={isLoading ? 'Iniciando sesión...' : 'Inicia sesión'}
      switchText="Inscribirse"
      isOpen={isOpen}
      isValid={isValid && !isLoading}
      serverError={serverError}
      onClose={onClose}
      onSubmit={handleSubmit}
      onSwitch={onSwitchToRegister}
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
          required
        />
        <span className="popup__error">{errors.password}</span>
      </label>
    </PopupWithForm>
  );
}

export default Login;
