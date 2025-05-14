import * as yup from "yup";

// Esquema de validación con Yup
const loginSchema = yup.object({
  user: yup.number().required("El usuario es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export { loginSchema };
