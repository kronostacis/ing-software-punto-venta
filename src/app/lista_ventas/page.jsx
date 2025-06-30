"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

// Modal para mostrar el detalle de la venta
function DetalleVentaModal({ venta, detalle, onClose }) {
  if (!venta || !detalle) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Detalle de Venta #{venta.Id_venta}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Fecha:</strong>{" "}
            {new Date(venta.Fecha_venta).toLocaleString("es-CL", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
          <p>
            <strong>Total:</strong>{" "}
            <span className="font-semibold text-lg text-green-600">
              ${venta.Total_venta.toLocaleString()}
            </span>
          </p>
          <p>
            <strong>Utilidad:</strong>{" "}
            <span className="font-semibold text-blue-600">
              ${venta.Utilidad_total.toLocaleString()}
            </span>
          </p>
          <p>
            <strong>Atendido por:</strong> {venta.Usuarios.Nombre}
          </p>
          <p>
            <strong>Medio de Pago:</strong> {venta.Medio_pagos.Nombre_pago}
          </p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Productos:</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {Array.isArray(detalle) && detalle.length > 0 ? (
              detalle.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-50 p-2 rounded-md"
                >
                  <div>
                    <p className="font-semibold">
                      {item.Productos?.Nombre || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Cantidad: {item.Cantidad}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-800">
                    ${item.Precio_total.toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No hay detalles para mostrar.</p>
            )}
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none shadow-md"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ListaVentas() {
  const [ventas, setVentas] = useState([]);
  const [selectedVenta, setSelectedVenta] = useState(null);
  const [detalle, setDetalle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("card"); // 'card' or 'table'
  const router = useRouter();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axios.get("/api/usuarios/session");
        if (res.status === 200) {
          setUserRole(res.data.cargo);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        router.push("/login");
      }
    };
    fetchUserRole();
  }, [router]);

  useEffect(() => {
    if (userRole !== null) {
      if (userRole !== 1 && userRole !== 2) {
        router.push("/not-found");
      } else {
        axios
          .get("/api/ventas")
          .then((res) => setVentas(res.data))
          .catch((error) => console.error("Error en la solicitud:", error));
      }
    }
  }, [userRole, router]);

  const verDetalle = async (venta) => {
    setSelectedVenta(venta);
    try {
      const res = await axios.get(`/api/ventas/${venta.Id_venta}`);
      setDetalle(res.data);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error al obtener detalle:", err);
      setDetalle(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVenta(null);
    setDetalle(null);
  };

  const handleDownloadReceipt = async (saleId) => {
    try {
      const response = await axios.get(`/api/generate_receipt/${saleId}`, {
        responseType: "blob", // Important for downloading files
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `comprobante_venta_${saleId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading receipt:", error);
      alert("Error al descargar el comprobante.");
    }
  };

  if (userRole === null) {
    return <div>Cargando...</div>; // O un spinner de carga
  }

  if (userRole !== 1 && userRole !== 2) {
    return null; // No renderizar nada si no tiene permisos, ya se redirigió
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Listado de Ventas</h1>
        <button
          onClick={() => setViewMode(viewMode === "card" ? "table" : "card")}
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          {viewMode === "card" ? "Ver Tabla" : "Ver Tarjetas"}
        </button>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventas.map((venta) => (
            <div
              key={venta.Id_venta}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-800">
                    Venta #{venta.Id_venta}
                  </h2>
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      venta.Id_estado_venta === 1
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {venta.Id_estado_venta === 1 ? "Completada" : "Pendiente"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(venta.Fecha_venta).toLocaleString("es-CL", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="flex justify-between">
                    <strong>Total:</strong>{" "}
                    <span className="font-semibold">
                      ${venta.Total_venta.toLocaleString()}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <strong>Atendido por:</strong>{" "}
                    <span className="font-semibold">
                      {venta.Usuarios.Nombre}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <strong>Medio de Pago:</strong>{" "}
                    <span className="font-semibold">
                      {venta.Medio_pagos.Nombre_pago}
                    </span>
                  </p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => verDetalle(venta)}
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
                  >
                    Ver Detalle
                  </button>
                  <button
                    onClick={() => handleDownloadReceipt(venta.Id_venta)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none"
                  >
                    Descargar Comprobante
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID Venta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Atendido por
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medio de Pago
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ventas.map((venta) => (
                <tr key={venta.Id_venta} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {venta.Id_venta}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(venta.Fecha_venta).toLocaleString("es-CL", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${venta.Total_venta.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {venta.Usuarios.Nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {venta.Medio_pagos.Nombre_pago}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        venta.Id_estado_venta === 1
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {venta.Id_estado_venta === 1 ? "Completada" : "Pendiente"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => verDetalle(venta)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Ver Detalle
                    </button>
                    <button
                      onClick={() => handleDownloadReceipt(venta.Id_venta)}
                      className="text-green-600 hover:text-green-900"
                    >
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <DetalleVentaModal
          venta={selectedVenta}
          detalle={detalle}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
