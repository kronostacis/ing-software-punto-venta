"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateLoteSchema } from "@/validations/loteSchema";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function EditLote() {
  const { id } = useParams();
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateLoteSchema),
  });

  useEffect(() => {
    const fetchLote = async () => {
      try {
        const res = await axios.get(`/api/lote_productos/${id}`);
        const lote = res.data;

        setValue("Id_producto", lote.Id_producto);
        setValue("Precio_compra", lote.Precio_compra);
        setValue("Cantidad", lote.Cantidad);
        setValue("Stock", lote.Stock);
      } catch (err) {
        setError("No se pudo cargar el lote");
      }
    };

    fetchLote();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");

    try {
      await axios.put(`/api/lote_productos/${id}`, data);
      setSuccess("Lote actualizado correctamente.");

      // Esperar 1.5 segundos y volver atrás
      setTimeout(() => {
        router.back();
      }, 1500);
    } catch (err) {
      const message =
        err.response?.data?.message || "Error al actualizar el lote producto";
      setError(message);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Editar lote de producto</h2>

      {error && <div className="bg-red-100 p-3 mb-4 text-red-700">{error}</div>}
      {success && (
        <div className="bg-green-100 p-3 mb-4 text-green-700">{success}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Stock</label>
          <input
            {...register("Stock")}
            className={`w-full px-3 py-2 border ${
              errors.Stock ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.Stock && (
            <p className="text-sm text-red-600">{errors.Stock.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
