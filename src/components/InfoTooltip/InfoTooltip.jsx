import { useEffect } from 'react';
import './InfoTooltip.css';

// Ventana emergente que confirma que el registro se ha completado y ofrece
// iniciar sesión.
function InfoTooltip({ isOpen, onClose, onSwitchToLogin }) {
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
        className="popup__container info-tooltip"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Registro completado"
      >
        <button
          type="button"
          className="popup__close button"
          aria-label="Cerrar"
          onClick={onClose}
        />

        <h2 className="info-tooltip__title">¡El registro se ha completado con éxito!</h2>

        <button
          type="button"
          className="info-tooltip__link button"
          onClick={onSwitchToLogin}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default InfoTooltip;
