"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validations/loginSchema";
import axios from "axios";
export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setLoginError("");

    try {
      const response = await axios.post("/api/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      window.location.href = "/dashboard";
      console.log("Login exitoso:");
      alert("Login exitoso");
    } catch (error) {
      // Axios guarda la respuesta del error en error.response
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Ocurrió un error al iniciar sesión";
      setLoginError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

      {loginError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {loginError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="User"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Usuario
          </label>
          <input
            id="User"
            type="number"
            {...register("user")}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.user ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="tu rut"
          />
          {errors.user && (
            <p className="mt-1 text-sm text-red-600">{errors.user.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </div>
      </form>
    </div>
  );
}
