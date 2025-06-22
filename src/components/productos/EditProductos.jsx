"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateProductSchema } from "@/validations/productSchema";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function EditProducto() {
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
    resolver: yupResolver(UpdateProductSchema),
  });

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(`/api/productos/${id}`);
        const producto = res.data;

        setValue("Nombre", producto.Nombre);
        setValue("Precio_venta", producto.Precio_venta);
        setValue("Stock", producto.Stock);
      } catch (err) {
        setError("No se pudo cargar el producto");
      }
    };

    fetchProducto();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");

    try {
      await axios.put(`/api/productos/${id}`, data);
      setSuccess("Producto actualizado correctamente.");

      // Esperar 1.5 segundos y volver a la página anterior
      setTimeout(() => {
        router.back();
      }, 1500);
    } catch (err) {
      const message =
        err.response?.data?.message || "Error al actualizar el producto";
      setError(message);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>

      {error && <div className="bg-red-100 p-3 mb-4 text-red-700">{error}</div>}
      {success && (
        <div className="bg-green-100 p-3 mb-4 text-green-700">{success}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Nombre</label>
          <input
            {...register("Nombre")}
            className={`w-full px-3 py-2 border ${
              errors.Nombre ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.Nombre && (
            <p className="text-sm text-red-600">{errors.Nombre.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Precio de venta</label>
          <input
            type="number"
            {...register("Precio_venta")}
            className={`w-full px-3 py-2 border ${
              errors.Precio_venta ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.Precio_venta && (
            <p className="text-sm text-red-600">{errors.Precio_venta.message}</p>
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
