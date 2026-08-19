import { useState, useCallback } from 'react';

// Hook de validación de formularios en React.
// Comprueba la validez de cada campo con la API de validación del navegador
// (required, type="email", minLength...) cada vez que el usuario escribe un
// carácter, guarda los mensajes de error y expone si el formulario es válido.
export default function useFormWithValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Validación instantánea: se ejecuta en cada pulsación de tecla.
  function handleChange(event) {
    const { name, value, validationMessage, form } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validationMessage }));
    setIsValid(form.checkValidity());
  }

  // Restablece el formulario (se usa al abrir o cambiar de ventana modal).
  const resetForm = useCallback(
    (newValues = initialValues, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { values, errors, isValid, handleChange, resetForm };
}
