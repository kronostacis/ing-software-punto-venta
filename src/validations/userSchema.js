import * as yup from "yup";

// Esquema de validación con Yup
const CreateUserSchema = yup.object({
  Id_usuario: yup.number().required("El usuario es obligatorio"),
  Nombre: yup.string().required("El nombre es obligatorio").max(40),
  Apellido_1: yup.string().required("El apellido es obligatorio").max(40),
  Apellido_2: yup.string().required("El apellido es obligatorio").max(40),
  Contrasena: yup
    .string()
    .required("La contraseña es obligatorio")
    .min(6)
    .max(40),
  Cargo: yup.number().required("El cargo es obligatorio"),
});

const UpdateUserSchema = yup.object({
  Nombre: yup.string().required("El nombre es obligatorio").max(40),
  Apellido_1: yup.string().required("El apellido es obligatorio").max(40),
  Apellido_2: yup.string().required("El apellido es obligatorio").max(40),
  Cargo: yup.number().required("El cargo es obligatorio"),
});

export { CreateUserSchema, UpdateUserSchema };
