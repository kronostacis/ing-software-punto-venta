"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GraficoBarra from "@/components/GraficoBarra";
import axios from "axios";

export default function Home() {
  const [ventasDiarias, setVentasDiarias] = useState([]);
  const [ventasMensuales, setVentasMensuales] = useState([]);
  const [ventasPorPago, setVentasPorPago] = useState([]);
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
        fetch("/api/reportes/reportes_ventasDiarias")
          .then(res => res.json())
          .then(setVentasDiarias);
        fetch("/api/reportes/reportes_ventasMensuales")
          .then(res => res.json())
          .then(setVentasMensuales);
        fetch("/api/reportes/reportes_ventasPagos")
          .then(res => res.json())
          .then(setVentasPorPago);
      }
    }
  }, [userRole, router]);

  if (userRole === null) {
    return <div>Cargando...</div>; // O un spinner de carga
  }

  if (userRole !== 1 && userRole !== 2) {
    return null; // No renderizar nada si no tiene permisos, ya se redirigió
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Panel de Reportes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <GraficoBarra
              title="Ventas Diarias"
              data={ventasDiarias}
              xKey="fecha"
              yKey="total"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <GraficoBarra
              title="Ventas Mensuales"
              data={ventasMensuales}
              xKey="Mes"
              yKey="Total"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <GraficoBarra
              title="Ventas por Medio de Pago"
              data={ventasPorPago}
              xKey="metodo"
              yKey="total"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
