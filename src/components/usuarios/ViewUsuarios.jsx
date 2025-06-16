"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserSchema } from "@/validations/userSchema";
import axios from "axios";

export default function ViewUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Error, setError] = useState("");

  const fetchUsuarios = async () => {
    try {
      const res = await axios.get("/api/usuarios");
      if (res.status === 200) {
        setUsuarios(res.data);
      } else {
        console.error("Error al obtener los usuarios");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const obtenerRol = (id) => {
    switch (id) {
      case 1:
        return "Administrador";
      case 2:
        return "Dueño";
      case 3:
        return "Cajero";
      default:
        return "Desconocido";
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateUserSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post("/api/usuarios", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      await fetchUsuarios(); // 🔄 Recargar usuarios
    } catch (error) {
      // Axios guarda la respuesta del error en error.response
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Ocurrió un error al crear el usuario";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEstadoChange = async (id, nuevoEstado) => {
    try {
      const res = await axios.put(`/api/usuarios/${id}/estado`, {
        Id_estado_usuario: nuevoEstado,
      });

      console.log("Estado del usuario actualizado:", res.data);

      await fetchUsuarios();
    } catch (error) {
      console.error("Error al cambiar estado del usuario", error);
    }
  };

  return (
    <div className="p-4">
      {Error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{Error}</div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">Crear Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="Id_usuario"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Id Usuario
            </label>
            <input
              id="Id_usuario"
              type="number"
              {...register("Id_usuario")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.Id_usuario ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="El rut de la persona"
            />
            {errors.Id_usuario && (
              <p className="mt-1 text-sm text-red-600">
                {errors.Id_usuario.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="Nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              id="Nombre"
              type="text"
              {...register("Nombre")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.Nombre ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Nombre del usuario"
            />
            {errors.Nombre && (
              <p className="mt-1 text-sm text-red-600">
                {errors.Nombre.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="Primer_Apellido"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Primer Apellido
            </label>
            <input
              id="Primer_Apellido"
              type="text"
              {...register("Apellido_1")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.Apellido_1 ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Primer apellido del usuario"
            />
            {errors.Apellido_1 && (
              <p className="mt-1 text-sm text-red-600">
                {errors.Apellido_1.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="Segundo_Apellido"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Segundo Apellido
            </label>
            <input
              id="Segundo_Apellido"
              type="text"
              {...register("Apellido_2")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.Apellido_2 ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Segundo apellido del usuario"
            />
            {errors.Apellido_2 && (
              <p className="mt-1 text-sm text-red-600">
                {errors.Apellido_2.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="Cargo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Selecciona un cargo:
            </label>
            <select
              id="Cargo"
              {...register("Cargo")}
              className={`block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.Cargo ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">-- Selecciona --</option>
              <option value="1">Administrador</option>
              <option value="2">Dueño</option>
              <option value="3">Cajero</option>
            </select>
            {errors.Cargo && (
              <p className="mt-1 text-sm text-red-600">
                {errors.Cargo.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isSubmitting ? "Creando usuario..." : "Crear Usuario"}
            </button>
          </div>
        </form>
      </div>

      <h2 className="text-2xl font-bold mb-4">Tabla de Usuarios</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
          <thead>
            <tr className="bg-black text-left text-sm font-semibold text-white">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Primer Apellido</th>
              <th className="px-4 py-2 border-b">Segundo Apellido</th>
              <th className="px-4 py-2 border-b">Cargo</th>
              <th className="px-4 py-2 border-b">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.Id_usuario} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{usuario.Id_usuario}</td>
                <td className="px-4 py-2 border-b">{usuario.Nombre}</td>
                <td className="px-4 py-2 border-b">{usuario.Apellido_1}</td>
                <td className="px-4 py-2 border-b">{usuario.Apellido_2}</td>
                <td className="px-4 py-2 border-b">
                  {obtenerRol(usuario.Cargo)}
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      window.location.href = `/usuarios/${usuario.Id_usuario}`;
                    }}
                  >
                    Editar
                  </button>

                  <UserAccessToggle
                    usuario={usuario}
                    onToggle={handleEstadoChange}
                  />

                  <button className="ml-2 text-red-600 hover:text-red-800">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UserAccessToggle({ usuario, onToggle }) {
  const [isActive, setIsActive] = useState(usuario.Id_estado_usuario === 1);

  useEffect(() => {
    // Sincroniza el estado si cambia desde fuera
    setIsActive(usuario.Id_estado_usuario === 1);
  }, [usuario.Id_estado_usuario]);

  const handleToggle = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    const nuevoIdEstado = newStatus ? 1 : 0;
    onToggle?.(usuario.Id_usuario, nuevoIdEstado);
  };

  return (
    <div className="flex items-center gap-4">
      <span
        className={`text-sm font-medium ${
          isActive ? "text-green-600" : "text-red-600"
        }`}
      >
        {isActive ? "Activo (Acceso permitido)" : "Inactivo (Sin acceso)"}
      </span>
      <button
        onClick={handleToggle}
        className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ease-in-out ${
          isActive ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
            isActive ? "translate-x-7" : ""
          }`}
        ></div>
      </button>
    </div>
  );
}
