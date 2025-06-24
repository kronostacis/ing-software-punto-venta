"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateLoteSchema } from "@/validations/loteSchema";
import axios from "axios";

export default function ViewLotes() {
  const [lotes, setLotes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(CreateLoteSchema),
  });

  const fetchLotes = async () => {
    try {
      const res = await axios.get("/api/lote_productos");
      if (res.status === 200) {
        setLotes(res.data);
      }
    } catch (error) {
      console.error("Error al obtener lotes:", error);
    }
  };

  useEffect(() => {
    fetchLotes();
    const today = new Date().toISOString().split("T")[0];
    setValue("Fecha", today);
  }, [setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/lote_productos", data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess("Lote agregado correctamente.");
        reset();
        setValue("Fecha", new Date().toISOString().split("T")[0]);
        await fetchLotes();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al agregar lote.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmacion = window.confirm("¿Deseas eliminar este lote?");
    if (!confirmacion) return;

    try {
      const res = await axios.delete(`/api/lote_productos/${id}`);
      if (res.status === 200) {
        alert("Lote eliminado correctamente.");
        await fetchLotes();
      }
    } catch (error) {
      alert("Error al eliminar el lote.");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{success}</div>}

      <h2 className="text-2xl font-bold mb-4">Agregar Lote</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="mb-4">
          <label htmlFor="Id_producto" className="block font-medium">ID del Producto</label>
          <input
            type="number"
            {...register("Id_producto")}
            className={`w-full px-3 py-2 border rounded ${errors.Id_producto ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.Id_producto && <p className="text-sm text-red-600">{errors.Id_producto.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="Precio_compra" className="block font-medium">Precio de Compra</label>
          <input
            type="number"
            step="0.01"
            {...register("Precio_compra")}
            className={`w-full px-3 py-2 border rounded ${errors.Precio_compra ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.Precio_compra && <p className="text-sm text-red-600">{errors.Precio_compra.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="Cantidad" className="block font-medium">Cantidad</label>
          <input
            type="number"
            {...register("Cantidad")}
            className={`w-full px-3 py-2 border rounded ${errors.Cantidad ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.Cantidad && <p className="text-sm text-red-600">{errors.Cantidad.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="Fecha" className="block font-medium">Fecha</label>
          <input
            type="date"
            {...register("Fecha")}
            className={`w-full px-3 py-2 border rounded ${errors.Fecha ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.Fecha && <p className="text-sm text-red-600">{errors.Fecha.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isSubmitting ? "Agregando..." : "Agregar Lote"}
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Lista de Lotes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
          <thead>
            <tr className="bg-black text-white text-left text-sm font-semibold">
              <th className="px-4 py-2 border-b">ID Lote</th>
              <th className="px-4 py-2 border-b">ID Producto</th>
              <th className="px-4 py-2 border-b">Precio Compra</th>
              <th className="px-4 py-2 border-b">Cantidad</th>
              <th className="px-4 py-2 border-b">Stock</th>
              <th className="px-4 py-2 border-b">Fecha</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {lotes.map((lote) => (
              <tr key={lote.Id_lote} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{lote.Id_lote}</td>
                <td className="px-4 py-2 border-b">{lote.Id_producto}</td>
                <td className="px-4 py-2 border-b">${lote.Precio_compra}</td>
                <td className="px-4 py-2 border-b">{lote.Cantidad}</td>
                <td className="px-4 py-2 border-b">{lote.Stock}</td>
                <td className="px-4 py-2 border-b">{new Date(lote.Fecha).toLocaleDateString()}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() =>
                      window.location.href = `/lote_productos/${lote.Id_lote}`
                    }
                  >
                    Editar
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(lote.Id_lote)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {lotes.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No hay lotes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
