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
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-20 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Seccion de Reportes</h1>

      <div className="w-full max-w-6xl flex flex-col gap-10">
        <GraficoBarra
          title="Ventas Diarias"
          data={ventasDiarias}
          xKey="fecha"
          yKey="total"
        />

        <GraficoBarra
          title="Ventas Mensuales"
          data={ventasMensuales}
          xKey="Mes"
          yKey="Total"
        />

        <GraficoBarra
          title="Ventas por Medio de Pago"
          data={ventasPorPago}
          xKey="metodo"
          yKey="total"
        />
      </div>
    </div>
  );
}
