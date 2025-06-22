"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListaVentas() {
  const [ventas, setVentas] = useState([]);
  const [idSeleccionado, setIdSeleccionado] = useState(null);
  const [detalle, setDetalle] = useState(null);

  // Obtener todas las ventas al cargar
  useEffect(() => {
    axios
      .get("/api/ventas")
      .then((res) => {
        if (res.status === 200) {
          setVentas(res.data);
        } else {
          console.error("Error al obtener las ventas");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);

  // Función para ver el detalle de una venta
  const verDetalle = async (id) => {
    setIdSeleccionado(id);
    try {
      const res = await axios.get(`/api/ventas/${id}`);
      setDetalle(res.data);
    } catch (err) {
      console.error("Error al obtener detalle:", err);
      setDetalle(null);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-screen p-8 font-sans">
      {/* Lista de ventas */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Ventas</h1>
        {ventas.map((venta) => (
          <div
            key={venta.Id_venta}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <h2 className="text-xl font-bold">Venta #{venta.Id_venta}</h2>
            <p>Fecha: {venta.Fecha}</p>
            <p>Total: ${venta.Total_venta}</p>
            <p>Utilidad: ${venta.Utilidad_total}</p>
            <p>ID Usuario: {venta.Id_usuario}</p>
            <p>
              Estado: {venta.Id_estado_venta === 0 ? "Pendiente" : "Completada"}
            </p>
            <button
              onClick={() => verDetalle(venta.Id_venta)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Ver Detalle
            </button>
          </div>
        ))}
      </div>

      {/* Cuadro de detalle */}
      <div>
        {detalle && (
          <div className="bg-gray-100 p-6 rounded shadow-md sticky top-20">
            <h2 className="text-xl font-bold mb-2">Detalle de Venta #{idSeleccionado}</h2>
            {Array.isArray(detalle) ? (
              detalle.map((item, i) => (
                <div key={i} className="mb-2 border-b pb-2">
                  <p><strong>Producto:</strong> {item.Productos?.Nombre || "Nombre no disponible"}</p>
                  <p><strong>Cantidad:</strong> {item.Cantidad}</p>
                  <p><strong>Precio:</strong> ${item.Precio_total}</p>
                </div>
              ))
            ) : (
              <p>No hay detalle disponible.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
