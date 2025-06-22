"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateProductSchema } from "@/validations/productSchema";
import axios from "axios";

export default function ViewProductos() {
  const [productos, setProductos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CreateProductSchema),
  });

  const fetchProductos = async () => {
    try {
      const res = await axios.get("/api/productos");
      if (res.status === 200) {
        setProductos(res.data);
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/productos", data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess("Producto agregado correctamente.");
        reset();
        await fetchProductos(); // Esperamos a que termine de actualizar la lista
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Error al crear el producto.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmacion = window.confirm("¿Deseas eliminar este producto?");
    if (!confirmacion) return;

    try {
      const res = await axios.delete(`/api/productos/${id}`);
      if (res.status === 200) {
        alert("Producto eliminado correctamente.");
        await fetchProductos(); // Actualizamos lista luego de eliminar
      }
    } catch (error) {
      alert("Error al eliminar el producto.");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      {/* Mensajes */}
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{success}</div>}

      {/* Formulario de producto */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}
          <div className="mb-4">
            <label htmlFor="Nombre" className="block mb-1 font-medium">Nombre</label>
            <input
              id="Nombre"
              type="text"
              {...register("Nombre")}
              className={`w-full px-3 py-2 border rounded ${
                errors.Nombre ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Nombre del producto"
            />
            {errors.Nombre && <p className="text-sm text-red-600">{errors.Nombre.message}</p>}
          </div>

          {/* Precio de venta */}
          <div className="mb-4">
            <label htmlFor="Precio_venta" className="block mb-1 font-medium">Precio de Venta</label>
            <input
              id="Precio_venta"
              type="number"
              {...register("Precio_venta")}
              className={`w-full px-3 py-2 border rounded ${
                errors.Precio_venta ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Precio del producto"
            />
            {errors.Precio_venta && <p className="text-sm text-red-600">{errors.Precio_venta.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSubmitting ? "Agregando..." : "Agregar Producto"}
          </button>
        </form>
      </div>

      {/* Tabla de productos */}
      <h2 className="text-2xl font-bold my-6">Productos Registrados</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
          <thead>
            <tr className="bg-black text-white text-left text-sm font-semibold">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Precio</th>
              <th className="px-4 py-2 border-b">Stock</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.Id_producto} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{producto.Id_producto}</td>
                <td className="px-4 py-2 border-b">{producto.Nombre}</td>
                <td className="px-4 py-2 border-b">${producto.Precio_venta}</td>
                <td className="px-4 py-2 border-b">{producto.Stock || 0}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() =>
                      window.location.href = `/productos/${producto.Id_producto}`
                    }
                  >
                    Editar
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(producto.Id_producto)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {productos.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No hay productos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
